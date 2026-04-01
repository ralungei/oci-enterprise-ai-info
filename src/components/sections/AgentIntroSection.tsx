"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import type { WhatIsAgentContent } from "@/data/types";
import CursorGlow, { GlowCard } from "@/components/effects/CursorGlow";
import TinderSwipe, { type SwipeCard } from "@/components/effects/TinderSwipe";

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

export default function AgentIntroSection({ content }: { content: WhatIsAgentContent }) {
  const swipeCards: SwipeCard[] = content.quiz.map((q, i) => ({
    id: i,
    scenario: q.scenario,
    isAgent: q.isAgent,
    explanation: q.explanation,
  }));

  return (
    <section className="py-32 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="accent-bar mx-auto mb-6" />
            <p className="text-sm font-bold text-oracle-red uppercase tracking-[0.2em] mb-5">
              What is an Agent
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold text-dark-text leading-[1.05] tracking-tight">
              What is an Agent,
              <br />
              <span className="gradient-text">Really?</span>
            </h2>
            <p className="text-xl text-medium-gray mt-6 leading-relaxed max-w-2xl mx-auto">
              {content.definition}
            </p>
          </Reveal>
        </div>

        {/* 4 Component Cards */}
        <CursorGlow
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          glowColor="rgba(199, 70, 52, 0.25)"
        >
          {content.components.map((comp, i) => (
            <Reveal key={comp.name} delay={i * 0.1}>
              <GlowCard className="rounded-2xl h-full">
                <div className="rounded-2xl border border-gray-100 bg-white p-8 h-full hover:shadow-lg transition-shadow">
                  <Icon icon={comp.icon} className="text-oracle-red" width={40} height={40} />
                  <h3 className="text-lg font-extrabold text-dark-text mt-4">{comp.name}</h3>
                  <p className="text-sm text-medium-gray mt-2 leading-relaxed">{comp.desc}</p>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </CursorGlow>

        {/* Spectrum */}
        <Reveal delay={0.2}>
          <div className="mt-24">
            <h3 className="text-2xl font-extrabold text-dark-text text-center mb-10">
              The Agent Spectrum
            </h3>
            <div className="relative">
              <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gray-100 rounded-full mx-16" />
              <div className="hidden md:block absolute top-8 left-1/2 right-0 h-1 bg-gradient-to-r from-oracle-red/40 to-oracle-red rounded-full mx-16" />

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {content.spectrum.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                    className="text-center"
                  >
                    <div
                      className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center border-4 transition-colors ${
                        item.isAgent
                          ? "bg-oracle-red text-white border-oracle-red shadow-lg shadow-oracle-red/20"
                          : "bg-gray-50 text-medium-gray border-gray-200"
                      }`}
                    >
                      <Icon
                        icon={item.isAgent ? "solar:check-circle-bold" : "solar:close-circle-linear"}
                        width={24}
                        height={24}
                      />
                    </div>
                    <h4
                      className={`text-base font-extrabold mt-4 ${
                        item.isAgent ? "text-oracle-red" : "text-dark-text"
                      }`}
                    >
                      {item.label}
                    </h4>
                    <p className="text-sm text-medium-gray mt-1 leading-relaxed">{item.desc}</p>
                    {!item.isAgent && (
                      <span className="inline-block mt-2 text-xs font-bold text-medium-gray bg-gray-50 px-3 py-1 rounded-full">
                        Not an agent
                      </span>
                    )}
                    {item.isAgent && (
                      <span className="inline-block mt-2 text-xs font-bold text-oracle-red bg-oracle-red/5 px-3 py-1 rounded-full">
                        Agent
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Quiz — Tinder Swipe */}
        <Reveal delay={0.3}>
          <div className="mt-24">
            <h3 className="text-2xl font-extrabold text-dark-text text-center mb-3">
              Is This an Agent?
            </h3>
            <p className="text-medium-gray text-center mb-10">
              Swipe right if you think it&apos;s an agent, left if not. Or use the buttons.
            </p>
            <TinderSwipe cards={swipeCards} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
