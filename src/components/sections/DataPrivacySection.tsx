"use client";

import { useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Icon } from "@iconify/react";
import type { DataPrivacyContent } from "@/data/types";

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

function StrikeCheckbox({ label, defaultChecked = false }: { label: string; defaultChecked?: boolean }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.classList.remove("pristine");
    }
  }, []);

  return (
    <label className="flex items-center cursor-pointer select-none">
      <input
        ref={inputRef}
        type="checkbox"
        defaultChecked={defaultChecked}
        onChange={handleChange}
        className="strike-checkbox pristine"
      />
      <span className="text-lg font-medium text-dark-text">{label}</span>
    </label>
  );
}

function StickyPrinciple({
  principle,
  index,
}: {
  principle: { icon: string; title: string; desc: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  return (
    <motion.div
      ref={ref}
      className="py-16 md:py-24"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: isInView ? 1 : 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className={`flex items-start gap-5 transition-all duration-500 ${isInView ? "translate-x-0" : "translate-x-4"}`}>
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-500 ${
          isInView ? "bg-oracle-red/10" : "bg-gray-100"
        }`}>
          <Icon
            icon={principle.icon}
            className={`transition-colors duration-500 ${isInView ? "text-oracle-red" : "text-medium-gray"}`}
            width={28}
            height={28}
          />
        </div>
        <div>
          <h3 className={`text-xl font-extrabold transition-colors duration-500 ${
            isInView ? "text-dark-text" : "text-medium-gray"
          }`}>
            {principle.title}
          </h3>
          <p className={`text-base leading-relaxed mt-2 transition-colors duration-500 ${
            isInView ? "text-medium-gray" : "text-medium-gray/50"
          }`}>
            {principle.desc}
          </p>
          <div className={`mt-4 text-xs font-bold text-oracle-red/60 uppercase tracking-wider transition-opacity duration-500 ${
            isInView ? "opacity-100" : "opacity-0"
          }`}>
            {String(index + 1).padStart(2, "0")} / 04
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function DataPrivacySection({ content }: { content: DataPrivacyContent }) {
  return (
    <section className="py-32 md:py-40 bg-light-gray">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="accent-bar mb-6" />
          <p className="text-sm font-bold text-oracle-red uppercase tracking-[0.2em] mb-5">
            Data Privacy
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-dark-text leading-[1.05] tracking-tight">
            Your data stays yours.
            <br />
            <span className="gradient-text">Period.</span>
          </h2>
        </Reveal>

        {/* Trust Checklist — Strike Checkboxes */}
        <Reveal delay={0.1}>
          <div className="mt-16 max-w-xl mx-auto bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-lg font-extrabold text-dark-text mb-5">Enterprise trust checklist</h3>
            <div className="space-y-4">
              <StrikeCheckbox label="Your data is never used to train models" defaultChecked />
              <StrikeCheckbox label="Full audit logging on every API call" defaultChecked />
              <StrikeCheckbox label="Data residency guaranteed per region" defaultChecked />
              <StrikeCheckbox label="SOC 2 Type II & ISO 27001 certified" defaultChecked />
              <StrikeCheckbox label="Customer-managed encryption keys" />
            </div>
          </div>
        </Reveal>

        {/* Sticky Text Reveal — Principles */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Sticky left side */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-6 border border-gray-100 shadow-sm">
                <Icon icon="solar:shield-check-bold-duotone" className="text-oracle-red shrink-0" width={36} height={36} />
                <p className="text-2xl md:text-3xl font-extrabold text-dark-text leading-snug">
                  Your data is <span className="text-oracle-red">never</span> used to train models.
                </p>
              </div>
              <p className="text-lg text-medium-gray mt-6 leading-relaxed">
                This is the #1 question we get from enterprises. Here&apos;s exactly how we handle your data — in plain terms.
              </p>
              <p className="text-sm text-medium-gray/60 mt-6 hidden lg:block">
                Scroll to explore each principle &darr;
              </p>
            </Reveal>
          </div>

          {/* Scrollable principles on right */}
          <div>
            {content.principles.map((p, i) => (
              <StickyPrinciple key={p.title} principle={p} index={i} />
            ))}
          </div>
        </div>

        {/* Data flow visual */}
        <Reveal delay={0.2}>
          <div className="mt-20 max-w-3xl mx-auto">
            <h3 className="text-center text-xl font-extrabold text-dark-text mb-10">
              How your data flows through OCI
            </h3>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
              {[
                { icon: "solar:user-bold-duotone", label: "Your Prompt", sub: "Encrypted in transit" },
                { icon: "solar:arrow-right-bold", label: "", sub: "" },
                { icon: "solar:cpu-bolt-bold-duotone", label: "Model Processing", sub: "Isolated compute" },
                { icon: "solar:arrow-right-bold", label: "", sub: "" },
                { icon: "solar:chat-round-check-bold-duotone", label: "Response Returned", sub: "Prompt discarded" },
              ].map((step, i) =>
                step.label === "" ? (
                  <Icon
                    key={i}
                    icon={step.icon}
                    className="text-oracle-red/30 hidden md:block shrink-0 mx-2"
                    width={24}
                    height={24}
                  />
                ) : (
                  <div
                    key={i}
                    className="flex-1 bg-white rounded-2xl p-6 border border-gray-100 text-center"
                  >
                    <Icon icon={step.icon} className="text-oracle-red mx-auto mb-3" width={32} height={32} />
                    <p className="font-bold text-dark-text text-sm">{step.label}</p>
                    <p className="text-xs text-medium-gray mt-1">{step.sub}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
