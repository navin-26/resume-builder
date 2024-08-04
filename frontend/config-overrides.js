const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    url: require.resolve('url'),
    path: require.resolve('path-browserify'),
    stream: require.resolve('stream-browserify'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    assert: require.resolve('assert'),
    util: require.resolve('util'),
    os: require.resolve('os-browserify'),
    zlib: require.resolve('browserify-zlib'),
    buffer: require.resolve('buffer'),
    fs: false,
    child_process: false,
  };

  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    })
  );

  return config;
};
