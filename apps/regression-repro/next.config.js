// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack: (config, options) => {
    const copyAppleDeeplinkFile = new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'src/test.txt'),
          to: '../public/',
          transform(content) {
            // a contrived example of transforming and copying the content.
            return content.toString().trim() + ' repro';
          },
        },
      ],
    });
    config.plugins.push(copyAppleDeeplinkFile);
    return config;
  },
};

module.exports = withNx(nextConfig);
