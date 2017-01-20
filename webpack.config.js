'use stricts';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
var path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var nodeExternals = require('webpack-node-externals');

var isProduction = process.env.NODE_ENV === 'production';
var productionPluginDefine = isProduction ? [
    new webpack.DefinePlugin({'process.env': {'NODE_ENV': JSON.stringify('production')}})
] : [];

var commonLoaders = [
    {
        test: /\.json$/,
        loader: 'json-loader'
    }
];

module.exports = [{
    entry: './app.js',
    output: {
        path: './',
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        publicPath: '/'
    },
    target: 'node',
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false
    },
    externals: nodeExternals(),
    plugins: productionPluginDefine,
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel'
            }
        ].concat(commonLoaders)
    }
},
    {
        entry: {
            articlesBundle: "./public/js/ReactBundels/articlesBundle.js",
            detailsBundle: "./public/js/ReactBundels/detailsBundle.js"
        },

        output: {
            path: __dirname + "/public/build",
            publicPath: "./public/build/",
            filename: "[name].js",
            library: "[name]"       // option to access the exported variables if you want to call the exported functions later (home.welcome();)
        },

        watch: NODE_ENV == 'development', //Configuring for pending the changes and automatic rebuild after each save files

        watchOptions: {
            aggregateTimeout: 100   // Delay the rebuild after the first change. Value is time in ms.
        },

        devtool: NODE_ENV == 'development' ? "source-map" : null, // to ensure that debugger have the source file of the module

        resolve: {
            modulesDirectories: ['node_modules'],
            extensions: ['', '.js']
        },

        resolveLoader: {
            //root: __dirname + "/node_modules",
            modulesDirectories: ['node_modules'],
            moduleTemplates: ['*-loader', '*'],
            extensions: ['', '.js']
        },

        module: {
            loaders: [{
                test: /\.js$/,
                loader: 'babel-loader'
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader", "resolve-url")  // plugin that allows you to generate css in a separate file
                //loader: 'style-loader!css-loader'   // css include in js file
            }, {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                loader: 'url?name=[path][name].[ext]&limit=4096' // return data url (for image it is base64 string)
            }, {
                test: /\.json$/,
                loader: __dirname + "/js/customLoader/customLoader!json-loader"
            }]
        },

        plugins: [
            new ExtractTextPlugin("[name].css"),

            new webpack.NoErrorsPlugin(),     // If there is an error during Assembly, the files do not generate

            new webpack.DefinePlugin({
               NODE_ENV: JSON.stringify(NODE_ENV)    // for the transfer of those keys environment that you want to make available to the client
            }),

             //new webpack.optimize.UglifyJsPlugin({ // for minify
             //    compress: {
             //        warnings: false
             //    }
             //}),

            // new webpack.optimize.CommonsChunkPlugin({ // total allocated chunk of all files, if there are several assembly points
            //     name: "common"
            // })
        ],

        devServer: {
            host: 'localhost',
            port: 8080
        }
    }];
