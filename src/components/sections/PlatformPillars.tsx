"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import type { PlatformContent } from "@/data/types";
import CursorGlow, { GlowCard } from "@/components/effects/CursorGlow";
import IsometricLayers from "@/components/effects/IsometricLayers";

export default function PlatformPillars({ content }: { content: PlatformContent }) {
  return (
    <section className="py-32 md:py-40 bg-[#0a0a0f] text-white overflow-hidden noise-overlay">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="accent-bar mb-6" />
          <p className="text-sm font-bold text-oracle-red uppercase tracking-[0.2em] mb-5">
            The Platform
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Two pillars.<br />
            <span className="bg-gradient-to-r from-oracle-red to-[#e85d4a] bg-clip-text text-transparent">One governance layer.</span>
          </h2>
          <p className="text-white/40 mt-6 text-xl max-w-xl leading-relaxed">
            Build agents with the Managed AI API. Deploy them with Hosted Deployments. Govern everything from one place.
          </p>
        </motion.div>

        {/* Isometric Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex justify-center mt-16 mb-4"
        >
          <IsometricLayers />
        </motion.div>

        {/* Agent Lifecycle */}
        {content.lifecycle && content.lifecycle.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20 mb-4"
          >
            <p className="text-sm font-bold text-white/30 uppercase tracking-[0.2em] mb-8 text-center">
              Agent Lifecycle
            </p>
            <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
              {content.lifecycle.map((step, i) => (
                <div key={step.label} className="flex items-center gap-2 md:gap-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center hover:border-oracle-red/40 transition-colors">
                      <Icon icon={step.icon} className="text-oracle-red" width={24} height={24} />
                    </div>
                    <span className="text-xs text-white/40 font-medium">{step.label}</span>
                  </motion.div>
                  {i < content.lifecycle.length - 1 && (
                    <Icon
                      icon="solar:arrow-right-bold"
                      className="text-white/15 hidden md:block mt-[-20px]"
                      width={16}
                      height={16}
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <CursorGlow
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
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
      </div>
    </section>
  );
}
