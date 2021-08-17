module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,js}"],
  darkMode: false, // or "media" or "class"
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#ffb938",
          dark: "#241700",
          DEFAULT: "#fba300"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
