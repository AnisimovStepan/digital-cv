const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  };
module.exports = {
    entry: './src/js/init.js',
    mode: 'production',

    plugins: [
        new HtmlWebpackPlugin({
            title: 'digital-cv',
            template: './src/index.html'
        }),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
