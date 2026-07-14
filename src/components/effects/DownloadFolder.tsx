"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import "./download-folder.css";

export default function DownloadFolder({ className = "" }: { className?: string }) {
  const downloadRef = useRef<HTMLDivElement>(null);
  const folderFrontRef = useRef<SVGSVGElement>(null);
  const isVisibleRef = useRef(false);

  const handleClick = useCallback(() => {
    const download = downloadRef.current;
    const folderFront = folderFrontRef.current;
    if (!download || !folderFront) return;

    const page = document.createElement("div");
    page.classList.add("dl-page-2");
    download.insertBefore(page, folderFront);

    const keyframes = [0.0, 0.2, 0.27, 0.35, 0.55, 2.0];
    const timespan = (start: number, end: number) => ({
      delay: keyframes[start],
      duration: keyframes[end] - keyframes[start],
    });

    gsap.fromTo(page, { "--ratio-page-2-offset": 1, "--ratio-page-2-height": 1 } as gsap.TweenVars, {
      "--ratio-page-2-offset": 0,
      ...timespan(0, 3),
      onComplete: () => page.remove(),
    } as gsap.TweenVars);

    gsap.fromTo(page, { "--opacity-page-2": 0 } as gsap.TweenVars, { "--opacity-page-2": 1, ...timespan(0, 1) } as gsap.TweenVars);
    gsap.to(page, { "--ratio-page-2-height": 0.5, ...timespan(2, 3) } as gsap.TweenVars);

    gsap.fromTo(download, { "--scale-pages": 1 } as gsap.TweenVars, { "--scale-pages": 0.8, ...timespan(3, 4) } as gsap.TweenVars);
    gsap.to(download, { "--scale-pages": 1, ease: "elastic", ...timespan(4, 5) } as gsap.TweenVars);

    gsap.fromTo(download, { "--scale-folder": 1 } as gsap.TweenVars, { "--scale-folder": 1.12, ...timespan(3, 4) } as gsap.TweenVars);
    gsap.to(download, { "--scale-folder": 1, ease: "elastic", ...timespan(4, 5) } as gsap.TweenVars);
  }, []);

  // Only run interval when visible
  useEffect(() => {
    const el = downloadRef.current;
    if (!el) return;

    let interval: ReturnType<typeof setInterval>;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          handleClick();
          interval = setInterval(() => {
            if (isVisibleRef.current) handleClick();
          }, 8000);
        } else {
          clearInterval(interval);
        }
      },
      { rootMargin: "50px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [handleClick]);

  return (
    <div className={`dl-wrapper ${className}`}>
      <div ref={downloadRef} className="dl-download" onClick={handleClick}>
        <svg className="dl-folder-back" viewBox="0 0 48 48">
          <path
            d="M 3.50 7.50 C 3.50 5.29 5.28 3.50 7.49 3.50 C 13.17 3.50 23.18 3.50 26.00 3.50 C 30.00 3.50 28.00 6.00 32.00 6.00 C 34.21 6.00 37.87 6.00 40.71 6.00 C 42.93 6.00 44.73 7.82 44.71 10.04 L 44.54 25.04 C 44.52 27.24 42.74 29.00 40.54 29.00 H 7.50 C 5.29 29.00 3.50 27.21 3.50 25.00 V 7.50 Z"
            fill="#a3382a"
          />
        </svg>
        <div className="dl-page-1" />
        <svg ref={folderFrontRef} className="dl-folder-front" viewBox="0 0 48 48">
          <defs>
            <linearGradient id="dl-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#e85d4a", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#C74634", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            d="M 2.36 24.31 C 2.17 23.09 3.11 22.00 4.34 22.00 H 40.90 C 41.80 22.00 42.33 23.00 41.83 23.75 L 41.40 24.40 C 41.16 24.76 41.16 25.24 41.40 25.60 V 25.60 C 41.73 26.10 42.40 26.23 42.90 25.90 L 43.50 25.50 V 25.50 C 44.75 24.88 46.17 25.93 45.94 27.31 L 43.57 41.17 C 43.24 43.09 41.57 44.50 39.63 44.50 H 8.93 C 6.95 44.50 5.28 43.06 4.97 41.11 L 2.36 24.31 Z"
            fill="url(#dl-gradient)"
          />
        </svg>
      </div>
    </div>
  );
}
