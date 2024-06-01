/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'black': '#606470'
      },
      container: {
        center: true,
        padding: "20px"
      }
    }
  },
  plugins: []
};