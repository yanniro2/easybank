/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "Mobile": { "min": "320px", "max": "480px" },
      "Tablet": { "min": "480px", "max": "768px" },
      "default": { "min": "768px", "max": "1024px" },
      "Desktop": { "min": "1024px", "max": "1440px" },
      "large": "1440px",
    },
    fontFamily: {
      Public: ["Public Sans", "sans-serif"],
    },
    fontWeight: {
      s: 300,
      m: 400,
      l: 700,
    },
    fontSize: { "normal": "18px" },
    colors: {
      // ### Primary

      'Dark-Blue': 'hsl(233, 26%, 24%)',
      'Lime-Green': 'hsl(136, 65%, 51%)',
      'Bright-Cyan': 'hsl(192, 70%, 51%)',

      // ### Neutral

      'Grayish-Blue': 'hsl(233, 8%, 62%)',
      'Light-Grayish-Blue': 'hsl(220, 16%, 96%)',
      'Very-Light-Gray': 'hsl(0, 0%, 98%)',
      'White': 'hsl(0, 0%, 100%)',
    }
  },
  extend: {

  },
  plugins: [],
}
