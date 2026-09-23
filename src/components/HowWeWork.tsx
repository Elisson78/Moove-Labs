"use client";

import React from "react";
import {
  Compass,
  Target,
  Palette,
  Terminal,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function HowWeWork() {
  const { t } = useLanguage();
  const h = t.howWeWork;

  const stepConfigs = [
    {
      icon: <Compass className="w-5 h-5 text-brand-electric" />,
      badge: "bg-brand-electric/10 text-brand-electric",
    },
    {
      icon: <Target className="w-5 h-5 text-brand-bright" />,
      badge: "bg-brand-bright/10 text-brand-bright",
    },
    {
      icon: <Palette className="w-5 h-5 text-brand-warm" />,
      badge: "bg-brand-warm/15 text-brand-orange",
    },
    {
      icon: <Terminal className="w-5 h-5 text-brand-electric" />,
      badge: "bg-brand-electric/10 text-brand-electric",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-brand-orange" />,
      badge: "bg-brand-orange/15 text-brand-orange",
    },
  ];

  return (
    <section
      id="como-trabalhamos"
      className="py-20 md:py-28 bg-brand-soft border-y border-slate-200/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-electric/10 border border-brand-electric/20 text-brand-electric text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            <span>{h.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight">
            {h.title} <span className="text-brand-gradient">{h.titleGradient}</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-slate leading-relaxed">
            {h.description}
          </p>
        </div>

        {/* Timeline Horizontal com 5 Etapas */}
        <div className="grid md:grid-cols-5 gap-4 lg:gap-6 relative">
          {h.steps.map((step, idx) => {
            const config = stepConfigs[idx] || stepConfigs[0];

            return (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-subtle hover:shadow-card hover:border-brand-electric/50 transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {config.icon}
                    </div>
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${config.badge}`}>
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-electric transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Indicador de progresso com gradiente da marca */}
                <div className="pt-4 mt-6 border-t border-slate-100">
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-brand-electric via-brand-bright to-brand-orange h-full rounded-full transition-all duration-500"
                      style={{ width: `${((idx + 1) / 5) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
