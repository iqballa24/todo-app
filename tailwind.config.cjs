/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Josefin Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/bg-desktop-light.jpg')",
        "hero-pattern-mobile": "url('/images/bg-mobile-light.jpg')",
      },
      fontSize: {
        base: "18px",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        "bright-blue": "hsl(220, 98%, 61%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
        "very-light-grayish-blue": "hsl(236, 33%, 92%)",
        "light-grayish-blue": {
          light: "hsl(233, 11%, 84%)",
          dark: "hsl(234, 39%, 85%)",
          DEFAULT: "hsl(236, 33%, 92%)",
        },
        "dark-grayish-blue": {
          light: "hsl(236, 9%, 61%)",
          dark: "hsl(234, 11%, 52%)",
        },
        "very-dark-grayish-blue": {
          light: "hsl(235, 19%, 35%)",
          dark: "hsl(233, 14%, 35%)",
          DEFAULT: "hsl(237, 14%, 26%)",
        },
        "very-dark-blue": "hsl(235, 21%, 11%)",
        "very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
      },
    },
  },
  plugins: [],
};
