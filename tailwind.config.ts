import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Oficial MooveLabs
        brand: {
          electric: "#1265F5",    // Cor principal, botões, links, “Labs”
          bright: "#168BFF",      // Gradientes, detalhes e ícone
          orange: "#FF6B20",      // Destaques, CTA secundário e logo
          warm: "#FF9A22",        // Gradiente do símbolo
          navy: "#08142D",        // “Moove”, títulos e textos fortes
          slate: "#64748B",       // Textos secundários
          soft: "#F7F9FC",        // Fundo alternativo das seções
          white: "#FFFFFF",       // Fundo principal
        },
        background: {
          DEFAULT: "#FFFFFF",
          secondary: "#F7F9FC",
          card: "#FFFFFF",
          navy: "#08142D",
        },
        foreground: {
          DEFAULT: "#08142D",
          muted: "#64748B",
        },
        primary: {
          DEFAULT: "#1265F5",
          bright: "#168BFF",
          dark: "#0C4BC2",
          light: "#EBF3FF",
          glow: "rgba(18, 101, 245, 0.2)",
        },
        accent: {
          DEFAULT: "#FF6B20",
          warm: "#FF9A22",
          hover: "#E85910",
          light: "#FFF4EE",
          glow: "rgba(255, 107, 32, 0.25)",
        },
        border: {
          DEFAULT: "#E2E8F0",
          subtle: "#EDF2F7",
          focus: "#1265F5",
        },
        slate: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#08142D",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "brand-fusion": "linear-gradient(135deg, #1265F5 0%, #168BFF 45%, #FF9A22 80%, #FF6B20 100%)",
        "brand-hero": "radial-gradient(ellipse at 50% 0%, rgba(18, 101, 245, 0.08) 0%, rgba(255, 107, 32, 0.04) 40%, transparent 70%)",
        "orange-glow": "linear-gradient(135deg, #FF6B20 0%, #FF9A22 100%)",
        "blue-glow": "linear-gradient(135deg, #1265F5 0%, #168BFF 100%)",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(8, 20, 45, 0.04), 0 1px 2px -1px rgba(8, 20, 45, 0.04)",
        card: "0 4px 20px -2px rgba(8, 20, 45, 0.06), 0 2px 6px -1px rgba(8, 20, 45, 0.02)",
        "card-hover": "0 16px 36px -6px rgba(18, 101, 245, 0.12), 0 4px 12px -2px rgba(255, 107, 32, 0.06)",
        "card-orange": "0 16px 36px -6px rgba(255, 107, 32, 0.16), 0 4px 12px -2px rgba(255, 154, 34, 0.08)",
        "glow-blue": "0 0 35px -5px rgba(18, 101, 245, 0.3)",
        "glow-orange": "0 0 35px -5px rgba(255, 107, 32, 0.35)",
        "glow-fusion": "0 10px 40px -10px rgba(18, 101, 245, 0.25), 0 10px 30px -10px rgba(255, 107, 32, 0.25)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
