"use client";

import { useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import { ActiveSectionProvider, useActiveSection } from "@/context/ActiveSectionContext";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import SectionProgress from "@/components/presentation/SectionProgress";
import Teleprompter from "@/components/presentation/Teleprompter";
import SectionWrapper from "@/components/presentation/SectionWrapper";
import Preloader from "@/components/effects/Preloader";
import CustomCursor from "@/components/effects/CustomCursor";
import LanguageSelector from "@/components/LanguageSelector";
import { slides } from "@/data/slides";
import { slidesEs } from "@/data/slides-es";
import type { DataPrivacyContent, ObservabilityContent, SecurityAuthContent } from "@/data/types";

/* ── Lazy-load every section (code-split per section) ── */
const HeroSection = dynamic(() => import("@/components/sections/HeroSection"), { ssr: false });
const AgentIntroSection = dynamic(() => import("@/components/sections/AgentIntroSection"), { ssr: false });
const ProblemSection = dynamic(() => import("@/components/sections/ProblemSection"), { ssr: false });
const PlatformPillars = dynamic(() => import("@/components/sections/PlatformPillars"), { ssr: false });
const ModelsShowcase = dynamic(() => import("@/components/sections/ModelsShowcase"), { ssr: false });
const AgentToolsGrid = dynamic(() => import("@/components/sections/AgentToolsGrid"), { ssr: false });
const MemorySection = dynamic(() => import("@/components/sections/MemorySection"), { ssr: false });
const FrameworksSection = dynamic(() => import("@/components/sections/FrameworksSection"), { ssr: false });
const DeploymentSection = dynamic(() => import("@/components/sections/DeploymentSection"), { ssr: false });
const GovernanceSection = dynamic(() => import("@/components/sections/GovernanceSection"), { ssr: false });
const RegionsMap = dynamic(() => import("@/components/sections/RegionsMap"), { ssr: false });
const DemoSection = dynamic(() => import("@/components/sections/DemoSection"), { ssr: false });
const ArchitectureSection = dynamic(() => import("@/components/sections/ArchitectureSection"), { ssr: false });
const GetStartedSection = dynamic(() => import("@/components/sections/GetStartedSection"), { ssr: false });
const PillarDivider = dynamic(() => import("@/components/sections/PillarDivider"), { ssr: false });

const sectionComponents: Record<string, React.ComponentType<{ content: never }>> = {
  hero: HeroSection as React.ComponentType<{ content: never }>,
  "what-is-agent": AgentIntroSection as React.ComponentType<{ content: never }>,
  challenge: ProblemSection as React.ComponentType<{ content: never }>,
  platform: PlatformPillars as React.ComponentType<{ content: never }>,
  tools: AgentToolsGrid as React.ComponentType<{ content: never }>,
  memory: MemorySection as React.ComponentType<{ content: never }>,
  models: ModelsShowcase as React.ComponentType<{ content: never }>,
  build: FrameworksSection as React.ComponentType<{ content: never }>,
  deploy: DeploymentSection as React.ComponentType<{ content: never }>,
  regions: RegionsMap as React.ComponentType<{ content: never }>,
  "get-started": GetStartedSection as React.ComponentType<{ content: never }>,
};

/* ── Render order (decoupled from slides.ts data order) ── */
const sectionOrder = [
  "hero",
  "what-is-agent",
  // "challenge", // hidden — kept for future use
  "platform",
  "pillar-1",    // → Managed AI API
  "tools",
  "memory",
  "models",
  "pillar-2",    // → Hosted Deployments
  "build",
  "deploy",
  "governance",
  "architecture",
  "regions",
  "demo",
  "get-started",
];

function KeyboardHandler() {
  const { toggleTeleprompter } = useActiveSection();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "t" || e.key === "T") {
        const tag = (e.target as HTMLElement)?.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
        toggleTeleprompter();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [toggleTeleprompter]);

  return null;
}

function MainContent() {
  const { teleprompterVisible } = useActiveSection();
  const { lang } = useLanguage();

  const currentSlides = lang === "es" ? slidesEs : slides;

  const slideMap = useMemo(
    () => Object.fromEntries(currentSlides.map((s) => [s.id, s])),
    [currentSlides]
  );

  return (
    <main
      className={`transition-all duration-500 ${
        teleprompterVisible ? "md:mr-[380px]" : ""
      }`}
    >
      {sectionOrder.map((id) => {
        /* Pillar dividers */
        if (id === "pillar-1") {
          return <PillarDivider key="pillar-1" pillar={1} />;
        }
        if (id === "pillar-2") {
          return <PillarDivider key="pillar-2" pillar={2} />;
        }

        /* Standalone sections (no data) */
        if (id === "demo") {
          return (
            <SectionWrapper key="demo" id="demo">
              <DemoSection />
            </SectionWrapper>
          );
        }
        if (id === "architecture") {
          return (
            <SectionWrapper key="architecture" id="architecture">
              <ArchitectureSection />
            </SectionWrapper>
          );
        }

        /* Governance: merged from 3 data sections */
        if (id === "governance") {
          const priv = slideMap["data-privacy"];
          const obs = slideMap["observability"];
          const sec = slideMap["security-auth"];
          if (!priv || !obs || !sec) return null;
          return (
            <SectionWrapper key="governance" id="governance">
              <GovernanceSection
                privacy={priv.content as DataPrivacyContent}
                observability={obs.content as ObservabilityContent}
                security={sec.content as SecurityAuthContent}
              />
            </SectionWrapper>
          );
        }

        const slide = slideMap[id];
        const Component = sectionComponents[id];
        if (!slide || !Component) return null;
        return (
          <SectionWrapper key={slide.id} id={slide.id}>
            <Component content={slide.content as never} />
          </SectionWrapper>
        );
      })}
    </main>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <ActiveSectionProvider>
        <Preloader />
        <CustomCursor />
        <LanguageSelector />
        <KeyboardHandler />
        <SectionProgress />
        <Teleprompter />
        <MainContent />
      </ActiveSectionProvider>
    </LanguageProvider>
  );
}
