var webpack = require('webpack'),
    isProduction = process.env.NODE_ENV === 'production',
    path = require("path"),
    config = require('./gulp_tasks/utils/config.js');

module.exports = {
  debug: true,
  devtool: '#source-map',
  entry: {
    app: config.src.file.app
  },
  output: {
    path: path.join(__dirname, config.distRoot),
    publicPath: config.distRoot,
    filename: config.dist.file.bundle,
    chunkFilename: '[chunkhash].js'
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: "source-map" }
    ],
    loaders: [
      { test: /\.json$/, loader: 'json' }
    ]
  },
  resolve: {
    modulesDirectories: ['app/scripts', 'node_modules', 'bower_modules'],
    // packageAlias: false,
    alias: {
      jquery: 'jquery/dist/jquery.min',
      lodash: 'lodash/dist/lodash.min',
      rAF: 'vendor/rAF',
      // moment: 'moment/min/moment.min'
      countdown: 'vendor/countdown.min',
      momentCountdown: 'moment-countdown/bin/moment-countdown.min'
    }
  },
  externals: [
  ],
  plugins: [
    // new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-gb/),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DefinePlugin({
      PRODUCTION: !!isProduction
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.optimize.DedupePlugin()

  ]
};
