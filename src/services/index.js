var UserService = require('./UserService.js');

var model = {
	instance: undefined,
	baseUrl: 'http://localhost:8080'
};

module.exports = {

	init: function(obj) {
		model.instance = obj;
		
		return {
			UserService: UserService.init(model.instance, model.baseUrl)
		}
	}

};
