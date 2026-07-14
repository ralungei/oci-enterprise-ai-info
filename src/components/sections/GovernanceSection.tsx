"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import type { DataPrivacyContent, ObservabilityContent, SecurityAuthContent } from "@/data/types";
import ConsoleScreenshot from "@/components/ConsoleScreenshot";
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

const tabDefs = [
  { id: "privacy", labelKey: "gov.tabPrivacy" as const, icon: "solar:shield-check-bold-duotone" },
  { id: "security", labelKey: "gov.tabSecurity" as const, icon: "solar:lock-keyhole-bold-duotone" },
  { id: "observability", labelKey: "gov.tabObs" as const, icon: "solar:chart-bold-duotone" },
] as const;

type TabId = (typeof tabDefs)[number]["id"];

const methodIcons: Record<string, string> = {
  "GenAI API Key": "solar:key-bold-duotone",
  "OCI IAM": "solar:shield-user-bold-duotone",
  "OAuth 2.0": "solar:lock-keyhole-bold-duotone",
  "Resource Principal": "solar:server-bold-duotone",
};

export default function GovernanceSection({
  privacy,
  observability,
  security,
}: {
  privacy: DataPrivacyContent;
  observability: ObservabilityContent;
  security: SecurityAuthContent;
}) {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabId>("privacy");

  return (
    <section className="relative py-32 md:py-40 bg-dark-text text-white">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="accent-bar mb-6" />
          <p className="text-sm font-bold text-oracle-red uppercase tracking-[0.2em] mb-5">
            {t("gov.label", lang)}
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
            {t("gov.title1", lang)}
            <br />
            <span className="bg-gradient-to-r from-oracle-red to-[#e85d4a] bg-clip-text text-transparent">
              {t("gov.title2", lang)}
            </span>
          </h2>
          <p className="text-white/40 mt-6 text-xl max-w-xl leading-relaxed">
            {t("gov.subtitle", lang)}
          </p>
        </Reveal>

        {/* Tab selector */}
        <Reveal delay={0.1} className="mt-14">
          <div className="inline-flex gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10">
            {tabDefs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative px-6 py-3 text-sm font-semibold rounded-xl transition-colors z-10 flex items-center gap-2"
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="gov-tab"
                    className="absolute inset-0 bg-oracle-red rounded-xl shadow-lg shadow-oracle-red/25"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <Icon
                  icon={tab.icon}
                  width={16}
                  height={16}
                  className={`relative z-10 ${activeTab === tab.id ? "text-white" : "text-white/40"}`}
                />
                <span className={`relative z-10 ${activeTab === tab.id ? "text-white" : "text-white/50 hover:text-white/70"}`}>
                  {t(tab.labelKey, lang)}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Tab content */}
        <div className="mt-12 min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === "privacy" && (
              <motion.div
                key="privacy"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {privacy.principles.map((p, i) => (
                    <motion.div
                      key={p.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 hover:border-oracle-red/30 transition-all"
                    >
                      <Icon icon={p.icon} className="text-oracle-red mb-4" width={32} height={32} />
                      <h4 className="font-bold text-white text-lg">{p.title}</h4>
                      <p className="text-sm text-white/40 mt-3 leading-relaxed">{p.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "security" && (
              <motion.div
                key="security"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Auth methods */}
                <h3 className="text-xl font-bold text-white mb-6">{t("gov.authMethods", lang)}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {security.authMethods.map((auth, i) => (
                    <motion.div
                      key={auth.method}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 hover:border-oracle-red/30 transition-all"
                    >
                      <Icon
                        icon={methodIcons[auth.method] || "solar:key-bold-duotone"}
                        className="text-oracle-red mb-3"
                        width={24}
                        height={24}
                      />
                      <h4 className="font-bold text-white text-base">{auth.method}</h4>
                      <span className="text-xs text-oracle-red font-semibold">{auth.useCase}</span>
                      <p className="text-sm text-white/40 mt-2 leading-relaxed">{auth.desc}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Compliance */}
                <h3 className="text-xl font-bold text-white mt-12 mb-6">{t("gov.compliance", lang)}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {security.compliance.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.08 }}
                      className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 hover:border-oracle-red/30 transition-all"
                    >
                      <Icon icon={item.icon} className="text-oracle-red mb-3" width={24} height={24} />
                      <h4 className="font-bold text-white text-sm">{item.title}</h4>
                      <p className="text-xs text-white/40 mt-2 leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "observability" && (
              <motion.div
                key="observability"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    {observability.tools.map((tool, i) => (
                      <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-10 h-10 rounded-xl bg-oracle-red/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon icon={tool.icon} className="text-oracle-red" width={20} height={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-base">{tool.name}</h4>
                          <p className="text-sm text-white/40 mt-1 leading-relaxed">{tool.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="rounded-2xl bg-[#0a0a0f] p-7"
                  >
                    <div className="flex items-center gap-1.5 mb-4">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                      <span className="text-xs text-white/20 ml-2 font-mono">agent_trace.log</span>
                    </div>
                    <div className="space-y-1 font-mono text-xs">
                      {observability.traceLog.map((line, i) => (
                        <p
                          key={i}
                          className={
                            line.startsWith("//")
                              ? "text-white/20"
                              : line.includes("Total:")
                              ? "text-oracle-red font-bold mt-3"
                              : "text-green-400/70"
                          }
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
