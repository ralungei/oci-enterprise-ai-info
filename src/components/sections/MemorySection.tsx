"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import type { MemoryContent } from "@/data/types";
import CursorGlow, { GlowCard } from "@/components/effects/CursorGlow";

const memoryIcons = [
  "solar:chat-round-dots-bold-duotone",
  "solar:calendar-bold-duotone",
  "solar:minimalistic-magnifer-bold-duotone",
];

export default function MemorySection({ content }: { content: MemoryContent }) {
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
              Agent Memory
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold text-dark-text leading-[1.05] tracking-tight">
              Agents that <span className="gradient-text">remember.</span>
            </h2>
            <p className="text-xl text-medium-gray mt-6 leading-relaxed">
              Three types of managed memory — so your agents don&apos;t start from scratch every time.
            </p>
          </motion.div>
        </div>

        <CursorGlow
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          glowColor="rgba(199, 70, 52, 0.2)"
        >
          {content.types.map((mem, i) => (
            <motion.div
              key={mem.sub}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="rounded-3xl"
            >
              <GlowCard className="rounded-3xl h-full">
                <div className="rounded-3xl bg-light-gray p-9 border border-gray-100 h-full flex flex-col">
                  <Icon
                    icon={memoryIcons[i]}
                    className="text-oracle-red"
                    width={36}
                    height={36}
                  />
                  <h3 className="text-2xl font-extrabold text-dark-text mt-4">{mem.title}</h3>
                  <p className="text-sm font-bold text-oracle-red mt-2 uppercase tracking-wider">
                    {mem.sub}
                  </p>
                  <p className="text-base text-medium-gray mt-4 flex-1 leading-relaxed">
                    {mem.desc}
                  </p>
                  {/* Visual conversation example instead of code */}
                  <div className="mt-6 rounded-2xl bg-white border border-gray-100 p-5 space-y-3">
                    {mem.code.split("\n").map((line, li) => {
                      if (!line.trim()) return <div key={li} className="h-2" />;
                      const isUser = line.startsWith("User:");
                      const isAgent = line.startsWith("Agent:");
                      const isLabel = line.endsWith(":") && !isUser && !isAgent;
                      const isMetric = line.startsWith("Turn") || line.startsWith("#") || line.includes("tokens");

                      if (isUser) {
                        return (
                          <div key={li} className="flex gap-3 items-start">
                            <div className="w-7 h-7 rounded-full bg-dark-text/10 flex items-center justify-center shrink-0">
                              <Icon icon="solar:user-bold" className="text-dark-text/60" width={14} />
                            </div>
                            <p className="text-sm text-dark-text font-medium leading-relaxed pt-1">
                              {line.replace("User: ", "")}
                            </p>
                          </div>
                        );
                      }
                      if (isAgent) {
                        return (
                          <div key={li} className="flex gap-3 items-start">
                            <div className="w-7 h-7 rounded-full bg-oracle-red/10 flex items-center justify-center shrink-0">
                              <Icon icon="solar:cpu-bolt-bold" className="text-oracle-red" width={14} />
                            </div>
                            <p className="text-sm text-medium-gray leading-relaxed pt-1">
                              {line.replace("Agent: ", "")}
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
              </GlowCard>
            </motion.div>
          ))}
        </CursorGlow>
      </div>
    </section>
  );
}
