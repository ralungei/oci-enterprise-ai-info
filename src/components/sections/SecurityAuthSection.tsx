"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import type { SecurityAuthContent } from "@/data/types";
import "./container-query-cards.css";

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

const methodIcons: Record<string, string> = {
  "GenAI API Key": "solar:key-bold-duotone",
  "OCI IAM": "solar:shield-user-bold-duotone",
  "OAuth 2.0": "solar:lock-keyhole-bold-duotone",
  "Resource Principal": "solar:server-bold-duotone",
};

const methodAccents: Record<string, string> = {
  "GenAI API Key": "#4ade80",
  "OCI IAM": "#C74634",
  "OAuth 2.0": "#60a5fa",
  "Resource Principal": "#f59e0b",
};

export default function SecurityAuthSection({ content }: { content: SecurityAuthContent }) {
  return (
    <section className="relative py-32 md:py-40 bg-dark-text text-white">
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="accent-bar mb-6" />
          <p className="text-sm font-bold text-oracle-red uppercase tracking-[0.2em] mb-5">
            Security & Authentication
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Enterprise-grade
            <br />
            <span className="bg-gradient-to-r from-oracle-red to-[#e85d4a] bg-clip-text text-transparent">
              access control.
            </span>
          </h2>
          <p className="text-white/40 mt-6 text-xl max-w-xl leading-relaxed">
            Four authentication methods, from quick-start to production. Choose based on your use case.
          </p>
        </Reveal>

        {/* Auth method cards with container queries */}
        <div className="cq-cards-grid mt-16">
          {content.authMethods.map((auth, i) => (
            <Reveal key={auth.method} delay={i * 0.1}>
              <div
                className="cq-card"
                style={{ "--cq-accent": methodAccents[auth.method] || "#C74634" } as React.CSSProperties}
              >
                <div className="cq-card-inner">
                  <div className="cq-card-header">
                    <div className="cq-card-icon">
                      <Icon
                        icon={methodIcons[auth.method] || "solar:key-bold-duotone"}
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="cq-card-badge">{auth.useCase}</div>
                  </div>
                  <h3 className="cq-card-title">{auth.method}</h3>
                  <p className="cq-card-desc">{auth.desc}</p>
                  <div className="cq-card-footer">
                    <p className="cq-card-languages">{auth.languages}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Compliance */}
        <Reveal delay={0.15}>
          <div className="mt-24">
            <h3 className="text-2xl font-extrabold text-white mb-10">
              Compliance & Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.compliance.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 hover:border-oracle-red/30 transition-all"
                >
                  <Icon icon={item.icon} className="text-oracle-red mb-4" width={28} height={28} />
                  <h4 className="font-bold text-white text-base">{item.title}</h4>
                  <p className="text-sm text-white/40 mt-2 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
