"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import type { MemoryContent } from "@/data/types";
import ConsoleScreenshot from "@/components/ConsoleScreenshot";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/ui-strings";

const memoryIcons = [
  "solar:chat-round-dots-bold-duotone",
  "solar:calendar-bold-duotone",
  "solar:minimalistic-magnifer-bold-duotone",
];

function FlipCard({ mem, icon }: { mem: { title: string; sub: string; desc: string; code: string }; icon: string }) {
  const { lang } = useLanguage();
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="cursor-pointer"
      style={{ perspective: 1000 }}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="relative w-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Front */}
        <div
          className="rounded-3xl bg-light-gray p-9 border border-gray-100 flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Icon icon={icon} className="text-oracle-red" width={36} height={36} />
          <h3 className="text-2xl font-extrabold text-dark-text mt-4">{mem.title}</h3>
          <p className="text-sm font-bold text-oracle-red mt-2 uppercase tracking-wider">
            {mem.sub}
          </p>
          <p className="text-base text-medium-gray mt-4 flex-1 leading-relaxed">
            {mem.desc}
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-oracle-red font-semibold">
            <span>{t("memory.seeExample", lang)}</span>
            <Icon icon="solar:arrow-right-bold" width={14} height={14} />
          </div>
        </div>

        {/* Back */}
        <div
          className="rounded-3xl bg-white p-7 border-2 border-oracle-red/20 absolute inset-0 flex flex-col"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-extrabold text-dark-text">{mem.title}</h3>
            <span className="text-xs text-oracle-red font-bold">{t("memory.clickBack", lang)}</span>
          </div>
          <div className="flex-1 rounded-2xl bg-light-gray border border-gray-100 p-5 overflow-y-auto space-y-3">
            {mem.code.split("\n").map((line, li) => {
              if (!line.trim()) return <div key={li} className="h-2" />;
              const isUser = line.startsWith("User:") || line.startsWith("Usuario:");
              const isAgent = line.startsWith("Agent:") || line.startsWith("Agente:");
              const isLabel = line.endsWith(":") && !isUser && !isAgent;
              const isMetric = line.startsWith("Turn") || line.startsWith("Turno") || line.startsWith("#") || line.includes("tokens");

              if (isUser) {
                return (
                  <div key={li} className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-full bg-dark-text/10 flex items-center justify-center shrink-0">
                      <Icon icon="solar:user-bold" className="text-dark-text/60" width={12} />
                    </div>
                    <p className="text-sm text-dark-text font-medium leading-relaxed">
                      {line.replace(/^(User|Usuario): /, "")}
                    </p>
                  </div>
                );
              }
              if (isAgent) {
                return (
                  <div key={li} className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-full bg-oracle-red/10 flex items-center justify-center shrink-0">
                      <Icon icon="solar:cpu-bolt-bold" className="text-oracle-red" width={12} />
                    </div>
                    <p className="text-sm text-medium-gray leading-relaxed">
                      {line.replace(/^(Agent|Agente): /, "")}
                    </p>
                  </div>
                );
              }
              if (isLabel) {
                return (
                  <p key={li} className="text-xs font-bold text-oracle-red uppercase tracking-wider pt-2">
                    {line}
                  </p>
                );
              }
              if (isMetric) {
                return (
                  <p key={li} className="text-xs text-medium-gray font-mono leading-relaxed">
                    {line}
                  </p>
                );
              }
              return (
                <p key={li} className="text-xs text-medium-gray leading-relaxed">
                  {line}
                </p>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function MemorySection({ content }: { content: MemoryContent }) {
  const { lang } = useLanguage();
  return (
    <section className="py-32 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="accent-bar mx-auto mb-6" />
            <p className="text-sm font-bold text-oracle-red uppercase tracking-[0.2em] mb-5">
              {t("memory.label", lang)}
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold text-dark-text leading-[1.05] tracking-tight">
              {t("memory.title1", lang)} <span className="gradient-text">{t("memory.title2", lang)}</span>
            </h2>
            <p className="text-xl text-medium-gray mt-6 leading-relaxed">
              {t("memory.subtitle", lang)}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {content.types.map((mem, i) => (
            <motion.div
              key={mem.sub}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <FlipCard mem={mem} icon={memoryIcons[i]} />
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
