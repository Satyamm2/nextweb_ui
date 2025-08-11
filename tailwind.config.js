/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      keyframes: {
        borderSpin: {
          "0%": { "background-position": "0% 0%" },
          "100%": { "background-position": "400% 0%" },
        },
      },
      animation: {
        borderSpin: "borderSpin 4s linear infinite",
      },
    },
  },
  plugins: [],
}
