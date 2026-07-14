"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoCursorProps {
  videoUrl: string;
  replacementLabel: string;
  posterText?: string;
  className?: string;
}

export default function VideoCursor({
  videoUrl,
  replacementLabel,
  posterText,
  className = "",
}: VideoCursorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cursorVideoRef = useRef<HTMLVideoElement>(null);
  const cursorDivRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const rafRef = useRef<number>(0);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  // Smooth cursor follow with direct DOM manipulation (no setState)
  useEffect(() => {
    if (!isHovering) return;

    const animate = () => {
      const lerpFactor = 0.12;
      currentRef.current.x +=
        (targetRef.current.x - currentRef.current.x) * lerpFactor;
      currentRef.current.y +=
        (targetRef.current.y - currentRef.current.y) * lerpFactor;

      const el = cursorDivRef.current;
      if (el) {
        el.style.left = `${currentRef.current.x - 50}px`;
        el.style.top = `${currentRef.current.y - 50}px`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isHovering]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isPlaying) return;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      targetRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    },
    [isPlaying]
  );

  const handleMouseEnter = useCallback(() => {
    if (isPlaying) return;
    setIsHovering(true);
    cursorVideoRef.current?.play().catch(() => {});
  }, [isPlaying]);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    cursorVideoRef.current?.pause();
  }, []);

  const handleClick = useCallback(() => {
    setIsPlaying(true);
    setIsHovering(false);
    setTimeout(() => videoRef.current?.play(), 100);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-2xl overflow-hidden bg-[#0a0a0f] aspect-video ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: isHovering ? "none" : isPlaying ? "default" : "pointer" }}
    >
      <AnimatePresence mode="wait">
        {!isPlaying ? (
          <motion.div
            key="poster"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10"
            onClick={handleClick}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]" />
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(199,70,52,0.3),transparent_70%)]" />

            <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${isHovering ? "opacity-30" : "opacity-100"}`}>
              <div className="w-16 h-16 rounded-full bg-oracle-red/20 flex items-center justify-center border border-oracle-red/30">
                <svg className="w-7 h-7 text-oracle-red ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              {posterText && (
                <p className="text-white/50 text-sm font-medium mt-4">{posterText}</p>
              )}
              <p className="text-white/25 text-xs font-mono mt-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
                Replace with: {replacementLabel}
              </p>
            </div>

            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0"
          >
            <video
              ref={videoRef}
              src={videoUrl}
              className="w-full h-full object-cover"
              controls
              autoPlay
              playsInline
              muted
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating video cursor — rendered via ref, no state-driven re-renders */}
      {isHovering && !isPlaying && (
        <div
          ref={cursorDivRef}
          className="absolute z-20 pointer-events-none"
          style={{ width: 100, height: 100 }}
        >
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-oracle-red/60 shadow-2xl shadow-oracle-red/20 relative">
            <video
              ref={cursorVideoRef}
              src={videoUrl}
              className="w-full h-full object-cover scale-[2]"
              muted
              playsInline
              loop
              preload="none"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <svg className="w-8 h-8 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="text-xs font-bold text-white bg-oracle-red/80 px-3 py-1 rounded-full backdrop-blur-sm">
              Click to play
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
