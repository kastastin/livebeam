/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      fontFamily: {
        trebuchet: ["var(--font-trebuchet)"],
      },
      colors: {
        bg: "#F6F7FA",
        black: "#303030",
      },
      backgroundImage: {
        "btn-gradient": "linear-gradient(90deg, #574dcc, #579aff)",
      },
      boxShadow: {
        btn: "0px 20px 30px rgba(88, 79, 205, 0.2)",
        card: "0px 5.797101020812988px 23.188404083251953px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        btn: "10px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
