module.exports = {
  cssModules: true,
  publicRuntimeConfig: {
    staticFolder: '/public',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.worker\.(js|ts)$/i,
      loader: 'worker-loader',
      options: {
        inline: true,
        name: 'static/[hash].worker.js',
        publicPath: '/_next/',
      },
    });
    config.output.globalObject = `(typeof self !== 'undefined' ? self : this)`;
    return config;
  },
}