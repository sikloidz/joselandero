const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      mono: ["'Roboto Mono'", ...defaultTheme.fontFamily.mono],
    },
  },
};
