"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import type { SectionType } from "@/data/types";

interface ActiveSectionContextValue {
  activeSectionId: SectionType;
  setActiveSectionId: (id: SectionType) => void;
  teleprompterVisible: boolean;
  toggleTeleprompter: () => void;
}

const ActiveSectionContext = createContext<ActiveSectionContextValue>({
  activeSectionId: "hero",
  setActiveSectionId: () => {},
  teleprompterVisible: false,
  toggleTeleprompter: () => {},
});

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [activeSectionId, setActiveSectionId] = useState<SectionType>("hero");
  const [teleprompterVisible, setTeleprompterVisible] = useState(false);

  const toggleTeleprompter = useCallback(() => {
    setTeleprompterVisible((prev) => !prev);
  }, []);

  return (
    <ActiveSectionContext.Provider
      value={{ activeSectionId, setActiveSectionId, teleprompterVisible, toggleTeleprompter }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  return useContext(ActiveSectionContext);
}
