"use client";
import type { SectionName } from "@/lib/types";
import { useState, createContext, useContext } from "react";

type ActiveSectionType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveContext = createContext<ActiveSectionType | null>(null);

function ContextSection({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
}

export default ContextSection;

export function useActiveSectionContext() {
  const context = useContext(ActiveContext);

  if (context === null) {
    throw new Error("Error");
  }

  return context;
}
