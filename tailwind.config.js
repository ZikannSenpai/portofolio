module.exports = {
  content: ["./public/**/*.html","./public/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', "monospace"],
        display: ['"Space Grotesk"', "sans-serif"]
      },
      colors:{
        accent:"#0ea5ff"
      }
    }
  },
  plugins: []
}
