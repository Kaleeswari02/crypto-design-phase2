/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lightdark: '#1E1E1E',
        blackish: '#2D2D2D',
         purple:'#7928D2',
         darkBlue:'#300064',
         activegreen:'#14F195'

      },
      backgroundImage: {
        gradientBtn:
          'linear-gradient(270deg, #7928D2 0%, #399FE9 50%, #14F195 100%)',
       
      },
      
      fontFamily: {
        dreiviertelfett: ['Dreiviertelfett', 'sans-serif'],
        extrafettkursiv: ['ExtrafettKursiv', 'sans-serif'],
        kraeftig: ['Kraeftig', 'sans-serif'],
        extrafett: ['Extrafett', 'sans-serif'],
        buch: ['Buch', 'sans-serif'],
        halbfett: ['Halbfett', 'sans-serif'],
      },
      screens: {
        miniTablet: { min: '768px', max: '1023px' },
      },
    },
  },
  plugins: [],
};
