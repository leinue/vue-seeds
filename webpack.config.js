module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './dist/build.js'
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff2" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    },
    babel: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
    },
    resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.css'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            'vue-strap': './node_modules/vue-strap/dist/vue-strap.min.js'
        }
    }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [ 
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }   
    }), 
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }   
    }), 
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devtool = '#source-map'
}
