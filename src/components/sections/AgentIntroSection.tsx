"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import type { WhatIsAgentContent } from "@/data/types";
import TinderSwipe, { type SwipeCard } from "@/components/effects/TinderSwipe";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/ui-strings";

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
  const { lang } = useLanguage();
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
              {t("agent.label", lang)}
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold text-dark-text leading-[1.05] tracking-tight">
              {t("agent.title1", lang)}
              <br />
              <span className="gradient-text">{t("agent.title2", lang)}</span>
            </h2>
            <p className="text-xl text-medium-gray mt-6 leading-relaxed max-w-2xl mx-auto">
              {content.definition}
            </p>
          </Reveal>
        </div>

        {/* 4 Component Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {content.components.map((comp, i) => (
            <Reveal key={comp.name} delay={i * 0.1}>
              <div className="rounded-2xl border border-gray-100 bg-white p-8 h-full hover:shadow-lg transition-shadow">
                <Icon icon={comp.icon} className="text-oracle-red" width={40} height={40} />
                <h3 className="text-lg font-extrabold text-dark-text mt-4">{comp.name}</h3>
                <p className="text-sm text-medium-gray mt-2 leading-relaxed">{comp.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>


        {/* Quiz — Tinder Swipe (hidden) */}
        {/* <Reveal delay={0.3}>
          <div className="mt-24">
            <h3 className="text-2xl font-extrabold text-dark-text text-center mb-3">
              {t("agent.quizTitle", lang)}
            </h3>
            <p className="text-medium-gray text-center mb-10">
              {t("agent.quizSubtitle", lang)}
            </p>
            <TinderSwipe cards={swipeCards} />
          </div>
        </Reveal> */}
      </div>
    </section>
  );
}
