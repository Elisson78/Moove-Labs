"use client";

import React from "react";
import { Globe2, ShieldCheck, MapPin, Sparkles } from "lucide-react";
import { Logo } from "./Logo";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
  const { t } = useLanguage();
  const ab = t.about;

  return (
    <section id="sobre" className="py-20 md:py-28 bg-brand-soft border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado Esquerdo: Conteúdo Institucional */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-electric/10 border border-brand-electric/20 text-brand-electric text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span>{ab.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
              {ab.title} <span className="text-brand-gradient">{ab.titleGradient}</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-brand-slate leading-relaxed">
              <p>
                {ab.p1}
              </p>
              <p>
                {ab.p2}
              </p>
              <p className="font-semibold text-brand-navy">
                {ab.p3}
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-brand-navy">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-xs">
                <MapPin className="w-4 h-4 text-brand-electric" />
                <span>{ab.countryBr}</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-xs">
                <MapPin className="w-4 h-4 text-brand-orange" />
                <span>{ab.countryCh}</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-xs">
                <MapPin className="w-4 h-4 text-brand-bright" />
                <span>{ab.countryEu}</span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Card Institucional com o Símbolo Oficial da Marca */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-card space-y-6">
              <div className="flex items-center gap-3.5 pb-6 border-b border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center p-2 shadow-xs">
                  <Logo variant="icon" size="sm" />
                </div>
                <div>
                  <div className="font-extrabold text-brand-navy text-lg tracking-tight">MOOVELABS</div>
                  <div className="text-xs text-brand-slate font-semibold uppercase tracking-wider">
                    {ab.cardSub}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-brand-navy">{ab.card1Title}</div>
                    <div className="text-xs text-brand-slate mt-0.5">{ab.card1Desc}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-brand-navy">{ab.card2Title}</div>
                    <div className="text-xs text-brand-slate mt-0.5">{ab.card2Desc}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe2 className="w-5 h-5 text-brand-electric shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-brand-navy">{ab.card3Title}</div>
                    <div className="text-xs text-brand-slate mt-0.5">{ab.card3Desc}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-center">
                <span className="text-xs text-brand-slate font-medium">
                  {ab.cardFooter}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
