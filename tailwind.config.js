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
        scanline: ['"x12y20pxScanLine", monospace'],
        hud: ['"x14y24pxHeadUpDaisy", monospace'],
      },
    },
  },
  plugins: [],
};
