const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    fontFamily: {
      mono: ["'Roboto Mono'", ...defaultTheme.fontFamily.mono],
    },
  },
};
