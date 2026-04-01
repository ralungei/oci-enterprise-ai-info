"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import type { ModelsContent } from "@/data/types";
import CursorGlow, { GlowCard } from "@/components/effects/CursorGlow";
import VideoPlaceholder from "@/components/effects/VideoPlaceholder";

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

export default function ModelsShowcase({ content }: { content: ModelsContent }) {
  return (
    <section className="py-32 md:py-40 mesh-gradient-2">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <Reveal>
              <div className="accent-bar mb-6" />
              <p className="text-sm font-bold text-oracle-red uppercase tracking-[0.2em] mb-5">
                Models
              </p>
              <h2 className="text-4xl md:text-6xl font-extrabold text-dark-text leading-[1.05] tracking-tight">
                No lock-in.
                <br />
                <span className="gradient-text">Your choice.</span>
              </h2>
              <p className="text-medium-gray mt-6 text-xl leading-relaxed">
                Pioneering agreements with all major providers.
                Switch models with one line of code. Your data is never used to train models.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-10">
              <div className="code-block">
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="text-xs text-white/20 ml-2 font-mono">quickstart.py</span>
                </div>
                <pre><code>{content.codeExample}</code></pre>
              </div>
            </Reveal>
          </div>

          <CursorGlow className="grid grid-cols-2 gap-5" glowColor="rgba(199, 70, 52, 0.2)">
            {content.providers.map((p, i) => (
              <Reveal key={p.provider} delay={i * 0.08}>
                <GlowCard className="rounded-2xl h-full">
                  <div className="rounded-2xl bg-white p-6 border border-gray-100 h-full">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-bold text-dark-text text-lg">{p.provider}</span>
                      <span className="text-xs font-bold text-oracle-red bg-oracle-red/10 px-3 py-1 rounded-full">
                        {p.badge}
                      </span>
                    </div>
                    <p className="text-sm text-medium-gray leading-relaxed">{p.models}</p>
                  </div>
                </GlowCard>
              </Reveal>
            ))}
          </CursorGlow>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
          {content.deploymentModes.map((mode, i) => (
            <Reveal key={mode.title} direction={i === 0 ? "left" : "right"}>
              <div
                className={`rounded-3xl p-10 hover:shadow-xl transition-shadow ${
                  mode.accent
                    ? "border-2 border-oracle-red/30 bg-oracle-red-light hover:shadow-oracle-red/10"
                    : "border border-gray-100 bg-white"
                }`}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      mode.accent ? "bg-oracle-red/10" : "bg-light-gray"
                    }`}
                  >
                    <Icon icon={mode.icon} className="text-oracle-red" width={28} height={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-text">{mode.title}</h3>
                    <p className={`text-sm ${mode.accent ? "text-oracle-red font-bold" : "text-medium-gray"}`}>
                      {mode.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-base text-medium-gray leading-relaxed">{mode.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Key Messages */}
        {content.keyMessages && content.keyMessages.length > 0 && (
          <div className="mt-24 space-y-8">
            <Reveal>
              <h3 className="text-2xl font-extrabold text-dark-text text-center mb-12">
                What this means for you
              </h3>
            </Reveal>
            {content.keyMessages.map((msg, i) => (
              <Reveal key={msg.title} delay={i * 0.1}>
                <div className="flex items-start gap-6 bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-oracle-red/10 flex items-center justify-center shrink-0">
                    <Icon icon={msg.icon} className="text-oracle-red" width={28} height={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-dark-text">{msg.title}</h4>
                    <p className="text-base text-medium-gray mt-2 leading-relaxed">{msg.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* Demo video */}
        <Reveal className="mt-20 max-w-3xl mx-auto">
          <VideoPlaceholder
            videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
            replacementLabel="Model switching & Responses API demo"
            posterText="Switch models with one line of code"
          />
        </Reveal>
      </div>
    </section>
  );
}
