/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      // "Ink & Signal" dark palette (cyan + amber brand identity)
      ink: "#0a0a0e", // page background
      surface: "#12121a", // cards
      "surface-2": "#171722", // raised panels / inputs
      border: "#24242f", // hairlines
      brown: "#12121a", // legacy alias → surface
      lightBrown: "#171722", // legacy alias → surface-2
      darkBrown: "#0a0a0e", // legacy alias → ink
      black: "#050509",
      white: "#f2f2f7",
      cyan: "#21d4fd",
      lightCyan: "#7ee5ff",
      darkCyan: "#0e9cbf",
      orange: "#fb9718",
      lightOrange: "#ffc98a",
      darkOrange: "#e07d0a",
      grey: "#9d9dae",
      lightGrey: "#a7a7b8",
      darkGrey: "#3a3a46",
    },
    extend: {
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgba(33, 212, 253, 0.45)",
        cyanBigShadow: "10px 10px 1000px 500px rgba(33, 212, 253, 0.25)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(33, 212, 253, 0.3)",
        orangeShadow: "0px 0px 20px 0px rgba(251, 151, 24, 0.45)",
        orangeBigShadow: "10px 10px 10000px 500px rgba(251, 151, 24, 0.25)",
        orangeMediumShadow: "10px 10px 2000px 150px rgba(251, 151, 24, 0.3)",
        card: "0 10px 40px -12px rgba(0, 0, 0, 0.6)",
        cardHover: "0 24px 70px -18px rgba(0, 0, 0, 0.75)",
        glowCyan: "0 0 60px -12px rgba(33, 212, 253, 0.5)",
        glowAmber: "0 0 60px -12px rgba(251, 151, 24, 0.5)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      fontFamily: {
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        special: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
      animation: {
        marquee: "marquee 80s linear infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 24s linear infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
