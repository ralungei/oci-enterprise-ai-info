"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import type { PlatformContent } from "@/data/types";
import CursorGlow, { GlowCard } from "@/components/effects/CursorGlow";
import IsometricLayers from "@/components/effects/IsometricLayers";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/ui-strings";

export default function PlatformPillars({ content }: { content: PlatformContent }) {
  const { lang } = useLanguage();
  return (
    <section className="relative py-32 md:py-40 bg-dark-text text-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="accent-bar mb-6" />
          <p className="text-sm font-bold text-oracle-red uppercase tracking-[0.2em] mb-5">
            {t("platform.label", lang)}
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
            {t("platform.title1", lang)}<br />
            <span className="bg-gradient-to-r from-oracle-red to-[#e85d4a] bg-clip-text text-transparent">{t("platform.title2", lang)}</span>
          </h2>
          <p className="text-white/40 mt-6 text-xl max-w-xl leading-relaxed">
            {t("platform.subtitle", lang)}
          </p>
        </motion.div>

        <CursorGlow
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-3xl mx-auto"
          glowColor="rgba(199, 70, 52, 0.35)"
        >
          {content.pillars.map((pillar, i) => (
            <motion.div
              key={pillar.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="rounded-3xl"
            >
              <GlowCard className="rounded-3xl h-full">
                <div
                  className={`rounded-3xl border border-white/[0.08] bg-gradient-to-br ${pillar.gradient} p-10 h-full hover:border-white/20 transition-all duration-500`}
                >
                  <div className="text-sm text-white/20 font-mono mb-8 font-bold">
                    {pillar.num}
                  </div>
                  <h3 className="text-3xl font-extrabold">{pillar.name}</h3>
                  <p className="text-sm text-oracle-red font-bold mt-2 uppercase tracking-wider">
                    {pillar.tagline}
                  </p>
                  <p className="text-base text-white/50 mt-5 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </CursorGlow>

        {/* Isometric overview */}
        <div className="mt-20 mb-4 flex justify-center">
          <IsometricLayers />
        </div>
      </div>
    </section>
  );
}
