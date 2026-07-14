"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import type { ModelsContent } from "@/data/types";
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

const providerLogos: Record<string, { icon: string; color: string }> = {
  OpenAI: { icon: "simple-icons:openai", color: "#000000" },
  Google: { icon: "simple-icons:google", color: "#4285F4" },
  xAI: { icon: "simple-icons:x", color: "#000000" },
  Meta: { icon: "simple-icons:meta", color: "#0668E1" },
  Cohere: { icon: "solar:stars-bold-duotone", color: "#39594D" },
  BYOM: { icon: "solar:server-square-cloud-bold-duotone", color: "#C74634" },
};

export default function ModelsShowcase({ content }: { content: ModelsContent }) {
  const { lang } = useLanguage();
  return (
    <section className="py-32 md:py-40 mesh-gradient-2">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="accent-bar mb-6" />
          <p className="text-sm font-bold text-oracle-red uppercase tracking-[0.2em] mb-5">
            {t("models.label", lang)}
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-dark-text leading-[1.05] tracking-tight">
            {t("models.title1", lang)}
            <br />
            <span className="gradient-text">{t("models.title2", lang)}</span>
          </h2>
          <p className="text-medium-gray mt-6 text-xl leading-relaxed max-w-2xl">
            {t("models.subtitle", lang)}
          </p>
        </Reveal>

        {/* Provider cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          {content.providers.map((p, i) => {
            const logo = providerLogos[p.provider];
            return (
              <Reveal key={p.provider} delay={i * 0.06}>
                <div className="rounded-3xl bg-white border border-gray-100 p-8 hover:shadow-xl hover:border-oracle-red/20 transition-all group flex items-center gap-4">
                  {logo && (
                    <Icon
                      icon={logo.icon}
                      width={36}
                      height={36}
                      style={{ color: logo.color }}
                      className="group-hover:scale-110 transition-transform shrink-0"
                    />
                  )}
                  <h3 className="text-xl font-extrabold text-dark-text">
                    {p.provider}
                  </h3>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Key Messages */}
        {content.keyMessages && content.keyMessages.length > 0 && (
          <div className="mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.keyMessages.map((msg, i) => (
                <Reveal key={msg.title} delay={i * 0.1}>
                  <div className="p-8 h-full">
                    <div className="w-12 h-12 rounded-2xl bg-oracle-red/10 flex items-center justify-center mb-5">
                      <Icon icon={msg.icon} className="text-oracle-red" width={24} height={24} />
                    </div>
                    <h4 className="text-lg font-extrabold text-dark-text">{msg.title}</h4>
                    <p className="text-base text-medium-gray mt-2 leading-relaxed">{msg.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Deployment Modes */}
        <Reveal>
          <h3 className="text-2xl font-extrabold text-dark-text text-center mt-24 mb-12">
            {t("models.howToConsume", lang)}
          </h3>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.deploymentModes.map((mode, i) => (
            <Reveal key={mode.title} direction={i === 0 ? "left" : "right"}>
              <div
                className={`rounded-3xl p-10 hover:shadow-xl transition-shadow ${
                  mode.accent
                    ? "border-2 border-oracle-red/30 bg-oracle-red-light hover:shadow-oracle-red/10"
                    : "border border-gray-100 bg-white"
                }`}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      mode.accent ? "bg-oracle-red/10" : "bg-light-gray"
                    }`}
                  >
                    <Icon icon={mode.icon} className="text-oracle-red" width={28} height={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-text">{mode.title}</h3>
                    <p className={`text-sm ${mode.accent ? "text-oracle-red font-bold" : "text-medium-gray"}`}>
                      {mode.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-base text-medium-gray leading-relaxed">{mode.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
