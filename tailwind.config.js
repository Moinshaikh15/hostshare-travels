/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)",
      },
      keyframes: {
        fadeFromBottom: {
          "0%": {
            height: 0,
            opacity: 0,
          },
          "100%": { opacity: 1, height: "100vh" },
        },
        popIn: {
          "0%": {
            transform: "scale(1.2)",
          },
          "100%": {},
        },
        popOut: {
          "0%": {
            transform: "scale(0.8)",
          },
          "100%": { transform: "scale(1)" },
        },
        bottomUp: {

          "0%": {
            height: "0",
          },
          "100%": { height: "64px" },
        }
      },
    },
  },
  plugins: [],
};
