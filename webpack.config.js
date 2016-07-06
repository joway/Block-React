var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV || 'dev';
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');

var appName = 'app';
var host = '0.0.0.0';
var port = '9000';

var plugins = [], outputFile;

if (env === 'build') {
    plugins.push(new UglifyJsPlugin({minimize: true}));
    outputFile = appName + '.min.js';
} else {
    outputFile = appName + '.js';
}
plugins.push(new webpack.HotModuleReplacementPlugin());

var config = {
    entry: [
        "webpack-dev-server/client?http://0.0.0.0:9000",
        "webpack/hot/only-dev-server",
        './src/index.js'],
    devtool: 'source-map',
    output: {
        path: __dirname + '/build/js/',
        filename: outputFile,
        publicPath: 'http://localhost:9000/'
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
            },
            {
                test: /(\.jsx|\.js)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js', '.jsx']
    },
    plugins: plugins
};

if (env === 'dev') {
    new WebpackDevServer(webpack(config), {
        contentBase: './build',
        hot: true,
        debug: true
    }).listen(port, host, function (err, result) {
        if (err) {
            console.log(err);
        }
    });
    console.log('-------------------------');
    console.log('Local web server runs at http://' + host + ':' + port);
    console.log('-------------------------');
}

module.exports = config;
