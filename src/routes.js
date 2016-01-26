module.exports = function(router){
	router.transitionOnLoad = true;
	router.map({
		'/index': {
			component: require('./components/index.vue'),
			subRoutes: {

			}
		},
		'/timeline': {
			component: require('./components/menu2/index.vue')
		},
		'/404': {
			component: {
				component: require('./404.vue')
			}
		}
	});
};
