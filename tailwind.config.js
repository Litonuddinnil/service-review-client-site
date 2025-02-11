  /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#050218",
        background: "#eeedfd",
        primary: "#4225ed",
        secondary: "#f49081",
        accent: "#f1d154",
        card:"#03028c0d",
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: ["cupcake", "dark", "cmyk", "pastel", "wireframe"],
  },
};
