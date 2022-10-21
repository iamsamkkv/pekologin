module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1024px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        gray_400: "#bcbaba",
        black_900: "#000000",
        black_901: "#090909",
        gray_900: "#252525",
        white_A700: "#ffffff",
        gray_100: "#f5f5f5",
      },
      borderRadius: { radius9: "9px", radius23: "23px", radius285: "28.5px" },
      fontFamily: {
        inter: "Inter",
        itcavantgardegothicstd: "ITC Avant Garde Gothic Std",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
