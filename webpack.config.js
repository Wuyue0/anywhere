const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        index: './src/script/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build/script'),
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "../style/[name].css",
    })],
    module: {
        rules: [
            {
                test: /\.js?$/,
                include: [ path.resolve(__dirname,'src/script')],
                use: 'babel-loader'
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader,"css-loader","less-loader"]
            }
        ]
    }
}