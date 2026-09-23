"use client";

import React from "react";
import { Layers, Workflow, LayoutGrid, Bot } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function SocialProof() {
  const { t } = useLanguage();

  const iconConfigs = [
    {
      icon: <Layers className="w-5 h-5 text-brand-electric" />,
      bg: "bg-brand-electric/10",
      border: "hover:border-brand-electric/40",
    },
    {
      icon: <Workflow className="w-5 h-5 text-brand-orange" />,
      bg: "bg-brand-orange/10",
      border: "hover:border-brand-orange/40",
    },
    {
      icon: <LayoutGrid className="w-5 h-5 text-brand-bright" />,
      bg: "bg-brand-bright/10",
      border: "hover:border-brand-bright/40",
    },
    {
      icon: <Bot className="w-5 h-5 text-brand-orange" />,
      bg: "bg-brand-orange/15",
      border: "hover:border-brand-orange/60",
    },
  ];

  return (
    <section className="py-12 bg-brand-soft border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          
          {/* Título de autoridade limpo */}
          <div className="shrink-0 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block mb-1">
              {t.socialProof.badge}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-navy tracking-tight">
              {t.socialProof.title}
            </h2>
          </div>

          {/* Indicadores Visuais com destaques da marca */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full md:w-auto">
            {t.socialProof.items.map((item, idx) => {
              const cfg = iconConfigs[idx] || iconConfigs[0];

              return (
                <div
                  key={item.label}
                  className={`bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200/90 shadow-subtle ${cfg.border} transition-all duration-200 flex flex-col justify-between group`}
                >
                  <div className={`w-9 h-9 rounded-lg ${cfg.bg} flex items-center justify-center mb-2.5 transition-transform group-hover:scale-105`}>
                    {cfg.icon}
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-brand-navy leading-tight">
                      {item.label}
                    </h3>
                    <p className="text-[11px] text-brand-slate mt-1 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
