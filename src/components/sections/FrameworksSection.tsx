"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import type { BuildContent } from "@/data/types";
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
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const frameworkLogos: Record<string, string> = {
  "OpenAI Agents SDK": "simple-icons:openai",
  LangChain: "simple-icons:langchain",
  LangGraph: "simple-icons:langchain",
  CrewAI: "solar:users-group-rounded-bold-duotone",
  AutoGen: "simple-icons:microsoft",
  "Semantic Kernel": "simple-icons:microsoft",
  LlamaIndex: "solar:book-bold-duotone",
  Pydantic: "simple-icons:pydantic",
  BYOF: "solar:code-bold-duotone",
};

export default function FrameworksSection({ content }: { content: BuildContent }) {
  const { lang } = useLanguage();
  return (
    <section className="relative py-32 md:py-40 bg-dark-text text-white">
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="accent-bar mb-6" />
          <p className="text-sm font-bold text-oracle-red uppercase tracking-[0.2em] mb-5">
            {t("build.label", lang)}
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
            {t("build.title1", lang)}
            <br />
            <span className="bg-gradient-to-r from-[#e85d4a] to-[#C74634] bg-clip-text text-transparent">
              {t("build.title2", lang)}
            </span>
          </h2>
          <p className="text-xl text-white/40 mt-6 leading-relaxed max-w-2xl">
            {t("build.subtitle", lang)}
          </p>
        </Reveal>

        {/* Framework logos inline */}
        <Reveal delay={0.2} className="mt-14">
          <div className="flex flex-wrap items-center gap-5">
            {content.frameworks.map((fw, i) => (
              <motion.div
                key={fw}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/[0.06] border border-white/[0.08] hover:border-oracle-red/40 transition-colors"
              >
                <Icon
                  icon={frameworkLogos[fw] || "solar:code-bold-duotone"}
                  className="text-white/60"
                  width={20}
                  height={20}
                />
                <span className="text-sm font-semibold text-white/70">{fw}</span>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
