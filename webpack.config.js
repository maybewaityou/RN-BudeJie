var path = require('path');
var webpack = require('webpack');

var env = process.env.NODE_ENV;

var config = {
    entry: './app/index.js',
    output: {
        publicPath: '/dist/',
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
            __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
        })
    ],
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'react-hot!babel' },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.scss$/, loader: 'style!css!sass'}
        ]
    }
};

if (env === 'production') {
    var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    });
    var occurenceOrderPlugin = new webpack.optimize.OccurenceOrderPlugin();
    config.plugins.push(uglifyJsPlugin);
    config.plugins.push(occurenceOrderPlugin);
}

module.exports = config;
