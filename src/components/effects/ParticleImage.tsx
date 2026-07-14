"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  r: number;
  g: number;
  b: number;
  size: number;
  vx: number;
  vy: number;
}

interface ParticleImageProps {
  src: string;
  width?: number;
  height?: number;
  className?: string;
  particleGap?: number;
  particleSize?: number;
  scatterRadius?: number;
}

export default function ParticleImage({
  src,
  width = 400,
  height = 250,
  className = "",
  particleGap = 4,
  particleSize = 2,
  scatterRadius = 200,
}: ParticleImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999, isOver: false });
  const animFrameRef = useRef<number>(0);
  const isVisibleRef = useRef(false);
  const [loaded, setLoaded] = useState(false);

  const initParticles = useCallback(
    (ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
      const offscreen = document.createElement("canvas");
      offscreen.width = width;
      offscreen.height = height;
      const offCtx = offscreen.getContext("2d")!;
      offCtx.drawImage(img, 0, 0, width, height);

      const imageData = offCtx.getImageData(0, 0, width, height);
      const pixels = imageData.data;
      const particles: Particle[] = [];

      // Use larger gap for fewer particles
      const gap = Math.max(particleGap, 5);

      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          const i = (y * width + x) * 4;
          const a = pixels[i + 3];
          if (a < 128) continue;

          const r = pixels[i];
          const g = pixels[i + 1];
          const b = pixels[i + 2];
          if (r + g + b < 30) continue;

          const angle = Math.random() * Math.PI * 2;
          const dist = Math.random() * scatterRadius + 50;

          particles.push({
            x: x + Math.cos(angle) * dist,
            y: y + Math.sin(angle) * dist,
            originX: x,
            originY: y,
            r,
            g,
            b,
            size: particleSize + Math.random() * 1,
            vx: 0,
            vy: 0,
          });
        }
      }

      particlesRef.current = particles;
      setLoaded(true);
    },
    [width, height, particleGap, particleSize, scatterRadius]
  );

  // IntersectionObserver to pause when off-screen
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { rootMargin: "100px" }
    );
    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    canvas.width = width;
    canvas.height = height;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => initParticles(ctx, img);
    img.src = src;

    return () => {
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [src, width, height, initParticles]);

  useEffect(() => {
    if (!loaded) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);

      // Skip rendering when off-screen
      if (!isVisibleRef.current) return;

      ctx.clearRect(0, 0, width, height);
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const targetX = mouse.isOver ? p.originX : p.originX + (p.x > p.originX ? 0.1 : -0.1);
        const targetY = mouse.isOver ? p.originY : p.originY + (p.y > p.originY ? 0.1 : -0.1);

        const ease = mouse.isOver ? 0.08 : 0.02;
        p.vx += (targetX - p.x) * ease;
        p.vy += (targetY - p.y) * ease;
        p.vx *= 0.9;
        p.vy *= 0.9;
        p.x += p.vx;
        p.y += p.vy;

        // Simplified distance for color interpolation (skip sqrt)
        const dx = p.x - p.originX;
        const dy = p.y - p.originY;
        const distSq = dx * dx + dy * dy;
        const maxDistSq = 6400; // 80 * 80
        const t = Math.min(distSq / maxDistSq, 1);

        const gray = (p.r + p.g + p.b) / 3;
        const r = (p.r * (1 - t) + gray * t) | 0;
        const g = (p.g * (1 - t) + gray * t) | 0;
        const b = (p.b * (1 - t) + gray * t) | 0;
        const alpha = mouse.isOver ? 1 : 0.4 + (1 - t) * 0.6;

        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    animate();

    return () => cancelAnimationFrame(animFrameRef.current);
  }, [loaded, width, height]);

  const handleMouseEnter = () => {
    mouseRef.current.isOver = true;
  };

  const handleMouseLeave = () => {
    mouseRef.current.isOver = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
  };

  return (
    <canvas
      ref={canvasRef}
      className={`${className} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
      width={width}
      height={height}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ width, height }}
    />
  );
}
