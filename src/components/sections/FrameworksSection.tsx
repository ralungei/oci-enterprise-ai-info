"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { BuildContent } from "@/data/types";

function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}) {
  const offset =
    direction === "up"
      ? { y: 50 }
      : direction === "left"
      ? { x: 50 }
      : direction === "right"
      ? { x: -50 }
      : {};
  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SelectionPills({ frameworks }: { frameworks: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10">
      {frameworks.map((fw, i) => (
        <button
          key={fw}
          onClick={() => setActiveIndex(i)}
          className="relative px-5 py-2.5 text-sm font-semibold rounded-xl transition-colors z-10"
        >
          {i === activeIndex && (
            <motion.div
              layoutId="pill-indicator"
              className="absolute inset-0 bg-oracle-red rounded-xl shadow-lg shadow-oracle-red/25"
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
            />
          )}
          <span
            className={`relative z-10 ${
              i === activeIndex ? "text-white" : "text-white/50 hover:text-white/70"
            }`}
          >
            {fw}
          </span>
        </button>
      ))}
    </div>
  );
}

export default function FrameworksSection({ content }: { content: BuildContent }) {
  return (
    <section className="py-32 md:py-40 bg-[#0a0a0f] text-white noise-overlay">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <Reveal>
              <div className="accent-bar mb-6" />
              <p className="text-sm font-bold text-oracle-red uppercase tracking-[0.2em] mb-5">
                Build
              </p>
              <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
                Use what you
                <br />
                <span className="bg-gradient-to-r from-[#e85d4a] to-[#C74634] bg-clip-text text-transparent">
                  already know.
                </span>
              </h2>
              <p className="text-xl text-white/40 mt-6 leading-relaxed">
                Compatible with every major framework. 3-line migration from
                OpenAI. Zero vendor lock-in.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-10">
              <SelectionPills frameworks={content.frameworks} />
            </Reveal>
          </div>

          <Reveal direction="right">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-oracle-red/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative code-block">
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="text-xs text-white/20 ml-2 font-mono">3-line migration</span>
                </div>
                <pre><code>{content.migrationCode}</code></pre>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
