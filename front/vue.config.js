const path = require("path");

module.exports = {
    devServer: { proxy: 'http://localhost:8000' },

    outputDir: path.resolve(__dirname, "../back/public/dist"),
    publicPath: '/dist',
    indexPath: path.resolve(__dirname, '../back/resources/views/index.html')
}