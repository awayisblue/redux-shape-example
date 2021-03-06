const webpack = require('webpack');
const path = require('path');
const fs = require('fs')
const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');
// const babelSettings = JSON.parse(fs.readFileSync(".babelrc"))
let config = {
  entry: {
    main:['babel-polyfill',APP_DIR + '/index.jsx'],
  },
  devtool:'source-map',
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js',
  },
  module : {
    rules:[
      {
         test : /\.jsx?$/,
         include : APP_DIR,
         use:[
           {
             loader:'babel-loader',
           },

         ]
      },
      {
        test: /\.less$/,
        use:[
           {
            loader:'style-loader',
           },
          {
            loader:'css-loader',
            options:{
              modules:true,
              importLoaders:1,
              localIdentName:'[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader:'postcss-loader',
          },
          {
            loader:'less-loader',
          }
        ]
      }
    ]
  },
  plugins:[
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap:true,
      parallel: {
        cache: true,
        workers: 4 
      },
      uglifyOptions:{
        compress:{
          warnings: false,
          drop_console: true
        }
      }
    }),


  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
}


module.exports = config;