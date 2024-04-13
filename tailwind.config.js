/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1240px",
        },
      },
      colors: {
        "dark-blue": "var(--clr-dark-blue)",
        violet: {
          500: "var(--clr-violet-500)",
          50: "var(--clr-violet-50)",
        },
      },

      fontFamily: {
        "work-sans": ["var(--fnt-work-sans)"],
      },
    },
  },
  plugins: [],
};
