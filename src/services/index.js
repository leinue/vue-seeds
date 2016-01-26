var UserService = require('./UserService.js');

var model = {
	instance: undefined,
	baseUrl: 'http://localhost'
};

module.exports = {

	init: function(obj) {
		model.instance = obj;
		
		return {
			UserService: UserService.init(model.instance, model.baseUrl)
		}
	}

};
