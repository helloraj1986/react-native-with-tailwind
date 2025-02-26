/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        rubik:["Rubik-Regular", "sans-sarif"],
        "rubik-bold":["Rubik-Bold", "sans-sarif"],
        "rubik-semibold":["Rubik-SemiBold", "sans-sarif"],
        "rubik-extrabold":["Rubik-ExtraBold", "sans-sarif"],
        "rubik-medium":["Rubik-Medium", "sans-sarif"],
        "rubik-light":["Rubik-Light", "sans-sarif"],
      }
    },
    "colors":{
      "primary":{
        100: "#0061ff0a",
        200: "#0061ff1a",
        300: "#0061ff2a"
      },
      "accent":{
        100: "#fbfbfd"
      },
      "black":{
        DEFAULT: "#000000",
        100: "#8c8e98",
        200: "#666876",
        300: "#191d31"
      },
      "danger": "#f75555"
    }
  },
  plugins: [],
}