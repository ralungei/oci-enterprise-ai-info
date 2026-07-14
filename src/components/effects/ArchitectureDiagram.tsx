"use client";

import { Icon } from "@iconify/react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/ui-strings";

/* ── Primitives ── */

type BoxColor = "red" | "blue" | "neutral" | "purple" | "amber";

const boxStyles: Record<BoxColor, { bg: string; text: string; sub: string }> = {
  red: { bg: "bg-[#c0392b]", text: "text-white", sub: "text-white/60" },
  blue: { bg: "bg-[#2563eb]", text: "text-white", sub: "text-white/60" },
  neutral: { bg: "bg-white", text: "text-dark-text", sub: "text-medium-gray" },
  purple: { bg: "bg-[#7c3aed]", text: "text-white", sub: "text-white/60" },
  amber: { bg: "bg-[#b45309]", text: "text-white", sub: "text-white/60" },
};

function ColorBox({ children, sub, color = "red" }: { children: React.ReactNode; sub?: string; color?: BoxColor }) {
  const s = boxStyles[color];
  return (
    <div className={`rounded-lg ${s.bg} px-4 py-3 text-center`}>
      <p className={`text-sm font-bold ${s.text} leading-tight`}>{children}</p>
      {sub && <p className={`text-xs ${s.sub} mt-0.5`}>{sub}</p>}
    </div>
  );
}

function GrayBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg bg-white/[0.07] border border-white/[0.08] px-3 py-2.5 text-center">
      <p className="text-xs font-semibold text-white/50">{children}</p>
    </div>
  );
}

function ColTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold text-white uppercase tracking-[0.12em] text-center mb-4">
      {children}
    </p>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-bold text-white/30 uppercase tracking-wider mt-3 mb-2">
      {children}
    </p>
  );
}

function Arrow({ direction = "right" }: { direction?: "right" | "down" | "up" }) {
  if (direction === "down") {
    return (
      <div className="flex justify-center py-1">
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
          <path d="M6 0v16m0 0l-4-4m4 4l4-4" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  if (direction === "up") {
    return (
      <div className="flex justify-center py-1">
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
          <path d="M6 20V4m0 0l-4 4m4-4l4 4" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  return null;
}

function HArrow() {
  return (
    <div className="hidden lg:flex items-center justify-center shrink-0 w-6">
      <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
        <path d="M0 6h20m0 0l-4-4m4 4l-4 4" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl bg-white/[0.04] border border-white/[0.08] p-4 flex flex-col gap-2 ${className}`}>
      {children}
    </div>
  );
}

function LogoGrid() {
  const logos = [
    { icon: "simple-icons:langchain", label: "LangGraph" },
    { icon: "simple-icons:openai", label: "OpenAI" },
    { icon: "simple-icons:microsoft", label: "AutoGen" },
    { icon: "solar:book-bold-duotone", label: "LlamaIndex" },
    { icon: "solar:users-group-rounded-bold-duotone", label: "CrewAI" },
    { icon: "solar:code-bold-duotone", label: "BYOF" },
  ];
  return (
    <div className="grid grid-cols-3 gap-1.5 mt-2">
      {logos.map((l) => (
        <div key={l.label} className="flex flex-col items-center gap-1 rounded-lg bg-white/[0.06] border border-white/[0.06] py-2 px-1">
          <Icon icon={l.icon} width={16} height={16} className="text-white/40" />
          <span className="text-[9px] text-white/40 font-semibold leading-none">{l.label}</span>
        </div>
      ))}
    </div>
  );
}

function AutoScaleBar() {
  return (
    <div className="flex items-center gap-2 justify-center mb-2">
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M4 0L0 4h8L4 0z" fill="#c0392b" /></svg>
      <div className="flex-1 h-px bg-oracle-red/40" />
      <span className="text-[9px] text-oracle-red font-bold whitespace-nowrap">Auto-scale</span>
      <div className="flex-1 h-px bg-oracle-red/40" />
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M4 0L0 4h8L4 0z" fill="#c0392b" /></svg>
    </div>
  );
}

/* ── Main ── */

export default function ArchitectureDiagram() {
  const { lang } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto overflow-x-auto">
      <div className="flex gap-0 items-stretch min-w-[900px]">

        {/* COL 1: Hosted Deployment (red) */}
        <Panel className="flex-1">
          <ColTitle>{t("arch.colHosted", lang)}</ColTitle>
          <AutoScaleBar />
          <ColorBox color="red" sub="Containerized">{t("arch.agentLogic", lang)}</ColorBox>
          <LogoGrid />
          <div className="mt-auto" />
          <ColorBox color="red" sub="Containerized">{t("arch.mcpServers", lang)}</ColorBox>
        </Panel>

        <HArrow />

        {/* COL 2: Unified GenAI Experience (blue) */}
        <Panel className="flex-1">
          <ColTitle>{t("arch.colGenai", lang)}</ColTitle>
          <ColorBox color="blue" sub={t("arch.openaiCompat", lang)}>Responses API</ColorBox>
          <Arrow direction="down" />
          <ColorBox color="blue" sub="OpenAI, Grok, Gemini, Llama, Cohere">{t("arch.modelsLabel", lang)}</ColorBox>
          <Arrow direction="up" />
          <ColorBox color="blue" sub={t("arch.ociNative", lang)}>Generative AI API</ColorBox>
        </Panel>

        <HArrow />

        {/* COL 3: Hosted Tools (teal) */}
        <Panel className="flex-1">
          <ColTitle>Hosted Tools</ColTitle>
          <ColorBox color="neutral">{t("arch.convState", lang)}</ColorBox>
          <ColorBox color="neutral">{t("arch.fileSearch", lang)}</ColorBox>
          <ColorBox color="neutral">{t("arch.webSearch", lang)}</ColorBox>
          <ColorBox color="neutral">Gateway</ColorBox>
          <ColorBox color="neutral">{t("arch.memory", lang)}</ColorBox>
          <ColorBox color="neutral">{t("arch.codeInterp", lang)}</ColorBox>
          <ColorBox color="neutral">NL2SQL</ColorBox>
        </Panel>

        <HArrow />

        {/* COL 4: Vector Store + Observability (purple) */}
        <div className="flex flex-col gap-3 flex-1">
          <Panel className="flex-1">
            <ColTitle>Vector Store API</ColTitle>
            <ColorBox color="purple">Managed Vector Stores</ColorBox>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {["Oracle DB 23ai", "HeatWave", "Object Storage"].map((s) => (
                <span key={s} className="text-[11px] text-white/40 font-semibold bg-white/[0.05] px-2.5 py-1.5 rounded">
                  {s}
                </span>
              ))}
            </div>
          </Panel>
          <Panel className="flex-1">
            <ColTitle>{t("arch.observability", lang)}</ColTitle>
            <ColorBox color="purple">OpenTelemetry Collector</ColorBox>
            <div className="flex gap-2 mt-1">
              <GrayBox>OCI LangFuse</GrayBox>
              <GrayBox>Client BYO</GrayBox>
            </div>
          </Panel>
        </div>

        <HArrow />

        {/* COL 5: Moderation + Registry (amber) */}
        <div className="flex flex-col gap-3 flex-1">
          <Panel className="flex-1">
            <ColTitle>Moderation API</ColTitle>
            <ColorBox color="amber">Guardrails</ColorBox>
            <ColorBox color="amber">{t("arch.mcpSafety", lang)}</ColorBox>
          </Panel>
          <Panel className="flex-1">
            <ColTitle>Agent Registry</ColTitle>
            <ColorBox color="amber">AGNTCY</ColorBox>
            <ColorBox color="amber">{t("arch.mcpRegistry", lang)}</ColorBox>
          </Panel>
        </div>

      </div>
    </div>
  );
}
