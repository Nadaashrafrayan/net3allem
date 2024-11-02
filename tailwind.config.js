/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],

  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "2.5rem",
        xl: "3rem",
        "2xl": "4rem",
      },
    },

    corePlugins: {
      container: false,
    },

    extend: {
      colors: {
        // Purple Shades
        purple60: "#703BF7",
        purple65: "#1A64FF",
        purple70: "#FF9533",
        purple75: "#FFCA99",
        purple90: "#FFE4CC",
        purple95: "#FFF1E5",
        purple97: "#FFF7F0",
        purple99: "#FFFCFA",

        // White Shades
        white90: "#E4E4E7",
        white95: "#F1F1F3",
        white97: "#F7F7F8",
        white99: "#FCFCFD",

        // Grey Shades
        grey8: "#141414",
        grey10: "#1A1A1A",
        grey15: "#262626",
        grey20: "#333333",
        grey30: "#4D4D4D",
        grey40: "#666666",
        grey50: "#808080",
        grey60: "#999999",
      },
    },
  },
  plugins: [],

  darkMode: "class",
};
