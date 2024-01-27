/** @type {import('tailwindcss').Config} */
const MontBold = "./Font/Mont-HeavyDEMO.otf";

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
   
    extend: {
      fontFamily:{
        'mont-bold': ['Mont-Bold', 'sans']
      },
      colors: {
        "momo-primary": "#f9b233",
        "momo-orange": "#dd8118",
        "momo-yellow": "#e5cc1c",
        "momo-red": "#c1282f",
        "momo-black": "#030405",
      },
      backgroundImage: {
        'hero-image': 'url("/hero-momos.jpg")',
        'yellow-blob': 'url("/blob1.svg")',
        'red-blob': 'url("/blob2.svg")',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '16': '4rem',
        '1400px': '1400px',
        '110': '110%',
        '500': '500%'
      }
    },
  },
  plugins: [],
});
