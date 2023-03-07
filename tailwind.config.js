/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0AA7BD',
        'primary-one': '#09A7BC',
        'primary-two': '#2EC0EE',
        'bg-gray': '#F4F4F4',
        'text-gray': '#4B4B4B',
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      borderRadius: {
        main: '10px',
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};
