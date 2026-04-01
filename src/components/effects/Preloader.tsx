"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: 0,
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
          onComplete: () => setVisible(false),
        });
      },
    });

    const d = 0.18;

    tl.to(".preloader-3", d, { width: 35 })
      .set(".preloader-2", { rotate: 90, transformOrigin: "45px 45px", marginLeft: 0 })
      .to(".preloader-2", d, { width: 90 })
      .set(".preloader-2", { transformOrigin: "72px 17px", rotate: 270 })
      .to(".preloader-2", d, { width: 35 })
      .to(".preloader-1", d, { width: 90 })
      .set(".preloader-1", { transformOrigin: "45px 17.5px", rotate: 180 })
      .to(".preloader-1", d, { width: 35 })
      .set(".preloader-3", { transformOrigin: "45px 45px", rotate: 270, marginTop: 0 })
      .to(".preloader-3", d, { width: 90 })
      .set(".preloader-3", { transformOrigin: "17.5px 17.5px", rotate: 90 })
      .to(".preloader-3", d, { width: 35 })
      .set(".preloader-2", { transformOrigin: "45px 45px", rotate: 180 })
      .to(".preloader-2", d, { width: 90 })
      .set(".preloader-2", { transformOrigin: "bottom center", marginTop: 20 })
      .to(".preloader-2", d, { width: 35 })
      .set(".preloader-1", { transformOrigin: "45px 45px", rotate: 90 })
      .to(".preloader-1", d, { width: 90 })
      .set(".preloader-1", { transformOrigin: "72px 17.5px", rotate: 270 })
      .to(".preloader-1", d, { width: 35 })
      .set(".preloader-3", { transformOrigin: "45px 17.5px", rotate: 180, marginTop: 55 })
      .to(".preloader-3", d, { width: 90 })
      .set(".preloader-2", { marginLeft: 55 });

    return () => {
      tl.kill();
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
    >
      <div className="relative" style={{ width: 90, height: 90 }}>
        <div
          className="preloader-1"
          style={{
            position: "absolute",
            width: 35,
            height: 35,
            border: "10px solid #C74634",
            borderRadius: 40,
          }}
        />
        <div
          className="preloader-2"
          style={{
            position: "absolute",
            width: 35,
            height: 35,
            border: "10px solid #C74634",
            borderRadius: 40,
            marginLeft: 55,
          }}
        />
        <div
          className="preloader-3"
          style={{
            position: "absolute",
            width: 90,
            height: 35,
            border: "10px solid #C74634",
            borderRadius: 40,
            marginTop: 55,
          }}
        />
      </div>
    </div>
  );
}
