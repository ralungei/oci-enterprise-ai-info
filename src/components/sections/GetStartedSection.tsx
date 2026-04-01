"use client";

import { motion } from "framer-motion";
import type { GetStartedContent } from "@/data/types";
import GalaxyButton from "@/components/effects/GalaxyButton";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function GetStartedSection({ content }: { content: GetStartedContent }) {
  return (
    <section className="py-32 md:py-44 bg-[#0a0a0f] text-white noise-overlay relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-oracle-red/[0.06] blur-[200px]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
              Ready to build?
            </h2>
            <p className="text-xl text-white/40 mt-6 max-w-lg mx-auto leading-relaxed">
              From zero to your first agent in 5 steps. Production-ready.
              Available today in 9 regions.
            </p>
          </Reveal>

          {/* Timeline */}
          <Reveal delay={0.2}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-0 mt-16">
              {content.steps.map((s, i) => (
                <div key={s.step} className="flex items-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-oracle-red/20 border-2 border-oracle-red/30 flex items-center justify-center text-oracle-red font-extrabold text-lg animate-pulse-glow">
                      {s.step}
                    </div>
                    <span className="text-sm text-white/50 text-center font-medium max-w-[100px]">
                      {s.label}
                    </span>
                    <span className="text-xs text-white/25 text-center max-w-[120px] hidden md:block">
                      {s.desc}
                    </span>
                  </div>
                  {i < content.steps.length - 1 && (
                    <div className="hidden md:block w-12 h-[2px] bg-gradient-to-r from-oracle-red/30 to-oracle-red/10 mx-2 mt-[-40px]" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-5 mt-14">
              <GalaxyButton
                href="https://docs.oracle.com/iaas/Content/generative-ai"
                variant="primary"
              >
                <span className="flex items-center gap-2">
                  Read the Docs
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </GalaxyButton>
              <GalaxyButton
                href="https://docs.oracle.com/iaas/Content/generative-ai/create-api-key.htm"
                variant="secondary"
              >
                Create API Key
              </GalaxyButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
