# vue-seeds

## download

``` shell
git clone git@github.com:leinue/vue-feeds.git
```
## run

使用8080端口，注意8080端口别被占用

``` shell
npm install
npm run dev
```
or

``` shell
npm install
webpack
```
or
``` shell
npm install
webpack-dev-server
```
## error

如果出现类似以下错误

``` shell

npm ERR! peerinvalid The package babel-runtime@6.3.19 does not satisfy its siblings' peerDependencies requirements!
npm ERR! peerinvalid Peer vue-loader@7.5.3 wants babel-runtime@^5.8.0

```

打开package.json文件，修改babel-runtime版本号为^5.8.0即可

``` shell
vim package.json
/babel-runtime
```

## view

![index][1]
![menu2][2]


  [1]: http://i67.tinypic.com/20kdl6p.png
  [2]: http://i64.tinypic.com/zajwz.png

## package.json

``` javascript
{
  "name": "poimoe_poi",
  "version": "0.0.1",
  "description": "", 
  "main": "index.js",
  "scripts": {
    "dev": "webpack-dev-server --inline --hot --quiet",
    "build": "export NODE_ENV=production && webpack --progress --hide-modules"
  },  
  "private": true,
  "author": "", 
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.2.1",
    "babel-loader": "^6.2.0",
    "babel-plugin-transform-runtime": "^6.1.18",
    "babel-preset-es2015": "^6.1.18",
    "babel-preset-stage-0": "^6.3.13",
    "babel-runtime": "^5.8.0",
    "bootstrap": "^3.3.6",
    "css-loader": "^0.23.0",
    "file-loader": "^0.8.5",
    "jsx-loader": "^0.13.2",
    "style-loader": "^0.13.0",
    "url-loader": "^0.5.7",
    "vue": "^1.0.10",
    "vue-hot-reload-api": "^1.2.2",
    "vue-html-loader": "^1.0.0",
    "vue-loader": "^7.1.7",
    "vue-resource": "^0.5.1",
    "vue-router": "^0.7.7",
    "vue-strap": "^1.0.2",
    "webpack": "^1.12.9",
    "webpack-dev-server": "^1.14.0"
  }
}
```
## webpack.config.js

``` javascript
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

```

## file tree

``` javascript
.
├── README.md
├── index.html
├── node_modules
│   ├── babel-core
│   ├── babel-loader
│   ├── babel-plugin-transform-runtime
│   ├── babel-preset-es2015
│   ├── babel-preset-stage-0
│   ├── babel-runtime
│   ├── bootstrap
│   ├── css-loader
│   ├── file-loader
│   ├── jsx-loader
│   ├── style-loader
│   ├── url-loader
│   ├── vue
│   ├── vue-hot-reload-api
│   ├── vue-html-loader
│   ├── vue-loader
│   ├── vue-resource
│   ├── vue-router
│   ├── vue-strap
│   ├── webpack
│   └── webpack-dev-server
├── npm-debug.log
├── package.json
├── src
│   ├── 404.vue
│   ├── app.vue
│   ├── commons
│   ├── components
│   ├── config.js
│   ├── filters
│   ├── index.js
│   ├── npm-debug.log
│   ├── routes.js
│   └── services
└── webpack.config.js
```
