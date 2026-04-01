"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import type { ToolsContent } from "@/data/types";
import VideoCursor from "@/components/effects/VideoCursor";

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

const videoLabels = [
  "Web Search in action — real-time retrieval with citations",
  "File Search & RAG — searching company documents",
  "Code Interpreter — data analysis in a sandbox",
  "NL2SQL — querying databases in plain English",
  "Function Calling — triggering business logic",
  "Remote MCP — connecting to external tools",
  "Image Generation — creating visuals inline",
  "Containers — custom code as managed tools",
];

export default function AgentToolsGrid({ content }: { content: ToolsContent }) {
  return (
    <section className="py-32 md:py-40 bg-light-gray">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="accent-bar mb-6" />
          <p className="text-sm font-bold text-oracle-red uppercase tracking-[0.2em] mb-5">
            Agent Tools
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-dark-text leading-[1.05] tracking-tight">
            Everything an agent needs.
            <br />
            <span className="gradient-text">Built in.</span>
          </h2>
          <p className="text-xl text-medium-gray mt-6 leading-relaxed max-w-2xl">
            8 managed tools, all accessible through a single API call. The agent decides which ones to use.
          </p>
        </Reveal>

        {/* Each tool gets its own breathing section */}
        <div className="mt-20 space-y-24">
          {content.tools.map((tool, i) => {
            const isEven = i % 2 === 0;
            return (
              <Reveal key={tool.name} delay={0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? "lg:[direction:rtl]" : ""
                }`}>
                  {/* Text side */}
                  <div className={!isEven ? "lg:[direction:ltr]" : ""}>
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
                          What it does
                        </h4>
                        <p className="text-base text-medium-gray leading-relaxed">
                          {tool.whatItDoes}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-dark-text uppercase tracking-wider mb-2">
                          How it works
                        </h4>
                        <p className="text-base text-medium-gray leading-relaxed">
                          {tool.howItWorks}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Video side — Cinematic Video Cursor */}
                  <div className={!isEven ? "lg:[direction:ltr]" : ""}>
                    <VideoCursor
                      videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
                      replacementLabel={videoLabels[i] || `${tool.name} demo`}
                      posterText={tool.name}
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Multi-tool orchestration */}
        <Reveal className="mt-32">
          <div className="rounded-3xl bg-white border border-gray-100 p-10 md:p-14 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-bold text-oracle-red bg-oracle-red/10 px-4 py-1.5 rounded-full">
                  Multi-Tool Orchestration
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-dark-text mt-6">
                  One API call.
                  <br />All the tools.
                </h3>
                <p className="text-lg text-medium-gray mt-4 leading-relaxed">
                  Give your agent access to multiple tools at once. It figures out which ones
                  to use, in what order, all by itself. No orchestration code needed.
                </p>
                <ul className="mt-8 space-y-3">
                  {[
                    "Drop-in OpenAI SDK replacement",
                    "Agent decides which tools to call",
                    "Zero vendor data retention",
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
