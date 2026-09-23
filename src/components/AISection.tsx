"use client";

import React from "react";
import {
  Bot,
  UserCheck,
  Calendar,
  FileSpreadsheet,
  RefreshCw,
  Search,
  Database,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function AISection() {
  const { t } = useLanguage();
  const ai = t.aiSection;

  const useCaseIcons = [
    <Bot key="1" className="w-4 h-4 text-brand-orange" />,
    <UserCheck key="2" className="w-4 h-4 text-emerald-600" />,
    <Calendar key="3" className="w-4 h-4 text-brand-electric" />,
    <FileSpreadsheet key="4" className="w-4 h-4 text-brand-warm" />,
    <RefreshCw key="5" className="w-4 h-4 text-brand-bright" />,
    <Search key="6" className="w-4 h-4 text-brand-electric" />,
    <Database key="7" className="w-4 h-4 text-brand-orange" />,
  ];

  return (
    <section
      id="inteligencia-artificial"
      className="py-20 md:py-28 bg-brand-soft border-y border-slate-200/80 relative overflow-hidden"
    >
      {/* Luzes de fundo sutis com as duas cores de destaque */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-electric/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            <span>{ai.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight">
            {ai.title} <span className="text-brand-gradient">{ai.titleGradient}</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-slate leading-relaxed">
            {ai.description}
          </p>
        </div>

        {/* Bloco 1: Diagrama de Fluxo Conectado */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-card mb-16 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-4">
            <div>
              <span className="text-xs font-bold text-brand-slate uppercase tracking-wider">
                {ai.archBadge}
              </span>
              <h3 className="text-lg font-bold text-brand-navy mt-0.5">
                {ai.archTitle}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold">
                <Zap className="w-3 h-3" />
                {ai.pipelineBadge}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative">
            {ai.steps.map((step, index) => {
              const isAiCore = index === 2; // Step 03: AI Agent

              return (
                <div key={step.step} className="flex flex-col items-center text-center relative group">
                  <div
                    className={`w-full p-4 rounded-xl border transition-all duration-300 ${
                      isAiCore
                        ? "bg-gradient-to-b from-brand-orange/10 via-amber-50/40 to-white border-brand-orange/50 shadow-card-orange scale-[1.03]"
                        : "bg-slate-50/80 border-slate-200/90 group-hover:bg-white group-hover:border-slate-300"
                    }`}
                  >
                    <span
                      className={`inline-block text-[11px] font-mono font-bold px-2 py-0.5 rounded-full mb-2 ${
                        isAiCore
                          ? "bg-gradient-to-r from-brand-orange to-brand-warm text-white shadow-sm"
                          : "bg-slate-200/70 text-brand-navy"
                      }`}
                    >
                      {step.step}
                    </span>
                    <div className={`font-bold text-sm ${isAiCore ? "text-brand-orange" : "text-brand-navy"}`}>
                      {step.title}
                    </div>
                    <div className="text-[11px] text-brand-slate mt-1 leading-snug">
                      {step.desc}
                    </div>
                  </div>

                  {/* Seta indicativa para desktop */}
                  {index < ai.steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300 group-hover:text-brand-electric transition-colors">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bloco 2: Exemplos Reais de Aplicação Empresarial */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-brand-navy tracking-tight">
                {ai.casesTitle}
              </h3>
              <p className="text-sm text-brand-slate mt-1">
                {ai.casesDesc}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-lg border border-emerald-200 self-start sm:self-auto">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{ai.noHallucination}</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {ai.cases.map((uc, i) => (
              <div
                key={uc.title}
                className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-subtle hover:border-brand-orange/40 hover:shadow-card transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-brand-orange/10 group-hover:border-brand-orange/20 flex items-center justify-center mb-3 transition-colors">
                    {useCaseIcons[i] || useCaseIcons[0]}
                  </div>
                  <h4 className="text-sm font-bold text-brand-navy mb-1.5 group-hover:text-brand-orange transition-colors">
                    {uc.title}
                  </h4>
                  <p className="text-xs text-brand-slate leading-relaxed">
                    {uc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="#contato"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-electric hover:text-brand-orange transition-colors"
            >
              <span>{ai.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
