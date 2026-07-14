"use client";

import { motion } from "framer-motion";
import type { ChallengeContent } from "@/data/types";
import OdometerNumber from "@/components/effects/OdometerNumber";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/ui-strings";

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

export default function ProblemSection({ content }: { content: ChallengeContent }) {
  const { lang } = useLanguage();
  return (
    <section className="py-32 md:py-40 mesh-gradient-1">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="accent-bar mb-6" />
          <p className="text-sm font-bold text-oracle-red uppercase tracking-[0.2em] mb-5">
            {t("challenge.label", lang)}
          </p>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-extrabold text-dark-text leading-[1.05] tracking-tight">
              {content.headline}
              <span className="gradient-text"> {content.headlineAccent}</span>
            </h2>
            <p className="text-medium-gray mt-8 text-xl leading-relaxed">
              {content.subtext}
            </p>
          </Reveal>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5">
            {content.stats.map((stat) => (
              <div
                key={stat.num}
                className="glow-card rounded-2xl bg-white p-7 border border-gray-100"
              >
                <OdometerNumber
                  value={stat.num}
                  className="text-3xl md:text-4xl font-extrabold text-oracle-red tracking-tight"
                />
                <p className="text-sm text-medium-gray mt-3 leading-relaxed">
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Reveal className="mt-28">
          <div className="relative flex flex-col md:flex-row items-stretch gap-6">
            {content.timeline.map((p, i) => (
              <Reveal key={p.year} delay={i * 0.15} className="flex-1">
                <div
                  className={`relative rounded-2xl p-8 h-full border ${
                    i === 2
                      ? "bg-oracle-red text-white border-oracle-red shadow-2xl shadow-oracle-red/20"
                      : "bg-white border-gray-100"
                  }`}
                >
                  <div
                    className={`text-4xl font-extrabold ${
                      i === 2 ? "text-white" : "text-oracle-red"
                    }`}
                  >
                    {p.year}
                  </div>
                  <div
                    className={`text-xl font-bold mt-2 ${
                      i === 2 ? "text-white" : "text-dark-text"
                    }`}
                  >
                    {p.phase}
                  </div>
                  <p
                    className={`text-base mt-3 ${
                      i === 2 ? "text-white/70" : "text-medium-gray"
                    }`}
                  >
                    {p.desc}
                  </p>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 text-oracle-red/30 text-3xl font-bold">
                      &rarr;
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
