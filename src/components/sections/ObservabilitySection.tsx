"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import type { ObservabilityContent } from "@/data/types";

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

export default function ObservabilitySection({ content }: { content: ObservabilityContent }) {
  return (
    <section className="py-32 md:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="max-w-3xl">
            <div className="accent-bar mb-6" />
            <p className="text-sm font-bold text-oracle-red uppercase tracking-[0.2em] mb-5">
              Observability
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold text-dark-text leading-[1.05] tracking-tight">
              See everything
              <br />
              <span className="gradient-text">your agents do.</span>
            </h2>
            <p className="text-xl text-medium-gray mt-6 leading-relaxed">
              Think of it as CCTV for your AI. Every tool call, every decision, every response. Logged, traced, and available for review.
            </p>
          </div>
        </Reveal>

        {/* Tools grid + trace log side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 items-start">
          {/* Tools */}
          <div className="space-y-6">
            {content.tools.map((tool, i) => (
              <Reveal key={tool.name} delay={i * 0.1}>
                <div className="flex items-start gap-5 bg-light-gray rounded-2xl p-7 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-oracle-red/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon icon={tool.icon} className="text-oracle-red" width={24} height={24} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-dark-text text-lg">{tool.name}</h3>
                    <p className="text-base text-medium-gray mt-2 leading-relaxed">{tool.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Trace log visual */}
          <Reveal delay={0.2}>
            <div className="rounded-2xl bg-[#0a0a0f] p-7 sticky top-32">
              <div className="flex items-center gap-1.5 mb-5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="text-xs text-white/20 ml-2 font-mono">agent_trace.log</span>
              </div>
              <div className="space-y-2.5 text-sm font-mono">
                {content.traceLog.map((line, i) => {
                  const isComment = line.startsWith("//");
                  const isTimestamp = /^\d{2}:\d{2}:\d{2}/.test(line);
                  let colorClass = "text-white/50";
                  if (isComment) colorClass = "text-white/25";
                  else if (line.includes("Tool:")) colorClass = "text-yellow-400/80";
                  else if (line.includes("Total:")) colorClass = "text-blue-400/80";
                  else if (isTimestamp) colorClass = "text-green-400/80";

                  return (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className={colorClass}
                    >
                      {line}
                    </motion.p>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Built-in, not optional */}
        <Reveal delay={0.15}>
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-3 bg-oracle-red/5 rounded-full px-8 py-4 border border-oracle-red/10">
              <Icon icon="solar:info-circle-bold-duotone" className="text-oracle-red" width={20} height={20} />
              <p className="text-base font-bold text-dark-text">
                Every API call is traced. Every tool invocation is logged. Built in from day one, not optional.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
