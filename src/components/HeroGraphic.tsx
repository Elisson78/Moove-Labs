"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Bot,
  Cpu,
  Database,
  LayoutDashboard,
  CheckCircle2,
  Sparkles,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function HeroGraphic() {
  const { t } = useLanguage();
  const g = t.heroGraphic;

  const flowNodes = [
    { label: g.flowClient, color: "border-slate-200 bg-slate-50 text-brand-navy" },
    { label: g.flowAi, color: "border-brand-orange/40 bg-brand-orange/10 text-brand-orange font-bold shadow-sm" },
    { label: g.flowAuto, color: "border-brand-bright/30 bg-brand-bright/10 text-brand-bright font-medium" },
    { label: g.flowSaas, color: "border-brand-electric/30 bg-brand-electric/10 text-brand-electric font-semibold" },
    { label: g.flowResult, color: "border-emerald-200 bg-emerald-50 text-emerald-700 font-bold" },
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Glow de fundo de marca: Fusão Electric Blue e Tech Orange */}
      <div className="absolute -inset-4 bg-gradient-to-r from-brand-electric/15 via-brand-bright/10 to-brand-orange/15 rounded-3xl blur-2xl -z-10" />

      {/* Painel Central Abstrato de Arquitetura Conectada */}
      <div className="bg-white/95 rounded-2xl border border-slate-200/90 shadow-[0_16px_45px_-10px_rgba(8,20,45,0.08)] p-6 sm:p-7 relative overflow-hidden backdrop-blur-md">
        
        {/* Barra superior de status do sistema */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange"></span>
            </span>
            <span className="text-xs font-bold text-brand-navy tracking-wider">
              {g.title}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-brand-electric bg-brand-electric/5 px-2.5 py-1 rounded-full border border-brand-electric/20">
            <Sparkles className="w-3 h-3 text-brand-orange" />
            <span>{g.status}</span>
          </div>
        </div>

        {/* Linha de Fluxo Conceitual */}
        <div className="mb-5">
          <div className="text-[11px] font-semibold text-brand-slate uppercase tracking-wider mb-2.5 flex items-center justify-between">
            <span>{g.flowTitle}</span>
            <span className="text-[10px] text-brand-orange font-mono font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              {g.realtime}
            </span>
          </div>
          <div className="grid grid-cols-5 gap-1 sm:gap-2 text-center">
            {flowNodes.map((node) => (
              <div
                key={node.label}
                className={`py-1.5 px-1 rounded-lg border text-[11px] sm:text-xs flex items-center justify-center transition-all ${node.color}`}
              >
                {node.label}
              </div>
            ))}
          </div>
        </div>

        {/* Módulos Conectados em Grid Tecnológico */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 relative">
          
          {/* Módulo 1: WhatsApp / Entrada */}
          <div className="bg-slate-50/90 border border-slate-200/80 rounded-xl p-3.5 relative group hover:border-brand-electric/40 hover:bg-white transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <MessageSquare className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-semibold">
                Live
              </span>
            </div>
            <div className="text-xs font-bold text-brand-navy">{g.module1Title}</div>
            <div className="text-[11px] text-brand-slate mt-0.5">{g.module1Desc}</div>
          </div>

          {/* Módulo 2: AI Agent (Destaque Especial em Tech Orange) */}
          <div className="bg-gradient-to-br from-brand-orange/10 via-amber-50/60 to-white border-2 border-brand-orange/40 rounded-xl p-3.5 relative group shadow-card-orange hover:border-brand-orange transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-orange to-brand-warm text-white flex items-center justify-center shadow-md shadow-brand-orange/20">
                <Bot className="w-4.5 h-4.5" />
              </div>
              <motion.span
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="text-[10px] font-mono text-brand-orange bg-brand-orange/15 px-2 py-0.5 rounded-full font-bold"
              >
                {g.module2Badge}
              </motion.span>
            </div>
            <div className="text-xs font-extrabold text-brand-navy">{g.module2Title}</div>
            <div className="text-[11px] text-brand-orange font-medium mt-0.5">{g.module2Desc}</div>
          </div>

          {/* Módulo 3: Automation / n8n / Webhooks */}
          <div className="bg-slate-50/90 border border-slate-200/80 rounded-xl p-3.5 relative group hover:border-brand-orange/40 hover:bg-white transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-lg bg-brand-warm/15 text-brand-orange flex items-center justify-center">
                <Zap className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono text-brand-orange bg-brand-orange/10 px-1.5 py-0.5 rounded font-semibold">
                Auto
              </span>
            </div>
            <div className="text-xs font-bold text-brand-navy">{g.module3Title}</div>
            <div className="text-[11px] text-brand-slate mt-0.5">{g.module3Desc}</div>
          </div>

          {/* Módulo 4: CRM Personalizado */}
          <div className="bg-slate-50/90 border border-slate-200/80 rounded-xl p-3.5 relative group hover:border-brand-electric/40 hover:bg-white transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-lg bg-brand-electric/10 text-brand-electric flex items-center justify-center">
                <LayoutDashboard className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono text-brand-electric bg-brand-electric/10 px-1.5 py-0.5 rounded font-semibold">
                Sync
              </span>
            </div>
            <div className="text-xs font-bold text-brand-navy">{g.module4Title}</div>
            <div className="text-[11px] text-brand-slate mt-0.5">{g.module4Desc}</div>
          </div>

          {/* Módulo 5: Database / PostgreSQL */}
          <div className="bg-slate-50/90 border border-slate-200/80 rounded-xl p-3.5 relative group hover:border-brand-bright/40 hover:bg-white transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-lg bg-slate-200 text-brand-navy flex items-center justify-center">
                <Database className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono text-brand-slate bg-slate-100 px-1.5 py-0.5 rounded font-semibold">
                SQL
              </span>
            </div>
            <div className="text-xs font-bold text-brand-navy">{g.module5Title}</div>
            <div className="text-[11px] text-brand-slate mt-0.5">{g.module5Desc}</div>
          </div>

          {/* Módulo 6: APIs & Gateway */}
          <div className="bg-slate-50/90 border border-slate-200/80 rounded-xl p-3.5 relative group hover:border-brand-bright/40 hover:bg-white transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-lg bg-brand-bright/10 text-brand-bright flex items-center justify-center">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono text-brand-bright bg-brand-bright/10 px-1.5 py-0.5 rounded font-semibold">
                REST
              </span>
            </div>
            <div className="text-xs font-bold text-brand-navy">{g.module6Title}</div>
            <div className="text-[11px] text-brand-slate mt-0.5">{g.module6Desc}</div>
          </div>
        </div>

        {/* Notificação de Sucesso em Tempo Real (Resultado) */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 p-3.5 bg-gradient-to-r from-emerald-50/90 via-slate-50 to-brand-electric/5 rounded-xl border border-emerald-200/80 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-brand-navy">
                {g.successTitle}
              </div>
              <div className="text-[11px] text-brand-slate">
                {g.successDesc}
              </div>
            </div>
          </div>
          <div className="hidden sm:block text-right">
            <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-100/90 px-2.5 py-1 rounded-full">
              {g.autoBadge}
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
