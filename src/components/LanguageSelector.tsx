"use client";

import React from "react";
import { useLanguage, Language } from "@/context/LanguageContext";
import { FlagBR, FlagCH } from "./Flags";
import { motion } from "framer-motion";

interface LanguageSelectorProps {
  className?: string;
  variant?: "pill" | "compact";
}

export function LanguageSelector({
  className = "",
  variant = "pill",
}: LanguageSelectorProps) {
  const { language, setLanguage } = useLanguage();

  const options: Array<{ code: Language; label: string; flag: React.ReactNode; tooltip: string }> = [
    {
      code: "pt",
      label: "PT",
      flag: <FlagBR className="w-4 h-3 rounded-[2px]" />,
      tooltip: "Português (Brasil)",
    },
    {
      code: "fr",
      label: "FR",
      flag: <FlagCH className="w-3.5 h-3.5 rounded-[2px]" />,
      tooltip: "Français (Suisse)",
    },
  ];

  return (
    <div
      className={`inline-flex items-center p-0.5 sm:p-1 bg-slate-100/90 border border-slate-200/90 rounded-full backdrop-blur-sm shadow-xs ${className}`}
      role="group"
      aria-label="Selecionar Idioma / Choisir la langue"
    >
      {options.map((opt) => {
        const isActive = language === opt.code;

        return (
          <button
            key={opt.code}
            onClick={() => setLanguage(opt.code)}
            title={opt.tooltip}
            aria-pressed={isActive}
            className={`relative flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold transition-all duration-200 select-none cursor-pointer ${
              isActive
                ? "text-brand-navy shadow-xs"
                : "text-slate-500 hover:text-brand-navy hover:bg-white/50"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeLangIndicator"
                className="absolute inset-0 bg-white rounded-full border border-slate-200/80 shadow-xs"
                transition={{ type: "spring", stiffness: 450, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center">{opt.flag}</span>
            <span className="relative z-10 font-semibold tracking-wide text-[11px] sm:text-xs">
              {opt.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
