const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Basis Grotesque Pro"', 'Arial', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}