import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        display: ["var(--font-heading)", "system-ui", "sans-serif"],
        hero: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        wordmark: ["var(--font-wordmark)", "var(--font-heading)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SF Mono", "Menlo", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        cream: "var(--cream)",
        ink: {
          DEFAULT: "var(--ink)",
          muted: "var(--ink-muted)",
        },
        coral: {
          DEFAULT: "var(--coral)",
          text: "var(--coral-text)",
          cta: "var(--coral-cta)",
        },
        hairline: "var(--hairline)",
        "muted-strong": "var(--muted-strong)",
        "on-dark-muted": "var(--on-dark-muted)",
        tint: {
          butter: "var(--tint-butter)",
          lilac: "var(--tint-lilac)",
          pink: "var(--tint-pink)",
          mint: "var(--tint-mint)",
          peach: "var(--tint-peach)",
        },
        tile: {
          butter: "var(--tile-butter)",
          lilac: "var(--tile-lilac)",
          mint: "var(--tile-mint)",
        },
        chip: {
          amber: {
            DEFAULT: "var(--chip-amber-bg)",
            foreground: "var(--chip-amber-fg)",
          },
          green: {
            DEFAULT: "var(--chip-green-bg)",
            foreground: "var(--chip-green-fg)",
          },
          ai: {
            DEFAULT: "var(--chip-ai-bg)",
            foreground: "var(--chip-ai-fg)",
          },
          grey: {
            DEFAULT: "var(--chip-grey-bg)",
            foreground: "var(--chip-grey-fg)",
          },
        },
        surface: {
          DEFAULT: "hsl(var(--surface))",
          raised: "hsl(var(--surface-raised))",
        },
        navy: {
          DEFAULT: "hsl(var(--navy))",
          raised: "hsl(var(--navy-raised))",
        },
        headline: "hsl(var(--headline) / <alpha-value>)",
        subtext: "hsl(var(--subtext))",
        "on-light-heading": "hsl(var(--on-light-heading))",
        "on-light-body": "hsl(var(--on-light-body))",
        "on-light-muted": "hsl(var(--on-light-muted))",
        /* Remap legacy brand.* so existing classNames stay readable.
           brand.bg + brand.text were a dark band (ink + cream), not page cream. */
        brand: {
          blue: "var(--coral-text)",
          navy: "var(--ink)",
          bg: "var(--ink)",
          electric: "var(--ink)",
          critical: "var(--coral)",
          warning: "var(--chip-amber-fg)",
          text: "var(--cream)",
          gray: {
            900: "var(--ink)",
            700: "var(--ink-muted)",
            500: "var(--muted-strong)",
            200: "var(--hairline)",
            100: "var(--tint-peach)",
          },
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        pill: "var(--radius-pill)",
        panel: "var(--radius-panel)",
        hero: "var(--radius-hero)",
        cta: "var(--radius-cta)",
        tile: "var(--radius-tile)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "pulse-border": {
          "0%, 100%": { borderColor: "hsl(var(--destructive) / 0.5)", boxShadow: "0 0 8px 1px hsl(var(--destructive) / 0.08)" },
          "50%": { borderColor: "hsl(var(--destructive) / 1)", boxShadow: "0 0 20px 4px hsl(var(--destructive) / 0.25)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "pulse-border": "pulse-border 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
