/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: "class",
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
      keyframes: {
        landing: {
          "0%": { opacity: 0, transform: 'scale(0.97)' },
          "55%": { opacity: 0.65 },
          "85%": { opacity: 0.9 },
          "100%": { opacity: 1, transform: 'scale(1)' },
        },
      },
      animation: {
        landing: "landing 0.5s linear",
      },
    },
  },
  plugins: [],
};
