"use client";

import React from "react";
import { TECH_BADGES } from "@/lib/data";
import { Cpu } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function TechStack() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-electric/10 border border-brand-electric/20 text-brand-electric text-xs font-bold uppercase tracking-wider mb-3">
          <Cpu className="w-3.5 h-3.5 text-brand-orange" />
          <span>{t.techStack.badge}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight mb-4">
          {t.techStack.title}
        </h2>

        <p className="text-sm sm:text-base text-brand-slate max-w-2xl mx-auto mb-10">
          {t.techStack.description}
        </p>

        {/* Badges modernos com destaque em azul e laranja */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-4xl mx-auto">
          {TECH_BADGES.map((tech) => {
            const isHighlight = tech.includes("Next.js") || tech.includes("AI Agents") || tech.includes("React");

            return (
              <div
                key={tech}
                className={`text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 shadow-subtle select-none ${
                  isHighlight
                    ? "bg-slate-50 hover:bg-white text-brand-navy border border-brand-orange/30 hover:border-brand-orange hover:shadow-card-orange"
                    : "bg-slate-50 hover:bg-white text-brand-navy border border-slate-200/90 hover:border-brand-electric/40 hover:shadow-card"
                }`}
              >
                {tech}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
