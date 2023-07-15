const withMT = require("@material-tailwind/html/utils/withMT");
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ['./src/**/*.{html,js,svelte,ts}',
  ],
  safelist:[
    'bg-red-600',
    'bg-primary-600',
    'border-white-700'
  ],
  theme: {
    screens: {
      '2xl': '1600px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {"50":"#f5f3ff","100":"#ede9fe","200":"#ddd6fe","300":"#c4b5fd","400":"#a78bfa","500":"#8b5cf6","600":"#7c3aed","700":"#6d28d9","800":"#5b21b6","900":"#4c1d95","950":"#2e1065"}
      }
    },
  },
  plugins: [
   
  ],
})