import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
        heading: ["Montserrat", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      colors: {
        // Authoritative Congress Theme Palette
        congress: {
          orange: "#FF671F",
          green: "#046A38",
          lightOrange: "#FFF1E9",
          lightGreen: "#EAF5EF",
        },
        border: "#E5E5E5",
        input: "#E5E5E5",
        ring: "#FF671F",
        background: "#FFFFFF",
        foreground: "#111111",
        primary: {
          DEFAULT: "#FF671F", // Congress Orange
          foreground: "#FFFFFF",
          hover: "#E8560F",
          light: "#FFF1E9",
        },
        secondary: {
          DEFAULT: "#046A38", // Congress Green
          foreground: "#FFFFFF",
          hover: "#03522B",
          light: "#EAF5EF",
        },
        dark: {
          DEFAULT: "#111111",
          secondary: "#1A1A1A",
          muted: "#222222",
        },
        muted: {
          DEFAULT: "#F8F8F6",
          foreground: "#5F5F5F",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#111111",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
