"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import type { DeployContent } from "@/data/types";
import DownloadFolder from "@/components/effects/DownloadFolder";
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

const tierIcons = [
  "solar:server-bold-duotone",
  "solar:box-bold-duotone",
  "solar:cloud-bold-duotone",
];

const tierColors = [
  "border-gray-200",
  "border-oracle-red/30",
  "border-oracle-red/30",
];

export default function DeploymentSection({ content }: { content: DeployContent }) {
  const { lang } = useLanguage();
  return (
    <section className="py-32 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="accent-bar mx-auto mb-6" />
            <p className="text-sm font-bold text-oracle-red uppercase tracking-[0.2em] mb-5">
              {t("deploy.label", lang)}
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold text-dark-text leading-[1.05] tracking-tight">
              {t("deploy.title1", lang)}
              <br />
              <span className="gradient-text">{t("deploy.title2", lang)}</span>
            </h2>
          </Reveal>
        </div>

        {/* Hosted Deployments Deep-Dive */}
        {content.hostedFeatures && content.hostedFeatures.length > 0 && (
          <div className="mt-28">
            <Reveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h3 className="text-3xl md:text-4xl font-extrabold text-dark-text leading-tight">
                  {t("deploy.hostedTitle", lang)}
                </h3>
                <p className="text-lg text-medium-gray mt-4 leading-relaxed">
                  {t("deploy.hostedDesc", lang)}
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.hostedFeatures.map((feat, i) => (
                <Reveal key={feat.title} delay={i * 0.08}>
                  <div className="bg-light-gray rounded-2xl p-8 h-full hover:shadow-md transition-shadow border border-gray-100">
                    <Icon icon={feat.icon} className="text-oracle-red mb-5" width={40} height={40} />
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
