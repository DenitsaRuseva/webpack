const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin } =require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


const config = {
    output: {
        path: path.resolve(__dirname, '../dist'),
        // clean: true,
        // clean: {
        //     dry: true,
        //     keep: /\.css/
        // }
        // filename: 'js/[name].[contenthash:12].js'
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/template.html'
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({ 
            patterns: [{
                from: 'images/motivational-pictures/*.*',
            }]
         })
    ]
}

module.exports = config;