"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, FolderKanban, Zap, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { HeroGraphic } from "./HeroGraphic";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white hero-gradient-glow"
    >
      {/* Padrão de Grid Tecnológico sutil ao fundo com pontos de luz */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-brand-electric/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Coluna da Esquerda: Mensagem Comercial e Proposta de Valor */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Badge Institucional com detalhes da paleta oficial */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-50/90 border border-slate-200/90 shadow-sm backdrop-blur-sm"
            >
              {/* Ponto duplo de pulso com azul e laranja */}
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-brand-electric animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              </div>
              <span className="text-xs font-semibold text-brand-navy tracking-wide">
                {t.hero.badgeAi}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-xs font-medium text-brand-orange">
                {t.hero.badgeCustom}
              </span>
            </motion.div>

            {/* Headline Principal com Gradiente MooveLabs */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.12]"
            >
              {t.hero.headlinePart1}{" "}
              <span className="text-brand-gradient">
                {t.hero.headlineGradient}
              </span>
            </motion.h1>

            {/* Subheadline Clara e Concreta */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-brand-slate font-normal leading-relaxed max-w-2xl"
            >
              {t.hero.description}
            </motion.p>

            {/* CTAs Principais com destaque nas duas cores da marca */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              {/* Botão Primário: Electric Blue com brilho ao passar o mouse */}
              <Link
                href="#contato"
                className="group relative inline-flex items-center justify-center gap-2.5 bg-brand-electric hover:bg-brand-electric/95 text-white font-semibold text-base px-7 py-4 rounded-xl shadow-md hover:shadow-lg hover:shadow-brand-electric/25 transition-all duration-200 active:scale-[0.98]"
              >
                <span>{t.hero.startProject}</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Botão Secundário: Moderno com acento em Tech Orange */}
              <Link
                href="#projetos"
                className="group inline-flex items-center justify-center gap-2 bg-slate-50/90 hover:bg-white text-brand-navy font-medium text-base px-6 py-4 rounded-xl border border-slate-200/90 hover:border-brand-orange/40 shadow-subtle hover:shadow-card transition-all duration-200"
              >
                <FolderKanban className="w-4 h-4 text-brand-orange group-hover:scale-110 transition-transform" />
                <span>{t.hero.viewProjects}</span>
              </Link>
            </motion.div>

            {/* Linha de Destaques Rápidos com Laranja e Azul */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-brand-electric/10 text-brand-electric flex items-center justify-center shrink-0">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-brand-navy">{t.hero.highlightPerfTitle}</div>
                  <div className="text-[11px] text-brand-slate">{t.hero.highlightPerfSub}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-brand-navy">{t.hero.highlightAiTitle}</div>
                  <div className="text-[11px] text-brand-slate">{t.hero.highlightAiSub}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-brand-navy">{t.hero.highlightCustomTitle}</div>
                  <div className="text-[11px] text-brand-slate">{t.hero.highlightCustomSub}</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Coluna da Direita: Composição Visual Tecnológica Interativa */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-5"
          >
            <HeroGraphic />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
