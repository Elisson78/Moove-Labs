"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Globe, ArrowUp, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t, language } = useLanguage();
  const f = t.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl =
    language === "fr"
      ? "https://wa.me/41790000000"
      : "https://wa.me/5511999999999";

  return (
    <footer className="bg-brand-soft border-t border-slate-200/90 pt-16 pb-12 text-brand-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Coluna 1: Logo & Posicionamento */}
          <div className="md:col-span-6 space-y-4">
            <Link href="#hero" className="inline-block group focus:outline-none">
              <Logo size="xl" />
            </Link>
            <p className="text-sm text-brand-slate max-w-md leading-relaxed">
              {f.description}
            </p>
            <div className="flex items-center gap-3 text-xs text-brand-slate">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-brand-electric" />
                <span>{f.countries}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                <span>{f.activeSystems}</span>
              </span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-navy">
              {f.navTitle}
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#solucoes" className="hover:text-brand-electric transition-colors">
                  {t.nav.solutions}
                </Link>
              </li>
              <li>
                <Link href="#inteligencia-artificial" className="hover:text-brand-orange transition-colors">
                  {t.nav.ai}
                </Link>
              </li>
              <li>
                <Link href="#projetos" className="hover:text-brand-electric transition-colors">
                  {t.nav.projects}
                </Link>
              </li>
              <li>
                <Link href="#como-trabalhamos" className="hover:text-brand-electric transition-colors">
                  {t.nav.howWeWork}
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Institucional & Contato */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-navy">
              {f.instTitle}
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#sobre" className="hover:text-brand-electric transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="#contato" className="hover:text-brand-electric transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-orange transition-colors"
                >
                  {f.whatsappChannel}
                </a>
              </li>
              <li>
                <Link href="#hero" className="hover:text-brand-electric transition-colors">
                  {f.privacyPolicy}
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Linha Final de Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-slate gap-4">
          <div>
            © {new Date().getFullYear()} MooveLabs. {f.rights}
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-brand-orange" />
              <span>Software • AI • Automation</span>
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white border border-slate-200 text-brand-navy hover:text-brand-electric hover:border-brand-electric/40 transition-colors flex items-center gap-1 shadow-subtle cursor-pointer"
              aria-label={f.top}
            >
              <span>{f.top}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
