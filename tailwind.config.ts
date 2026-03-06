import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#111827",
          foreground: "#F9FAFB",
        },
        muted: {
          DEFAULT: "#F3F4F6",
          foreground: "#4B5563",
        },
        border: "#E5E7EB",
      },
      spacing: {
        "section-y": "4rem",
        "section-y-lg": "6rem",
      },
      maxWidth: {
        content: "72rem",
      },
      borderRadius: {
        lg: "0.75rem",
        full: "9999px",
      },
      fontFamily: {
        sans: "var(--font-geist-sans), system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        mono: "var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
      },
      boxShadow: {
        'card': "0 10px 25px rgba(15, 23, 42, 0.08)",
        'red-card' :'8px 8px 40px 0px rgba(220, 50, 50, 0.25), 0 2px 8px 0px rgba(0,0,0,0.08)',
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          "2xl": "1200px",
        },
      },
    },
  },
  plugins: [],
};

export default config;

