/* eslint-disable */

var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: [
        "babel-polyfill",
        "./presentation/run"
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {test: /\.md$/, loader: "html-loader!markdown-loader?gfm=false"},
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel",
                include: path.join(__dirname, 'presentation')
            },
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.(png|jpg|gif)$/, loader: "url-loader?limit=8192"},
            {test: /\.svg$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ]
};
