"use client";

import React from "react";
import {
  Code2,
  LayoutDashboard,
  Bot,
  Workflow,
  Users2,
  Network,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function Solutions() {
  const { t } = useLanguage();

  const iconConfig: Record<string, { icon: React.ReactNode; isOrange?: boolean }> = {
    Code2: {
      icon: <Code2 className="w-6 h-6 text-brand-electric" />,
      isOrange: false,
    },
    LayoutDashboard: {
      icon: <LayoutDashboard className="w-6 h-6 text-brand-bright" />,
      isOrange: false,
    },
    Bot: {
      icon: <Bot className="w-6 h-6 text-brand-orange" />,
      isOrange: true,
    },
    Workflow: {
      icon: <Workflow className="w-6 h-6 text-brand-orange" />,
      isOrange: true,
    },
    Users2: {
      icon: <Users2 className="w-6 h-6 text-brand-electric" />,
      isOrange: false,
    },
    Network: {
      icon: <Network className="w-6 h-6 text-brand-bright" />,
      isOrange: false,
    },
  };

  return (
    <section id="solucoes" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção com cores da marca */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-electric/10 border border-brand-electric/20 text-brand-electric text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            <span>{t.solutions.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
            {t.solutions.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-slate leading-relaxed">
            {t.solutions.description}
          </p>
        </div>

        {/* Grid com os 6 Cards de Soluções com toques vibrantes em azul e laranja */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.solutions.items.map((sol) => {
            const config = iconConfig[sol.icon] || {
              icon: <Code2 className="w-6 h-6 text-brand-electric" />,
              isOrange: false,
            };

            return (
              <div
                key={sol.title}
                className={`group bg-white rounded-2xl p-7 border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  config.isOrange
                    ? "border-slate-200/90 hover:border-brand-orange hover:shadow-card-orange"
                    : "border-slate-200/90 hover:border-brand-electric/80 hover:shadow-card-hover"
                }`}
              >
                {/* Efeito de iluminação no canto do card */}
                <div
                  className={`absolute top-0 right-0 w-36 h-36 rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    config.isOrange
                      ? "bg-gradient-to-br from-brand-orange/15 to-transparent"
                      : "bg-gradient-to-br from-brand-electric/15 to-transparent"
                  }`}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
                        config.isOrange
                          ? "bg-brand-orange/10 border border-brand-orange/20 group-hover:bg-brand-orange/20"
                          : "bg-slate-50 border border-slate-200/80 group-hover:bg-brand-electric/10 group-hover:border-brand-electric/30"
                      }`}
                    >
                      {config.icon}
                    </div>

                    <span
                      className={`text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-full border ${
                        config.isOrange
                          ? "text-brand-orange bg-brand-orange/10 border-brand-orange/20"
                          : "text-brand-slate bg-slate-100/80 border-slate-200/60 group-hover:text-brand-electric group-hover:border-brand-electric/30"
                      }`}
                    >
                      {sol.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-electric transition-colors duration-200 mb-3">
                    {sol.title}
                  </h3>

                  <p className="text-brand-slate text-sm leading-relaxed">
                    {sol.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-slate group-hover:text-brand-electric transition-colors">
                  <Link
                    href="#contato"
                    className="inline-flex items-center gap-1.5 focus:outline-none"
                  >
                    <span>{t.solutions.cta}</span>
                    <ArrowUpRight
                      className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        config.isOrange ? "text-brand-orange" : "text-brand-electric"
                      }`}
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
