/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors :{
        header: "#F5F5F5",
        sidebar: "#434343",
        sidebarBorder: "#D9D9D9",
        hoverSidebarBorder: "#373C38",
        table:"#3c6690",
        blue: "#0071BC"
      }
    },
    fontFamily: {
      NotoSansJP: ["Noto Sans JP", "sans-serif"],
    },
  },
  plugins: [],
}
