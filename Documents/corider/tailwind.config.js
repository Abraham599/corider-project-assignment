/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        mulish: {
          400: '400',
          500: '500',
          600: '600',
          700: '700',
        },
        inter: {
          600: '600',
        },
      },
    },
  },
  plugins: [],
}