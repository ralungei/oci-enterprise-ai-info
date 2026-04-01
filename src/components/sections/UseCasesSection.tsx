"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import type { UseCasesContent } from "@/data/types";
import ParticleImage from "@/components/effects/ParticleImage";

const industryIcons: Record<string, string> = {
  "Financial Services": "solar:wallet-money-bold-duotone",
  "Supply Chain": "solar:delivery-bold-duotone",
  "Customer Experience": "solar:chat-round-like-bold-duotone",
  "Manufacturing": "solar:settings-bold-duotone",
  "Oracle Internal (Dogfooding)": "solar:buildings-bold-duotone",
};

const industryImages: Record<string, string> = {
  "Financial Services": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
  "Supply Chain": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop",
  "Customer Experience": "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=400&h=250&fit=crop",
  "Manufacturing": "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&h=250&fit=crop",
  "Oracle Internal (Dogfooding)": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop",
};

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

export default function UseCasesSection({ content }: { content: UseCasesContent }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-32 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="accent-bar mx-auto mb-6" />
            <p className="text-sm font-bold text-oracle-red uppercase tracking-[0.2em] mb-5">
              Use Cases
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold text-dark-text leading-[1.05] tracking-tight">
              Agents across
              <span className="gradient-text"> every industry.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {content.industries.map((ind, i) => (
            <Reveal key={ind.industry} delay={i * 0.1}>
              <div
                className="glow-card rounded-3xl bg-light-gray border border-gray-100 cursor-pointer transition-all hover:shadow-lg overflow-hidden"
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              >
                {/* Particle image header */}
                <div className="relative w-full overflow-hidden bg-[#0a0a0f] flex items-center justify-center" style={{ height: 180 }}>
                  <ParticleImage
                    src={industryImages[ind.industry] || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop"}
                    width={400}
                    height={180}
                    particleGap={3}
                    particleSize={1.5}
                    scatterRadius={150}
                    className="absolute inset-0"
                  />
                  {/* Overlay with industry name */}
                  <div className="relative z-10 text-center pointer-events-none">
                    <Icon
                      icon={industryIcons[ind.industry] || "solar:buildings-bold-duotone"}
                      className="text-white/80 mx-auto drop-shadow-lg"
                      width={36}
                      height={36}
                    />
                  </div>
                </div>

                <div className="p-9">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-extrabold text-dark-text text-2xl">{ind.industry}</h3>
                      <span className="inline-block mt-3 text-sm font-bold text-oracle-red bg-oracle-red/10 px-4 py-1.5 rounded-full">
                        {ind.impact}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-oracle-red/40 mt-1"
                    >
                      <Icon icon="solar:alt-arrow-down-linear" width={24} height={24} />
                    </motion.div>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-6">
                    {ind.cases.map((c) => (
                      <span key={c} className="text-sm text-medium-gray bg-white px-4 py-2 rounded-xl border border-gray-100 font-medium">
                        {c}
                      </span>
                    ))}
                  </div>

                  <AnimatePresence>
                    {expandedIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-base text-medium-gray mt-6 pt-6 border-t border-gray-200 leading-relaxed">
                          {ind.details}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
