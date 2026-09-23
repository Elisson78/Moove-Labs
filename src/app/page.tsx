"use client";

import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Solutions } from "@/components/Solutions";
import { AISection } from "@/components/AISection";
import { Portfolio } from "@/components/Portfolio";
import { HowWeWork } from "@/components/HowWeWork";
import { TechStack } from "@/components/TechStack";
import { Differentials } from "@/components/Differentials";
import { About } from "@/components/About";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white">
        {/* 1. Header Minimalista Sticky com Seletor de Idiomas */}
        <Header />

        {/* Conteúdo Principal Semântico */}
        <main className="flex-1">
          {/* 2. Hero Section com Headline & Composição Tecnológica */}
          <Hero />

          {/* 3. Prova Social / Indicadores Reais */}
          <SocialProof />

          {/* 4. Soluções e Capacidades Técnicas (6 Cards) */}
          <Solutions />

          {/* 5. Seção Especial de IA com Diagrama Conectado */}
          <AISection />

          {/* 6. Portfólio / 4 Case Studies Reais */}
          <Portfolio />

          {/* 7. Metodologia / Da Ideia ao Produto Funcionando */}
          <HowWeWork />

          {/* 8. Stack Tecnológica / Badges Monocromáticos */}
          <TechStack />

          {/* 9. Diferenciais da MooveLabs (3 Pilares) */}
          <Differentials />

          {/* 10. Sobre a MooveLabs (Brasil & Internacional) */}
          <About />

          {/* 11. CTA Principal & Formulário de Contato */}
          <ContactSection />
        </main>

        {/* 12. Rodapé Institucional Completo */}
        <Footer />

        {/* 13. Botão Flutuante Discreto de WhatsApp */}
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}
