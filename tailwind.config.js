import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};

// colors: {
//   primary: "#726EDD",
//   secondary: "#D692DD",
//   neutral: "#1A1423",
//   violet: "#3D314A",
//   lite: "#DCE0D9",
// },
