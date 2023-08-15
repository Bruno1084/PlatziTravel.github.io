/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
            "./src/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      green: "#8FA206",
      blue: "#61AEC9",
      red: "#CC2D4A",
      white: "#FFFFFF",
      black: "#000000",
    }
  },
  plugins: [],
}

