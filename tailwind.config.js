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
        'deep-red': "#BC2445",
        'deep-black': "#141414",
        'light-black': "#191919",
        'light-brown': "#A25C6A",
      },
      fontSize: {
        'custom-xl': "11px",
        'custom-2xl': "22px",
        'custom-3xl': "26px",
        'custom-4xl': "28px",
        'custom-5xl': "32px",
        'custom-6xl': "40px",
        'custom-7xl': "56px",
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
      },
      boxShadow: {
        '3xl': "0px 4px 4px 0px #00000040",
        '4xl': "0px 0px 10px white", 
      }
    },
  },
  plugins: [],
}