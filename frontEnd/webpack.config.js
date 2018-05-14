const path = require("path");
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

const API_URL = {
    production: JSON.stringify('http://35.166.152.170/'),
    development: JSON.stringify('http://localhost:8080/')
};

// check environment mode
const environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    entry: ['./src/js/index.tsx'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './build')
    },
    devServer: {
        contentBase: "./src",
        hot: true
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.json', '.css']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [],
                loader: "ts-loader"
            },
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "source-map-loader",
                exclude: [
                    /node_modules/
                ]
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: {
                    loader: 'url-loader'
                },
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({template: 'src/index.html'}),
        new webpack.DefinePlugin({
            'process.env': {
                'API_URL': API_URL[environment]
            }
        })
    ]
};