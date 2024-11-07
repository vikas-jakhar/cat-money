/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'comic': "'Comic Sans MS', serif",
        'barlow': "'Barlow', serif",
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
          'xl': "1280px",
          '2xl': "1320px",
        },
      },
      colors: {
        'off-black': "#0D0D0D",
        'off-gray': "#F2F2F2",
        'off-red': "#DB3357",
        'off-pink': "#EB879C",
        'off-white': "#ECE6E1",
        'off-brown': "#764751",
        'deep-brown': "#4E3338",
        'light-brown': "#A25C6A",
        'deep-red': "#BC2445",
        'light-black': "#191919",
        'deep-black': "#141414",
      },
      fontSize: {
        'custom-xl': "11px",
        'custom-sm': "22px",
        'custom-2xl': "26px",
        'custom-3xl': "28px",
        'custom-4xl': "32px",
        'custom-lg': "40px",
        'custom-5xl': "56px",
        'custom-8xl': "57px",
        'custom-9xl': "64px",
        'custom-10xl': "73px",
        'custom-11xl': "80px",
      },
      lineHeight: {
        'xl': "100%",
        '2xl': "110%",
        '3xl': "120%",
        '4xl': "130%",
        '5xl': "140%",
        '6xl': "150%",
        '7xl': "190%",
      },
      letterSpacing: {
        'xl': "1px",
        '2xl': "2px",
        '3xl': "4px",
      }
    },
  },
  plugins: [],
}