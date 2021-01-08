const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/SearchApp.jsx',
    output: {
        path: path.resolve(__dirname, './static/searchapp'), //output our build to static relative path
        filename: "[name].js",

    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,    // dont include node_modules for bundling
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    optimization: {
        minimize: true, // minimize the js bundle
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                NODE_ENV: JSON.stringify("production"),
            },
        }),
    ],
}