"use client";

import React from "react";
import {
  ExternalLink,
  ShieldCheck,
  Globe,
  Sparkles,
  Check,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface BrowserMockupProps {
  projectId: string;
  displayUrl: string;
}

function BrowserMockup({ projectId, displayUrl }: BrowserMockupProps) {
  const { language } = useLanguage();
  const isFr = language === "fr";

  const renderMockupContent = () => {
    switch (projectId) {
      case "calculateur":
        return (
          <div className="w-full h-full bg-brand-navy text-white p-5 sm:p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-brand-electric flex items-center justify-center font-bold text-xs text-white">
                  M
                </div>
                <span className="font-semibold text-xs tracking-wide">MooveLabs Calculateur</span>
              </div>
              <span className="text-[10px] bg-brand-orange/20 text-brand-orange px-2 py-0.5 rounded border border-brand-orange/30 font-semibold">
                SaaS Suisse
              </span>
            </div>

            <div className="my-auto py-4">
              <div className="text-xs uppercase tracking-wider text-brand-orange font-bold mb-1">
                Simulateur de Volume en Ligne
              </div>
              <div className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
                Calculatrice Intelligente de Déménagement
              </div>
              <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                <div className="bg-white/10 p-2 rounded-lg border border-white/10">
                  <div className="text-base font-bold text-brand-bright">48+</div>
                  <div className="text-[10px] text-white/70">{isFr ? "Mobiliers" : "Móveis"}</div>
                </div>
                <div className="bg-white/10 p-2 rounded-lg border border-white/10">
                  <div className="text-base font-bold text-emerald-400">m³ Real</div>
                  <div className="text-[10px] text-white/70">{isFr ? "Calcul Exact" : "Cálculo Exato"}</div>
                </div>
                <div className="bg-white/10 p-2 rounded-lg border border-white/10">
                  <div className="text-base font-bold text-brand-orange">Auto</div>
                  <div className="text-[10px] text-white/70">{isFr ? "Devis Instantané" : "Orçamento Instantâneo"}</div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {isFr ? "En Production Active" : "Produção Ativa"}
              </span>
              <span className="text-brand-bright font-mono">{displayUrl}</span>
            </div>
          </div>
        );

      case "ponto-do-sindico":
        return (
          <div className="w-full h-full bg-brand-navy text-white p-5 sm:p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-brand-bright flex items-center justify-center font-bold text-xs text-white">
                  PS
                </div>
                <span className="font-semibold text-xs tracking-wide">Ponto do Síndico</span>
              </div>
              <span className="text-[10px] bg-brand-electric/20 text-brand-bright px-2 py-0.5 rounded border border-brand-electric/30 font-semibold">
                SaaS Condominial
              </span>
            </div>

            <div className="my-auto py-4">
              <div className="text-xs uppercase tracking-wider text-brand-bright font-bold mb-1">
                {isFr ? "Gestion & Gouvernance" : "Gestão & Governança"}
              </div>
              <div className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
                {isFr ? "Tableau de Bord de Gestion Immobilière" : "Painel Integrado de Administração de Condomínios"}
              </div>
              <div className="grid grid-cols-2 gap-2 mt-3 text-left">
                <div className="bg-white/10 p-2.5 rounded-lg border border-white/10">
                  <div className="text-[11px] font-semibold text-brand-bright">
                    {isFr ? "Gestion des Inspections" : "Gestão de Vistorias"}
                  </div>
                  <div className="text-[10px] text-white/60 mt-0.5">
                    {isFr ? "Protocoles & Suivi" : "Rotinas e protocolos"}
                  </div>
                </div>
                <div className="bg-white/10 p-2.5 rounded-lg border border-white/10">
                  <div className="text-[11px] font-semibold text-emerald-300">
                    {isFr ? "Communication Directe" : "Comunicação Direta"}
                  </div>
                  <div className="text-[10px] text-white/60 mt-0.5">
                    {isFr ? "Alertes & Incidents" : "Avisos e ocorrências"}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {isFr ? "En Production Active" : "Produção Ativa"}
              </span>
              <span className="text-brand-bright font-mono">{displayUrl}</span>
            </div>
          </div>
        );

      case "devismaison":
        return (
          <div className="w-full h-full bg-brand-navy text-white p-5 sm:p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-brand-electric flex items-center justify-center font-bold text-xs text-white">
                  DM
                </div>
                <span className="font-semibold text-xs tracking-wide">DevisMaison.ch</span>
              </div>
              <span className="text-[10px] bg-brand-orange/20 text-brand-orange px-2 py-0.5 rounded border border-brand-orange/30 font-semibold">
                Marketplace Suisse
              </span>
            </div>

            <div className="my-auto py-4">
              <div className="text-xs uppercase tracking-wider text-brand-orange font-bold mb-1">
                Plateforme de Mise en Relation
              </div>
              <div className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
                Devis Travaux &amp; Rénovation en Suisse
              </div>
              <div className="bg-white/10 p-3 rounded-lg border border-white/10 mt-2">
                <div className="flex items-center justify-between text-xs font-medium text-slate-200">
                  <span>{isFr ? "Attribution Intelligente des Demandes" : "Matchmaking Inteligente de Leads"}</span>
                  <span className="text-emerald-400 font-bold">{isFr ? "100% Suisse" : "100% Suíça"}</span>
                </div>
                <div className="w-full bg-white/20 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-brand-electric to-brand-orange h-full w-4/5 rounded-full" />
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {isFr ? "En Production Active" : "Produção Ativa"}
              </span>
              <span className="text-brand-bright font-mono">{displayUrl}</span>
            </div>
          </div>
        );

      case "marise-nakagawa":
        return (
          <div className="w-full h-full bg-brand-navy text-white p-5 sm:p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-brand-orange flex items-center justify-center font-bold text-xs text-white">
                  ET
                </div>
                <span className="font-semibold text-xs tracking-wide">Essentia Travel</span>
              </div>
              <span className="text-[10px] bg-brand-warm/20 text-brand-warm px-2 py-0.5 rounded border border-brand-warm/30 font-semibold">
                {isFr ? "Luxe & Tourisme" : "Luxo & Turismo"}
              </span>
            </div>

            <div className="my-auto py-4">
              <div className="text-xs uppercase tracking-wider text-brand-warm font-bold mb-1">
                {isFr ? "Tourisme d'Exception en Italie" : "Turismo Exclusivo na Itália"}
              </div>
              <div className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
                Marise Nakagawa • Experiências Autênticas
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mt-2 line-clamp-2">
                {isFr
                  ? "Plateforme haut de gamme avec curation d'itinéraires immersifs et performance ultra-rapide."
                  : "Plataforma com curadoria de viagens de alto padrão, roteiros exclusivos e performance ultrarrápida."}
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {isFr ? "En Production Active" : "Produção Ativa"}
              </span>
              <span className="text-brand-warm font-mono">{displayUrl}</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-white shadow-card overflow-hidden group hover:border-brand-electric/40 transition-colors">
      {/* Barra do Navegador */}
      <div className="bg-slate-100/90 border-b border-slate-200 px-4 py-2.5 flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-brand-warm" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>

        <div className="flex-1 bg-white border border-slate-200 rounded-md px-3 py-1 flex items-center justify-between text-xs text-slate-600 font-mono">
          <div className="flex items-center gap-1.5 truncate">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="text-slate-400">https://</span>
            <span className="text-brand-navy font-semibold truncate">{displayUrl}</span>
          </div>
          <Globe className="w-3 h-3 text-slate-400 shrink-0 ml-1" />
        </div>
      </div>

      <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-brand-navy">
        {renderMockupContent()}
      </div>
    </div>
  );
}

export function Portfolio() {
  const { t } = useLanguage();
  const p = t.portfolio;

  return (
    <section id="projetos" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            <span>{p.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
            {p.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-slate leading-relaxed">
            {p.description}
          </p>
        </div>

        {/* Lista Alternada dos 4 Case Studies */}
        <div className="space-y-16 lg:space-y-24">
          {p.items.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Lado do Mockup */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <BrowserMockup projectId={project.id} displayUrl={project.displayUrl} />
                </div>

                {/* Lado do Conteúdo / Descrição */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full border bg-brand-electric/10 text-brand-electric border-brand-electric/20"
                    >
                      {project.category}
                    </span>
                    <span className="text-xs font-mono font-semibold text-brand-orange">
                      {p.caseLabel} #{String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-brand-slate text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  {/* Destaques do Projeto */}
                  <div className="space-y-2 pt-1">
                    {project.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-navy">
                        <div className="w-4 h-4 rounded-full bg-brand-electric/15 text-brand-electric flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tecnologias Utilizadas */}
                  <div className="pt-2">
                    <div className="text-[11px] font-bold text-brand-slate uppercase tracking-wider mb-2">
                      {p.techUsed}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-slate-50 border border-slate-200 text-brand-navy text-xs px-2.5 py-1 rounded-md font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Botão de Acesso ao Projeto Real */}
                  <div className="pt-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-electric text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                      <span>{p.visitLive}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
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
