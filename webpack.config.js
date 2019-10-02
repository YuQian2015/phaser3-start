const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        hot: true,
        open: true,
        contentBase: path.join(__dirname, "src")
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'phaser3-start',
        template: 'index.html'
      })]
};