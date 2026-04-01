"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeaderProps {
  sectionNumber: number;
  sectionLabel: string;
  title: string;
  subtitle?: string;
  id?: string;
}

export default function SectionHeader({
  sectionNumber,
  sectionLabel,
  title,
  subtitle,
  id,
}: SectionHeaderProps) {
  return (
    <div id={id} className="mb-12 scroll-mt-24">
      <ScrollReveal>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-bold tracking-widest text-oracle-red uppercase">
            Section {sectionNumber}
          </span>
          <div className="h-px flex-1 bg-oracle-red/20" />
          <span className="text-xs font-bold tracking-widest text-oracle-red uppercase">
            {sectionLabel}
          </span>
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="text-4xl md:text-5xl font-bold text-dark-text leading-tight">
          {title}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p className="text-lg md:text-xl text-medium-gray mt-3 max-w-3xl">
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
