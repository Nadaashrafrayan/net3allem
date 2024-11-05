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
        OurGreen: "#14A697",
      ourPurple:"#A6296E",
      ourOrange:"#F2522E",

        // White Shades
        white90: "#E4E4E7",
        white95: "#F1F1F3",
        white97: "#F7F7F8",
        white99: "#FCFCFD",

        // Grey Shades
        ourGrey: "#C4C4C4",
        grey10: "#1A1A1A",
        grey15: "#262626",
        grey20: "#A0A0A0",
        grey30: "#4D4D4D",
        grey40: "#7A7A7A",
        grey50: "#525252",
        grey60: "#999999",
      },
    },
  },
  plugins: [],

  darkMode: "class",
};
