"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ContactSection() {
  const { t, language } = useLanguage();
  const c = t.contact;

  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    whatsapp: "",
    tipoProjeto: c.projectTypes[0],
    descricao: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      language === "fr"
        ? `Bonjour MooveLabs ! J'aimerais échanger sur un projet technologique pour mon entreprise.`
        : `Olá, MooveLabs! Gostaria de conversar sobre um projeto de tecnologia para minha empresa.`
    );
    const number = language === "fr" ? "41790000000" : "5511999999999";
    window.open(`https://wa.me/${number}?text=${text}`, "_blank");
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho do CTA Principal */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{c.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
            {c.title} <span className="text-brand-gradient">{c.titleGradient}</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-slate leading-relaxed">
            {c.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 mt-8">
            <button
              onClick={() => {
                const el = document.getElementById("form-anchor");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-brand-electric hover:bg-brand-electric/95 text-white font-semibold text-sm px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-brand-electric/25 transition-all cursor-pointer"
            >
              <span>{c.fillForm}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsAppDirect}
              className="inline-flex items-center gap-2 bg-slate-50 hover:bg-white text-brand-navy border border-slate-200 hover:border-brand-orange/40 font-semibold text-sm px-6 py-3.5 rounded-xl shadow-subtle hover:shadow-card transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-brand-orange" />
              <span>{c.talkWhatsapp}</span>
            </button>
          </div>
        </div>

        {/* Container do Formulário */}
        <div id="form-anchor" className="max-w-2xl mx-auto">
          <div className="bg-brand-soft rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-card">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy">
                  {c.formSuccessTitle}
                </h3>
                <p className="text-sm text-brand-slate max-w-md mx-auto leading-relaxed">
                  {c.formSuccessDesc}
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        nome: "",
                        empresa: "",
                        email: "",
                        whatsapp: "",
                        tipoProjeto: c.projectTypes[0],
                        descricao: "",
                      });
                    }}
                    className="text-xs font-bold text-brand-electric hover:text-brand-orange transition-colors cursor-pointer"
                  >
                    {c.sendAnother}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Nome */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                      {c.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={c.namePlaceholder}
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-electric/20 focus:border-brand-electric transition-all"
                    />
                  </div>

                  {/* Empresa */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                      {c.companyLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={c.companyPlaceholder}
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-electric/20 focus:border-brand-electric transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                      {c.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={c.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-electric/20 focus:border-brand-electric transition-all"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                      {c.whatsappLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={c.whatsappPlaceholder}
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-electric/20 focus:border-brand-electric transition-all"
                    />
                  </div>
                </div>

                {/* Tipo de Projeto */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">
                    {c.projectTypeLabel}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {c.projectTypes.map((type) => {
                      const isSelected = formData.tipoProjeto === type;

                      return (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setFormData({ ...formData, tipoProjeto: type })}
                          className={`py-2 px-3 rounded-lg border text-xs font-semibold text-left transition-all cursor-pointer ${
                            isSelected
                              ? "bg-brand-electric border-brand-electric text-white shadow-sm"
                              : "bg-white border-slate-200 text-brand-navy hover:border-brand-electric/40"
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Descrição do Projeto */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5">
                    {c.descLabel}
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={c.descPlaceholder}
                    value={formData.descricao}
                    onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-navy placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-electric/20 focus:border-brand-electric transition-all resize-y"
                  />
                </div>

                {/* Botão de Envio */}
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-brand-electric hover:bg-brand-electric/95 text-white font-bold text-base py-4 px-6 rounded-xl shadow-md hover:shadow-lg hover:shadow-brand-electric/25 transition-all duration-200 active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                  >
                    {loading ? (
                      <span>{c.submitting}</span>
                    ) : (
                      <>
                        <span>{c.submitButton}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Micro-avisos de confiança */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-[11px] text-brand-slate gap-2">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-electric" />
                    <span>{c.securityNotice}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-orange" />
                    <span>{c.slaNotice}</span>
                  </div>
                </div>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
