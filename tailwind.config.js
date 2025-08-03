// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        javanese: ['"Noto Sans Javanese"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
