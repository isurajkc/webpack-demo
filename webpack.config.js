const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');


module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        // path: path.join(__dirname, 'src'),
        bundle: "./app/app.js",
    },
    output: {
        path: path.resolve(__dirname, './dist/assets'),
        publicPath: '/assets',
        filename: "bundle.js"
    },
    // devServer: {
    //     contentBase: path.resolve(__dirname, './src'),
    // },
    module: {
        rules: [{
                test: /\/scss$/,
                use: ['css-loader', 'sass-loader']
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
}