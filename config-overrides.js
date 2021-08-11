 const webpack = require("webpack");
 const { addDecoratorsLegacy } = require('customize-cra');

 console.log( new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 1,
            }));
 module.exports = function override(config, env) {
    config.output = {
        ...config.output, // copy all settings
        filename: "static/js/[name].js",
        chunkFilename: "static/js/[name].chunk.js"
    };
    config.optimization = {
        splitChunks: {
            // chunks: 'all',
            // name: false,
            cacheGroups: {
                default: false
            }
        },
        runtimeChunk: false,
    }
    addDecoratorsLegacy();
    return config;
};