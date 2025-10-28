"use client";

import { HeroHeader } from "@/components/hero/header";
import { HeroContent } from "@/components/hero/content";
import { HeroBackground } from "@/components/hero/background";
import { SectionCard } from "@/components/sections/section-card";
import { AiGenerationEngine } from "@/sections/ai-generation-engine";
import { PatternArchitecture } from "@/sections/pattern-architecture";
import { ContextualAwareness } from "@/sections/contextual-awareness";
import { FutureGeneration } from "@/sections/future-generation";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Viewport Height */}
      <section className="relative min-h-screen flex flex-col">
        <HeroBackground />
        <HeroHeader />
        <HeroContent />
      </section>

      {/* Content Sections */}
      <main className="relative">
        {/* Section A: The AI Generation Engine */}
        <section id="ai-generation-engine" className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <SectionCard>
              <AiGenerationEngine />
            </SectionCard>
          </div>
        </section>

        {/* Section B: Pattern-Based Architecture */}
        <section id="pattern-architecture" className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <SectionCard>
              <PatternArchitecture />
            </SectionCard>
          </div>
        </section>

        {/* Section C: Contextual Awareness */}
        <section id="contextual-awareness" className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <SectionCard>
              <ContextualAwareness />
            </SectionCard>
          </div>
        </section>

        {/* Section D: The Future of UI Generation */}
        <section id="future-generation" className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <SectionCard>
              <FutureGeneration />
            </SectionCard>
          </div>
        </section>
      </main>
    </div>
  );
}
