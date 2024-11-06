/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'comic': "'Comic Sans MS', serif",
        'luckiest': "'Luckiest Guy', cursive",
        'inter': "'Inter', sans-serif",
      },
      backgroundImage: {
        'linear-gradient-red': "linear-gradient(90deg, #B21F3F 0%, #DB3357 50%, #B21F3F 100%)"
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
        'deep-red': "#BC2445",
      },
      lineHeight: {
        'xl': "100%"
      },
    },
  },
  plugins: [],
}