"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSelector } from "./LanguageSelector";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.solutions, href: "#solucoes" },
    { label: t.nav.ai, href: "#inteligencia-artificial" },
    { label: t.nav.projects, href: "#projetos" },
    { label: t.nav.howWeWork, href: "#como-trabalhamos" },
    { label: t.nav.about, href: "#sobre" },
    { label: t.nav.contact, href: "#contato" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(8,20,45,0.06)] py-3"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 sm:gap-6">
            {/* Logo com destaque ampliado e espaçamento fluido */}
            <Link href="#hero" className="group focus:outline-none flex items-center py-0.5 shrink-0">
              <Logo size="xl" />
            </Link>

            {/* Desktop Navigation & Seletor de Idiomas */}
            <div className="hidden lg:flex items-center gap-3">
              <nav className="flex items-center gap-1 xl:gap-1.5 bg-slate-50/90 border border-slate-200/80 rounded-full px-4 py-1.5 shadow-sm backdrop-blur-sm">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative text-[13px] xl:text-[14px] font-medium text-slate-600 hover:text-brand-electric px-3 py-1.5 rounded-full transition-colors hover:bg-white flex items-center group whitespace-nowrap"
                  >
                    <span>{link.label}</span>
                  </Link>
                ))}
              </nav>

              {/* Seletor de Idiomas (Bandeira do Brasil e Suíça) */}
              <LanguageSelector />
            </div>

            {/* Mobile Controls: Seletor + Botão Hambúrguer */}
            <div className="lg:hidden flex items-center gap-2.5 ml-auto">
              <LanguageSelector />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-brand-navy hover:text-brand-electric rounded-lg hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-white/98 backdrop-blur-xl border-b border-slate-200 p-6 shadow-xl lg:hidden"
          >
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-brand-navy hover:text-brand-electric py-2.5 border-b border-slate-100 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-slate-400">→</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
