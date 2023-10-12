/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    screens: {
      'sm': '480px',
      // => @media (min-width: 640px) { ... }

      'md': '578px',
      // => @media (min-width: 768px) { ... }

      'lg': '768px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1020px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1636px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors:{
        mruOrange:"#F16522",
        mruLiteOrange:"#421C09",
        mruLiteGray:"#3D3D3D",
        mruMediumGray:"#141414",
        mruListConbg:"#131313"
      },
      blue:{
        450:"#5F99F7"
      },
      width: {
        '128': '100%',
        "leftcon":"20%",
        "rightcon":"80%",
        "90per":"90%"
      },
      height:{
        "headerH":"10vh",
        "childHeaderH":"5vh",
        "bodyH":"90vh",
        "childBodyH":"85vh",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar')
  ],
}