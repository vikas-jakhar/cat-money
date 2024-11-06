/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'comic': "'Comic Sans MS', serif",
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1320px",
        },
      },
      colors: {
        'off-black': "#0D0D0D",
        'off-red': "#DB3357",
      },
    },
  },
  plugins: [],
}