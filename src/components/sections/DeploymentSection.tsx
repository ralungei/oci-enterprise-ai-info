"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import type { DeployContent } from "@/data/types";
import DownloadFolder from "@/components/effects/DownloadFolder";

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

export default function DeploymentSection({ content }: { content: DeployContent }) {
  return (
    <section className="py-32 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="accent-bar mx-auto mb-6" />
            <p className="text-sm font-bold text-oracle-red uppercase tracking-[0.2em] mb-5">
              Deploy
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold text-dark-text leading-[1.05] tracking-tight">
              All your AI apps.
              <br />
              <span className="gradient-text">One place.</span>
            </h2>
            <div className="flex justify-center mt-8">
              <DownloadFolder />
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {content.tiers.map((t, i) => (
            <Reveal key={t.tier} delay={i * 0.12}>
              <div
                className={`relative rounded-3xl p-10 h-full border-2 ${
                  t.accent
                    ? "bg-oracle-red text-white border-oracle-red shadow-2xl shadow-oracle-red/20"
                    : "bg-white border-gray-100 hover:border-oracle-red/20"
                } transition-all hover:-translate-y-1`}
              >
                {t.accent && (
                  <span className="absolute -top-3.5 left-8 text-xs font-extrabold uppercase tracking-widest bg-dark-text text-white px-4 py-1.5 rounded-full">
                    Recommended
                  </span>
                )}
                <h3 className={`text-2xl font-extrabold ${t.accent ? "text-white" : "text-dark-text"}`}>
                  {t.tier}
                </h3>
                <p className={`text-sm font-semibold mt-2 ${t.accent ? "text-white/70" : "text-oracle-red"}`}>
                  {t.sub}
                </p>
                <ul className="mt-8 space-y-4">
                  {t.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-3 text-base ${
                        t.accent ? "text-white/80" : "text-medium-gray"
                      }`}
                    >
                      <Icon
                        icon="solar:check-circle-bold"
                        className={`shrink-0 mt-0.5 ${t.accent ? "text-white/50" : "text-oracle-red"}`}
                        width={18}
                        height={18}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Operations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {content.operations.map((op, i) => (
            <Reveal key={op.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-oracle-red/10 flex items-center justify-center mx-auto mb-5">
                  <Icon icon={op.icon} className="text-oracle-red" width={32} height={32} />
                </div>
                <h4 className="text-xl font-extrabold text-dark-text">{op.title}</h4>
                <ul className="mt-4 space-y-2">
                  {op.bullets.map((b) => (
                    <li key={b} className="text-sm text-medium-gray leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Hosted Deployments Deep-Dive */}
        {content.hostedFeatures && content.hostedFeatures.length > 0 && (
          <div className="mt-28">
            <Reveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h3 className="text-3xl md:text-4xl font-extrabold text-dark-text leading-tight">
                  Hosted Deployments —{" "}
                  <span className="gradient-text">explained.</span>
                </h3>
                <p className="text-lg text-medium-gray mt-4 leading-relaxed">
                  Think of it as managed hosting for your AI agents. Containerize your app, push it, and OCI handles everything else.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.hostedFeatures.map((feat, i) => (
                <Reveal key={feat.title} delay={i * 0.08}>
                  <div className="bg-light-gray rounded-2xl p-8 h-full hover:shadow-md transition-shadow border border-gray-100">
                    <div className="w-12 h-12 rounded-xl bg-oracle-red/10 flex items-center justify-center mb-5">
                      <Icon icon={feat.icon} className="text-oracle-red" width={24} height={24} />
                    </div>
                    <h4 className="text-lg font-extrabold text-dark-text">{feat.title}</h4>
                    <p className="text-base text-medium-gray mt-3 leading-relaxed">{feat.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
