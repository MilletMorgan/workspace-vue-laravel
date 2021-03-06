const path = require("path")

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  },

  outputDir: path.resolve(__dirname, "../symfony/public"),
  assetsDir: "./dist",
  indexPath: path.resolve(__dirname, '../symfony/templates/index.html')
}
