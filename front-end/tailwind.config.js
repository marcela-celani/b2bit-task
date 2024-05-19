/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontSize: {
      sm: "12px",
      md: "14px",
      l: "16px",
      xl: "18px",
    },
    colors: {
      blue: "#02274F",
      light: "#FAFAFA",
      white: "#FDFDFD",
      "gray-dark": "#F1F5F9",
      "gray-light": "#F1F1F1",
      "gray-dark-font": "#262626",
      "gray-light-font": "#999999",
      "red": "#EF4444"
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
    extend: {
      spacing: {
        438: "438px",
        534: "534px",
        20: "70px",
        315: "315px",
        356: "356px",
      },
      borderRadius: {
        "3xl": "18px",
      },
      boxShadow: {
        l: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        xl: "0 0 60px  rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
