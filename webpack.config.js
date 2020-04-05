const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWepbackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
console.log(isDev)
const isProd = !isDev

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWepbackPlugin()
        ]
    }

    return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`


const plugins = () => {
    const config = [new HtmlWebpackPlugin({
        template: './template.html',
        minify: {
            collapseWhitespace: isProd //или просто пишем true
        }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
        {
            from: path.resolve(__dirname, 'src/img/favicon/favicon.ico'),
            to: path.resolve(__dirname, 'dist')
        }
    ]),
    new MiniCssExtractPlugin({
        filename: filename('.css') 
    })]

    return config
}

const babelLoader = () => {

    const loader = [{  
        loader: "babel-loader",
        options: {
            presets: [
                '@babel/preset-env'
            ],
            plugins: [
                '@babel/plugin-proposal-class-properties'
            ]
        }
    }]

    if (isDev) {
        loader.push({loader: 'eslint-loader'})
    }

    return loader
}


module.exports = {
    context: path.resolve(__dirname, 'src'),// корневая папка для сборки
    mode: 'development',
    entry: {
        // main: ['@babel/polyfill', './index.js'], //Точка входа
        bundle: './js/index.js'
    },
    output: { //выход
        filename: filename('.bundle.js'), //Добавляем [name] чтобы перед бандлами прописывалось имя
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js','.json', '.png'], //расширения по умолчанию т.е. его можно не писать при импортах
        alias: {
            '@models' : path.resolve(__dirname, 'src/models'),
            '@': path.resolve(__dirname, 'src')
        }
    },
    devServer: {
      port: 4200,
      hot: isDev
    },
    plugins: plugins(),
    optimization: optimization(),
    devtool: isDev ? 'source-map' : '',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: isDev, //позволяет изменять стили без перезагрузки страниц
                        reloadAll: true
                    }
                },
                'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: isDev, //позволяет изменять стили без перезагрузки страниц
                        reloadAll: true
                    }
                },
                'css-loader',
                'less-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: isDev, //позволяет изменять стили без перезагрузки страниц
                        reloadAll: true
                    }
                },
                'css-loader',
                'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|gif|ico|php)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash].[ext]',
                    esModule: false
                }
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/,
                use: babelLoader()
            },
            { 
                test: /\.ts$/, 
                exclude: /node_modules/, 
                loader: "babel-loader",
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-typescript'
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                    ]
                } 
            }
        ]
    }

}  