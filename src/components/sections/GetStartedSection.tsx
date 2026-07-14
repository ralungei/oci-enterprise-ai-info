"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import type { GetStartedContent } from "@/data/types";
import ConsoleScreenshot from "@/components/ConsoleScreenshot";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/ui-strings";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 30, scale: 0.97 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
});

function BentoCard({
  children,
  className = "",
  delay = 0,
  accent,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  accent?: boolean;
}) {
  return (
    <motion.div
      {...fade(delay)}
      className={`rounded-3xl p-8 ${
        accent
          ? "bg-gradient-to-br from-oracle-red to-[#e85d4a] text-white"
          : "bg-white/[0.04] border border-white/[0.08] text-white"
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}

const fwIcons: [string, string][] = [
  ["OpenAI", "simple-icons:openai"],
  ["LangChain", "simple-icons:langchain"],
  ["CrewAI", "solar:users-group-rounded-bold-duotone"],
  ["AutoGen", "simple-icons:microsoft"],
  ["LlamaIndex", "solar:book-bold-duotone"],
  ["Pydantic", "simple-icons:pydantic"],
];

export default function GetStartedSection({ content: _content }: { content: GetStartedContent }) {
  const { lang } = useLanguage();
  return (
    <section className="py-32 md:py-40 bg-dark-text text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div {...fade(0)} className="text-center mb-16">
          <p className="text-sm font-bold text-oracle-red uppercase tracking-[0.2em] mb-5">
            {t("start.recap", lang)}
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
            {t("start.everything", lang)}
            <br />
            <span className="bg-gradient-to-r from-oracle-red to-[#e85d4a] bg-clip-text text-transparent">
              {t("start.onePlatform", lang)}
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[190px]">

          {/* 1. Hero recap — tall, spans 2 cols */}
          <BentoCard
            className="col-span-2 row-span-2 flex flex-col justify-between"
            delay={0.05}
            accent
          >
            <div>
              <Image
                src="/oracle-logo.svg"
                alt="Oracle"
                width={60}
                height={40}
                className="brightness-0 invert opacity-80 mb-4"
              />
              <h3 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
                {t("start.oci", lang)}<br />{t("start.enterpriseAi", lang)}
              </h3>
            </div>
            <p className="text-white/70 text-sm mt-auto">
              {t("start.tagline", lang)}
            </p>
          </BentoCard>

          {/* 2. Models — big number */}
          <BentoCard delay={0.1}>
            <Icon icon="solar:stars-bold-duotone" className="text-oracle-red mb-3" width={28} height={28} />
            <p className="text-5xl font-extrabold tracking-tight">{t("start.providers", lang)}</p>
            <p className="text-sm text-white/40 mt-2">{t("start.providersLabel", lang)}<br />{t("start.noLockin", lang)}</p>
          </BentoCard>

          {/* 3. Tools — big number */}
          <BentoCard delay={0.15}>
            <Icon icon="solar:widget-bold-duotone" className="text-oracle-red mb-3" width={28} height={28} />
            <p className="text-5xl font-extrabold tracking-tight">{t("start.toolsNum", lang)}</p>
            <p className="text-sm text-white/40 mt-2">{t("start.toolsLabel", lang)}<br />{t("start.readyToUse", lang)}</p>
          </BentoCard>

          {/* 4. Memory */}
          <BentoCard delay={0.2}>
            <Icon icon="solar:database-bold-duotone" className="text-oracle-red mb-3" width={28} height={28} />
            <p className="text-2xl font-extrabold">{t("start.memory", lang)}</p>
            <p className="text-sm text-white/40 mt-2">{t("start.memoryDesc", lang)}</p>
          </BentoCard>

          {/* 5. Zero Data Retention */}
          <BentoCard delay={0.25}>
            <Icon icon="solar:shield-check-bold-duotone" className="text-oracle-red mb-3" width={28} height={28} />
            <p className="text-2xl font-extrabold">{t("start.zero", lang)}</p>
            <p className="text-sm text-white/40 mt-2">{t("start.zeroDesc", lang)}</p>
          </BentoCard>

          {/* 6. Frameworks — wide card */}
          <BentoCard className="col-span-2 flex flex-col justify-between" delay={0.3}>
            <div>
              <p className="text-sm font-bold text-oracle-red uppercase tracking-wider mb-2">{t("start.frameworks", lang)}</p>
              <p className="text-xl font-extrabold">{t("start.frameworksDesc", lang)}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {fwIcons.map(([name, icon]) => (
                <div key={name} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.06]">
                  <Icon icon={icon} className="text-white/50" width={13} height={13} />
                  <span className="text-[11px] text-white/50 font-semibold">{name}</span>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* 7. Deploy — wide card */}
          <BentoCard className="col-span-2 flex flex-col justify-between" delay={0.35}>
            <div>
              <p className="text-sm font-bold text-oracle-red uppercase tracking-wider mb-4">{t("start.deploy", lang)}</p>
              <p className="text-2xl font-extrabold">{t("start.deployDesc", lang)}</p>
            </div>
            <div className="flex gap-3 mt-4">
              {[t("start.selfHost", lang), t("start.seamless", lang), t("start.fullyHosted", lang)].map((tier) => (
                <div key={tier} className="px-4 py-2 rounded-xl bg-white/[0.06] text-xs font-semibold text-white/50">
                  {tier}
                </div>
              ))}
            </div>
          </BentoCard>

          {/* 8. Regions — big number */}
          <BentoCard delay={0.4}>
            <Icon icon="solar:global-bold-duotone" className="text-oracle-red mb-3" width={28} height={28} />
            <p className="text-5xl font-extrabold tracking-tight">{t("start.regionsNum", lang)}</p>
            <p className="text-sm text-white/40 mt-2">{t("start.regions", lang)}<br />{t("start.worldwide", lang)}</p>
          </BentoCard>

          {/* 9. OpenAI SDK */}
          <BentoCard delay={0.45}>
            <Icon icon="simple-icons:openai" className="text-white/60 mb-3" width={28} height={28} />
            <p className="text-2xl font-extrabold">{t("start.openaiSdk", lang)}</p>
            <p className="text-sm text-white/40 mt-2">{t("start.compatible", lang)}</p>
          </BentoCard>
        </div>

        {/* Console screenshots — getting started steps */}
        <motion.div {...fade(0.5)} className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <ConsoleScreenshot
              src="/screenshots/create-project.png"
              alt="Create GenAI Project"
              caption={t("screenshot.createProject", lang)}
              dark
            />
            <ConsoleScreenshot
              src="/screenshots/11-api-key-create-filled.png"
              alt="Create API Key"
              caption={t("screenshot.createApiKey", lang)}
              dark
            />
            <ConsoleScreenshot
              src="/screenshots/09-project-how-to-use.png"
              alt="How to use the project"
              caption={t("screenshot.howToUse", lang)}
              dark
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
