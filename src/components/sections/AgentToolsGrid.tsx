"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import type { ToolsContent } from "@/data/types";
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

export default function AgentToolsGrid({ content }: { content: ToolsContent }) {
  const { lang } = useLanguage();
  // First 4 tools are native, last 2 are custom
  const nativeTools = content.tools.slice(0, 4);
  const customTools = content.tools.slice(4);

  return (
    <section className="py-32 md:py-40 bg-light-gray">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="accent-bar mb-6" />
          <p className="text-sm font-bold text-oracle-red uppercase tracking-[0.2em] mb-5">
            {t("tools.label", lang)}
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-dark-text leading-[1.05] tracking-tight">
            {t("tools.title1", lang)}
            <br />
            <span className="gradient-text">{t("tools.title2", lang)}</span>
          </h2>
          <p className="text-xl text-medium-gray mt-6 leading-relaxed max-w-2xl">
            {t("tools.subtitle", lang)}
          </p>
        </Reveal>

        {/* OCI Console entry point */}
        <Reveal delay={0.15} className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <ConsoleScreenshot
              src="/screenshots/home-searching-generative-ai-service.png"
              alt="Searching for Generative AI in OCI Console"
              caption={t("screenshot.searchGenai", lang)}
            />
            <ConsoleScreenshot
              src="/screenshots/05-generative-ai-overview-ralungei.png"
              alt="OCI Generative AI service overview"
              caption={t("screenshot.genaiOverview", lang)}
            />
          </div>
        </Reveal>

        {/* Two categories intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-white border-2 border-oracle-red/20 p-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-oracle-red/10 flex items-center justify-center">
                  <Icon icon="solar:widget-bold-duotone" className="text-oracle-red" width={24} height={24} />
                </div>
                <h3 className="text-2xl font-extrabold text-dark-text">{t("tools.nativeTools", lang)}</h3>
              </div>
              <p className="text-base text-medium-gray leading-relaxed">
                {t("tools.nativeDesc", lang)}
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {nativeTools.map((t) => (
                  <span key={t.name} className="text-xs font-bold text-oracle-red bg-oracle-red/5 px-3 py-1.5 rounded-full">
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="rounded-3xl bg-white border border-gray-100 p-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center">
                  <Icon icon="solar:tuning-bold-duotone" className="text-dark-text" width={24} height={24} />
                </div>
                <h3 className="text-2xl font-extrabold text-dark-text">{t("tools.customTools", lang)}</h3>
              </div>
              <p className="text-base text-medium-gray leading-relaxed">
                {t("tools.customDesc", lang)}
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {customTools.map((t) => (
                  <span key={t.name} className="text-xs font-bold text-medium-gray bg-gray-100 px-3 py-1.5 rounded-full">
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Native tools detail sections */}
        <div className="mt-28">
          <Reveal>
            <h3 className="text-2xl font-extrabold text-dark-text mb-16">
              {t("tools.nativeTools", lang)}
            </h3>
          </Reveal>
          <div className="space-y-24">
            {nativeTools.map((tool, i) => {
              const isEven = i % 2 === 0;
              return (
                <Reveal key={tool.name} delay={0.1}>
                  <div className={`max-w-xl ${!isEven ? "ml-auto" : ""}`}>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-oracle-red/10 flex items-center justify-center">
                        <Icon icon={tool.icon} className="text-oracle-red" width={28} height={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-dark-text">{tool.name}</h3>
                        <p className="text-sm text-oracle-red font-semibold">{tool.desc}</p>
                      </div>
                    </div>
                    <div className="space-y-5 mt-6">
                      <div>
                        <h4 className="text-sm font-bold text-dark-text uppercase tracking-wider mb-2">
                          {t("tools.whatItDoes", lang)}
                        </h4>
                        <p className="text-base text-medium-gray leading-relaxed">
                          {tool.whatItDoes}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-dark-text uppercase tracking-wider mb-2">
                          {t("tools.howItWorks", lang)}
                        </h4>
                        <p className="text-base text-medium-gray leading-relaxed">
                          {tool.howItWorks}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Custom tools compact section */}
        <div className="mt-28">
          <Reveal>
            <h3 className="text-2xl font-extrabold text-dark-text mb-10">
              {t("tools.customTools", lang)}
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {customTools.map((tool, i) => (
              <Reveal key={tool.name} delay={i * 0.1}>
                <div className="rounded-2xl bg-white border border-gray-100 p-8 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center mb-5">
                    <Icon icon={tool.icon} className="text-dark-text" width={24} height={24} />
                  </div>
                  <h4 className="text-xl font-extrabold text-dark-text">{tool.name}</h4>
                  <p className="text-sm text-oracle-red font-semibold mt-1">{tool.desc}</p>
                  <p className="text-sm text-medium-gray mt-4 leading-relaxed">{tool.whatItDoes}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Multi-tool orchestration */}
        <Reveal className="mt-32">
          <div className="rounded-3xl bg-white border border-gray-100 p-10 md:p-14 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-bold text-oracle-red bg-oracle-red/10 px-4 py-1.5 rounded-full">
                  {t("tools.multiTool", lang)}
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-dark-text mt-6">
                  {t("tools.multiToolTitle1", lang)}
                  <br />{t("tools.multiToolTitle2", lang)}
                </h3>
                <p className="text-lg text-medium-gray mt-4 leading-relaxed">
                  {t("tools.multiToolDesc", lang)}
                </p>
                <ul className="mt-8 space-y-3">
                  {[
                    t("tools.dropIn", lang),
                    t("tools.agentDecides", lang),
                    t("tools.zeroRetention", lang),
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-base text-dark-text">
                      <Icon icon="solar:check-circle-bold" className="text-oracle-red shrink-0" width={18} height={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="code-block">
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <span className="text-xs text-white/20 ml-2 font-mono">multi_tool_agent.py</span>
                </div>
                <pre><code>{content.multiToolCode}</code></pre>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
