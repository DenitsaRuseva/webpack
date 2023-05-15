const common = require('./webpack.common.config');
const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');
const glob = require('glob');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');




module.exports = merge(common, {
    mode: 'production',
    // devtool: 'source-map',
    output: {
        filename: 'js/[name].[contenthash:12].js'
    },
    optimization: {
        minimize: true,
        minimizer: [
            `...`, //keep default js mimimizer
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: { removeAll: true },
                        },
                    ],
                },
            }),
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        // Lossless optimization with custom option
                        // Feel free to experiment with options for better result for you
                        plugins: [
                            ['imagemin-mozjpeg', { quality: 40 }],
                            ['imagemin-pngquant', {
                                quality: [0.65, 0.90],
                                speed: 4
                            }],
                            ['imagemin-gifsicle', { interlaced: true }],
                            [
                                'imagemin-svgo',
                                {
                                    plugins: [
                                        {
                                            name: 'preset-default',
                                            params: {
                                                overrides: {
                                                    removeViewBox: false,
                                                    addAttributesToSVGElement: {
                                                        params: {
                                                            attributes: [
                                                                { xmlns: 'http://www.w3.org/2000/svg' },
                                                            ],
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    ],
                                },
                            ],
                        ],
                    },
                },
                generator: [
                    {
                        type: 'asset',
                        preset: 'webp-custom-name',
                        implementation: ImageMinimizerPlugin.imageminGenerate,
                        options: {
                            plugins: ['imagemin-webp'],
                        },
                    },
                ]
            }),
        ],
        splitChunks: {
            // cacheGroups: {
            //     jquery: {
            //         test: /[\\/]node_modules[\\/]jquery[\\/]/,
            //         chunks: 'initial',
            //         name: 'jquery',
            //     },
            //     bootstrap: {
            //         test: /[\\/]node_modules[\\/]bootstrap[\\/]/,
            //         chunks: 'initial',
            //         name: 'bootstrap',
            //     },
            // },
            // chunks: 'all',
            // maxSize: 140000,
            // minSize: 50000,
            // name(module, chunks, cacheGroupKey) {
            //     const filePath = module.identifier();
            //     const fileName = path.basename(filePath);
            //    return fileName
            // }
        
                // chunks: 'all',
                // maxSize: Infinity,
                // minSize: 0,
                // cacheGroups: {
                //     node_modules: {
                //         test: /[\\/]node_modules[\\/]/,
                //         name: 'node_modules',
                //     },
                // }
            
                // chunks: 'all',
                // maxSize: Infinity,
                // minSize: 0,
                // cacheGroups: {
                //     node_modules: {
                //         test: /[\\/]node_modules[\\/]/,
                //         name(module) {
                //             const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                //             return packageName;
                //         },
                //     },
                // }


                // chunks: 'all',
                // maxSize: Infinity,
                // minSize: 2000,
                // cacheGroups: {
                //     jquery: {
                //         test: /[\\/]node_modules[\\/]jquery[\\/]/,
                //         name: 'jquery',
                //     },
                //     bootstrap: {
                //         test: /[\\/]node_modules[\\/]bootstrap[\\/]/,
                //         name: 'bootstrap',
                //     },
                //     lodash: {
                //         test: /[\\/]node_modules[\\/]lodash-es[\\/]/,
                //         name: 'lodash-es',
                //     },
                //     node_modules: {
                //         test: /[\\/]node_modules[\\/]/,
                //         name: 'node_modules',
                //     },
                // }


               
                    chunks: 'all',
                    maxSize: Infinity,
                    minSize: 2000,
                    cacheGroups: {
                        jquery: {
                            test: /[\\/]node_modules[\\/]jquery[\\/]/,
                            name: 'jquery',
                        },
                        lodash: {
                            test: /[\\/]node_modules[\\/]lodash-es[\\/]/,
                            name: 'lodash-es',
                        },
                        node_modules: {
                            test: /[\\/]node_modules[\\/]/,
                            name: 'node_modules',
                            chunks: 'initial',
                        },
                        async: {
                            test: /[\\/]node_modules[\\/]/,
                            chunks: 'async',
                            name(module, chunks) {
                                return chunks.map(chunk => chunk.name).join('-');
                            },
                        }
                    }
           
        }
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                exclude:  /\.module\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.css$/,
                include:  /\.module\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            // modules: true
                            modules: {
                                localIdentName: '[hash:base64]'
                            }
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'less-loader' ],
            },
            {
                test: /\.scss$/,
                use: [ 
                    MiniCssExtractPlugin.loader,
                     'css-loader',
                     'postcss-loader',
                      'sass-loader'
                     ]
            },
            {
                test: /\.(png|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 10 kb
                    }
                },
                generator: {
                    filename: './images/[name].[contenthash:12][ext]'
                },
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                quality: 40,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:12].css'
        }),
        new PurgeCSSPlugin({
            paths: glob.sync(`${path.join(__dirname, '../src')}/**/*`,  { nodir: true }),
        })
    ]
})