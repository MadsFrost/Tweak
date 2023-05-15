/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      typography: {
      DEFAULT: { // Prose changes
        css: {
          marginLeft: '30px',
          color: "inherit",
          "*": {
            color: "inherit"
          },
          h1: {
            paddingBottom: '5px',
            marginLeft: '-5px',
            height: '0px'
          },
          h2: {
            height: '0px',
            paddingBottom: '15px'
          },
          li: {
            paddingBottom: '5px',
            height: '0px'
          }
        },
      },
    },
    },
  },
  darkMode: "media",
  important: "html",
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

