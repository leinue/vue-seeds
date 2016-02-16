var vue = require('vue');
var vueRouter = require('vue-router');
var configRouter = require('./routes.js');
var filter = require('./filters/index.js');
var vueStrap = require('../node_modules/vue-strap/dist/vue-strap.min.js');
var config = require('./config.js');
var services = require('./services/index.js');

if(document.domain === 'localhost') {
	window.debug = true;
}else {
	document.domain = 'yourdomain.com';
	window.debug = false;
}

//初始化用户登录状态
// localStorage.login = typeof localStorage.login == 'undefined' ? 'false' : localStorage.login;
// localStorage.userData = typeof localStorage.userData == 'undefined' ? '' : localStorage.userData;
// localStorage.accessToken = typeof localStorage.accessToken == 'undefined' ? '' : localStorage.accessToken;

//初始化XMLHttpRequest RestfulAPI
vue.use(require('vue-resource'));
vue.http.options.root = 'http://api.poimoe.com/';
vue.http.headers['x-poimoe'] = 'moha';
if(localStorage.login == 'true') {
	vue.http.headers.common['Authorization'] = 'Basic ' + localStorage.accessToken;	
}

//初始化全局css
require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('./commons/styles/app.css');//公用定制css

var appEntry = require('./app.vue');

//初始化过滤器
filter.init(vue);

var entry = document.getElementById('main');
var selector = config.entry.split('');
if(selector[0] !== '#' && selector[0] !== '.') {
	throw '缺少程序入口css选择器，请使用Class选择器（.）或ID选择器（＃），并在index.html中指明ID或Class';
}

var entryId = config.entry.replace('#', '');
var entryId = entryId.replace('.', '');
entry.setAttribute('id', entryId);

//注册bootstrap部件到vue中
for(var key in vueStrap){
	var current = vueStrap[key];
	if(key === 'select' || key === 'option') {
		//带-的标签自动转换为骆驼书写方式
		key = key.replace(/(\w)/,function(v){return v.toUpperCase()});
		key = 'v' + key;
	}
	key = key === 'tabset' ? 'tabs' : key;//如果是tabset，则我们给它的标签名是tabs
	key = key === 'aside' ? 'sidebar' : key; //如果是aisde，则我们给它的标签名是sidebar
	vue.component(key, current);
}

//初始化应用程序路由
vue.use(vueRouter);

var router = new vueRouter({});
configRouter(router);

window.router = router;
window.vueStrap = vueStrap;

var app = vue.extend(appEntry);

router.start(app, config.entry);

new vue({
	el: '#app-title',

	data: {
		title: config.title
	},

	ready: function() {
		var store = services.init(this);
	 	window.services = store;
	}
});

window.Vue = vue;

//每次路由之前请求该方法
router.beforeEach(function () {
	console.log('before each');

	var prevPath = router._currentRoute.path;

});

router.afterEach(function() {
	var currentPath = router._currentRoute.path;
});

//默认路由至404
router.redirect({
  '*': '/index'
});
