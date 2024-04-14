/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        mona75: [
          '"Mona", sans-serif',
          {
            fontVariationSettings: '"wdth" 75',
          },
        ],
        mona: [
          '"Mona", sans-serif',
          {
            fontVariationSettings: '"wdth" 100',
          },
        ],
        mona125: [
          '"Mona", sans-serif',
          {
            fontVariationSettings: '"wdth" 125',
          },
        ],
      },
    },
  },
  plugins: [],
};
