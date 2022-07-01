/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
     animation: {
      'jump': 'jump 2s ease-in-out infinite',
    },
    keyframes: {
      jump: {
        '0%, 100%': { transform: 'translateY(-5%); '},
        '50%':  { transform: 'translateY(0);'},

      }
    } ,
  },
  plugins: [],
}
}
