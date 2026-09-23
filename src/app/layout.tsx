import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MooveLabs | Software, Inteligência Artificial e Automação",
  description:
    "Desenvolvemos software sob medida, plataformas SaaS, automações e agentes de Inteligência Artificial para transformar processos e acelerar empresas.",
  keywords: [
    "MooveLabs",
    "Desenvolvimento de Software",
    "Inteligência Artificial",
    "Automação de Processos",
    "SaaS",
    "Agentes de IA",
    "CRM Personalizado",
    "Integrações WhatsApp",
    "Sistemas Web Sob Medida",
  ],
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  authors: [{ name: "MooveLabs" }],
  creator: "MooveLabs",
  publisher: "MooveLabs",
  metadataBase: new URL("https://moovelabs.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MooveLabs | Software, Inteligência Artificial e Automação",
    description:
      "Desenvolvemos software sob medida, plataformas SaaS, automações e agentes de Inteligência Artificial para transformar processos e acelerar empresas.",
    url: "https://moovelabs.com",
    siteName: "MooveLabs",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 341,
        alt: "MooveLabs Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MooveLabs | Software, Inteligência Artificial e Automação",
    description:
      "Desenvolvemos software sob medida, plataformas SaaS, automações e agentes de Inteligência Artificial para transformar processos e acelerar empresas.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MooveLabs",
    url: "https://moovelabs.com",
    logo: "https://moovelabs.com/logo.png",
    description:
      "Desenvolvemos software sob medida, plataformas SaaS, automações e agentes de Inteligência Artificial para transformar processos e acelerar empresas.",
    sameAs: [
      "https://calculateur.moovelabs.com",
      "https://pontodosindico.com.br",
      "https://devismaison.ch",
      "https://marisenakagawa.com",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["Portuguese", "English", "French"],
    },
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} font-sans scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
        />
      </head>
      <body className="min-h-screen bg-white text-brand-navy selection:bg-brand-electric selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
