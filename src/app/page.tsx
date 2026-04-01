"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { ActiveSectionProvider, useActiveSection } from "@/context/ActiveSectionContext";
import SectionProgress from "@/components/presentation/SectionProgress";
import Teleprompter from "@/components/presentation/Teleprompter";
import SectionWrapper from "@/components/presentation/SectionWrapper";
import Preloader from "@/components/effects/Preloader";
import CustomCursor from "@/components/effects/CustomCursor";
import { slides } from "@/data/slides";

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
const DataPrivacySection = dynamic(() => import("@/components/sections/DataPrivacySection"), { ssr: false });
const ObservabilitySection = dynamic(() => import("@/components/sections/ObservabilitySection"), { ssr: false });
const SecurityAuthSection = dynamic(() => import("@/components/sections/SecurityAuthSection"), { ssr: false });
const UseCasesSection = dynamic(() => import("@/components/sections/UseCasesSection"), { ssr: false });
const RegionsMap = dynamic(() => import("@/components/sections/RegionsMap"), { ssr: false });
const GetStartedSection = dynamic(() => import("@/components/sections/GetStartedSection"), { ssr: false });

const sectionComponents: Record<string, React.ComponentType<{ content: never }>> = {
  hero: HeroSection as React.ComponentType<{ content: never }>,
  "what-is-agent": AgentIntroSection as React.ComponentType<{ content: never }>,
  challenge: ProblemSection as React.ComponentType<{ content: never }>,
  platform: PlatformPillars as React.ComponentType<{ content: never }>,
  models: ModelsShowcase as React.ComponentType<{ content: never }>,
  tools: AgentToolsGrid as React.ComponentType<{ content: never }>,
  memory: MemorySection as React.ComponentType<{ content: never }>,
  build: FrameworksSection as React.ComponentType<{ content: never }>,
  deploy: DeploymentSection as React.ComponentType<{ content: never }>,
  "data-privacy": DataPrivacySection as React.ComponentType<{ content: never }>,
  observability: ObservabilitySection as React.ComponentType<{ content: never }>,
  "security-auth": SecurityAuthSection as React.ComponentType<{ content: never }>,
  "use-cases": UseCasesSection as React.ComponentType<{ content: never }>,
  regions: RegionsMap as React.ComponentType<{ content: never }>,
  "get-started": GetStartedSection as React.ComponentType<{ content: never }>,
};

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

  return (
    <main
      className={`transition-all duration-500 ${
        teleprompterVisible ? "md:mr-[380px]" : ""
      }`}
    >
      {slides.map((slide) => {
        const Component = sectionComponents[slide.id];
        if (!Component) return null;
        return (
          <SectionWrapper key={slide.id} id={slide.id}>
            <Component content={slide.content as never} />
          </SectionWrapper>
        );
      })}

      {/* Footer */}
      <footer className="bg-[#0a0a0f] border-t border-white/[0.06] py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-oracle-red flex items-center justify-center">
              <span className="text-white font-bold text-sm">O</span>
            </div>
            <span className="text-white/30 text-base">
              OCI Enterprise AI &middot; Oracle Cloud Infrastructure
            </span>
          </div>
          <div className="flex items-center gap-8">
            {["Documentation", "API Reference", "Support"].map((link) => (
              <a key={link} href="#" className="text-sm text-white/30 hover:text-white/60 transition-colors font-medium">
                {link}
              </a>
            ))}
          </div>
          <span className="text-sm text-white/20">&copy; 2026 Oracle</span>
        </div>
      </footer>
    </main>
  );
}

export default function Home() {
  return (
    <ActiveSectionProvider>
      <Preloader />
      <CustomCursor />
      <KeyboardHandler />
      <SectionProgress />
      <Teleprompter />
      <MainContent />
    </ActiveSectionProvider>
  );
}
