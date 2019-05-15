const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output: {
        path:path.resolve('public'),
        filename: 'bundle.js'
    },

    module:{
        rules:[
            {test: /\.js$/ , loader:'babel-loader', exclude: '/node_modules/'},
            {test: /\.jsx$/ , loader:'babel-loader', exclude: '/node_modules/'}
        ]


    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    devServer: {
        contentBase: "./public"
    }

};