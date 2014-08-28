module.exports = {
  module: {
    preLoaders: [{
      test: '\\.js$',
      exclude: 'node_modules',
      loader: 'jshint'
    }],

    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.gif$/,
      loader: 'url-loader?limit=10000&mimetype=image/gif'
    }, {
      test: /\.jpg$/,
      loader: 'url-loader?limit=10000&mimetype=image/jpg'
    }, {
      test: /\.png$/,
      loader: 'url-loader?limit=10000&mimetype=image/png'
    }, {
      test: /\.jsx$/,
      loader: 'jsx-loader'
    },
    { test: /\.woff$/,   loader: "url-loader?limit=10000&minetype=application/font-woff" },
    { test: /\.ttf$/,    loader: "file-loader" },
    { test: /\.eot$/,    loader: "file-loader" },
    { test: /\.svg$/,    loader: "file-loader" }]
  },

  resolve: {
    alias: {
      'rx': 'rx/dist/rx.lite'
    },
    root: __dirname + '/src',
    modulesDirectories: ['scripts', 'styles', 'node_modules']
  },

  entry: './src/scripts/components/<%= pkg.mainInput %>.jsx'
};
