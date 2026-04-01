"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { HeroContent } from "@/data/types";
import GalaxyButton from "@/components/effects/GalaxyButton";

export default function HeroSection({ content }: { content: HeroContent }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f] noise-overlay"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-[700px] h-[700px] rounded-full bg-oracle-red/[0.08] blur-[150px] animate-float" />
        <div
          className="absolute -bottom-20 right-[-10%] w-[800px] h-[500px] rounded-full bg-oracle-red/[0.06] blur-[130px] animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-oracle-red via-oracle-red-dark to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <motion.div
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        className="relative max-w-6xl mx-auto px-6 pt-36 pb-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/10 bg-white/5 mb-10"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-medium text-white/60 tracking-wide uppercase">
            {content.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-extrabold text-white leading-[0.95] tracking-tight"
        >
          {content.titleLines[0]}
          <br />
          <span className="bg-gradient-to-r from-[#e85d4a] via-[#C74634] to-[#a3382a] bg-clip-text text-transparent">
            {content.titleLines[1]}
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#C74634] via-[#e85d4a] to-[#C74634] bg-clip-text text-transparent">
            {content.titleLines[2]}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl md:text-2xl text-white/40 mt-8 max-w-2xl leading-relaxed"
        >
          {content.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap gap-5 mt-12"
        >
          <GalaxyButton href="#platform" variant="primary">
            <span className="flex items-center gap-2">
              Explore the Platform
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </GalaxyButton>
          <GalaxyButton href="#get-started" variant="secondary">
            Get Started
          </GalaxyButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
        >
          <div className="w-1.5 h-2.5 bg-white/30 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
