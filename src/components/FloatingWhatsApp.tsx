"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent(t.whatsapp.msg);
    const phone = language === "fr" ? "41790000000" : "5511999999999";
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip discreto no hover */}
      <div className="hidden md:flex mr-3 bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        {t.whatsapp.tooltip}
      </div>

      <button
        onClick={handleClick}
        className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 shadow-lg hover:shadow-emerald-600/30 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none flex items-center justify-center relative cursor-pointer"
        aria-label={t.whatsapp.aria}
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
        </span>
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
}
