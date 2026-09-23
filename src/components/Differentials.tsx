"use client";

import React from "react";
import { Briefcase, Sliders, Zap, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Differentials() {
  const { t } = useLanguage();
  const d = t.differentials;

  const pilarConfigs = [
    {
      icon: <Briefcase className="w-6 h-6 text-brand-electric" />,
      tagColor: "bg-brand-electric/10 text-brand-electric border-brand-electric/20",
      hoverBorder: "hover:border-brand-electric/60 hover:shadow-card-hover",
    },
    {
      icon: <Sliders className="w-6 h-6 text-brand-bright" />,
      tagColor: "bg-brand-bright/10 text-brand-bright border-brand-bright/20",
      hoverBorder: "hover:border-brand-bright/60 hover:shadow-card-hover",
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-orange" />,
      tagColor: "bg-brand-orange/10 text-brand-orange border-brand-orange/20",
      hoverBorder: "hover:border-brand-orange hover:shadow-card-orange",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{d.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
            {d.title} <span className="text-brand-gradient">{d.titleGradient}</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-slate leading-relaxed">
            {d.description}
          </p>
        </div>

        {/* 3 Pilares Principais com toques da marca */}
        <div className="grid md:grid-cols-3 gap-8">
          {d.items.map((pilar, index) => {
            const config = pilarConfigs[index] || pilarConfigs[0];

            return (
              <div
                key={pilar.title}
                className={`bg-brand-soft rounded-2xl p-8 border border-slate-200/90 shadow-subtle hover:bg-white transition-all duration-300 flex flex-col justify-between ${config.hoverBorder}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-sm">
                      {config.icon}
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${config.tagColor}`}>
                      {pilar.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy mb-3">
                    {pilar.title}
                  </h3>

                  <p className="text-sm sm:text-base text-brand-slate leading-relaxed">
                    {pilar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60 text-xs font-mono font-semibold text-brand-slate">
                  Pilar 0{index + 1} • Padrão MooveLabs
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
