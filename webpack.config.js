const webpack = require('webpack');
const path = require('path');
const fs = require('fs')
const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');
// const babelSettings = JSON.parse(fs.readFileSync(".babelrc"))
let config = {
  entry: ['babel-polyfill',APP_DIR + '/index.jsx'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module : {
    loaders : [
      {
        test : /\.jsx?$/,
        include : APP_DIR,
        loader : 'babel'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader?modules=true&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!less-loader'
      }
    ],

  },
  plugins:[
    new webpack.EnvironmentPlugin(['NODE_ENV']),


  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
    devServer:{
    }
};
if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({

            // Eliminate comments
            comments: false,

            // Compression specific options
            compress: {
                // remove warnings
                warnings: false,

                // Drop console statements
                drop_console: true
            },
        })
    )


} else {

}

module.exports = config;