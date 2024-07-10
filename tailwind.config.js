/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111010",
        secondary: "#C4C4C4",
        gray: "#282727",
      },
    },
    screens: {
      sm: "640px",
      md: "1024px",
    },
  },
  plugins: [],
};
