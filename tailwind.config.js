/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#11023B",
      },
      maxWidth: {
        '500px': '500px', 
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        'xs': '500px',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(116.72deg, #F1F5F2 0%, #F0F6FF 100%)',
      },
    },
  },
  plugins: [],
}

