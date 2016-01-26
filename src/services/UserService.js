
module.exports = {

	init: function(obj, bu) {
		var _this = obj;
		var baseUrl = bu;

		return {

			register: function(email, password) {
				return _this.$http.get(baseUrl + 'user/register/' + email + '/' + password);
			},

			login: function(email, password) {
				return _this.$http.get(baseUrl + 'user/login/' + email + '/' + password);
			},

			logout: function() {
				return _this.$http.get(baseUrl + 'user/logout');
			},

			selectAll: function(page, count) {
				return _this.$http.get(baseUrl + 'user/select/all/' + page + '/' + count);
			},

			getFavouritesList: function(uid, page, count) {
				return _this.$http.get(baseUrl + 'user/favourites/select/' + uid + '/' + page + '/' + count);
			},

			addFavourite: function(uid, tid) {
				return _this.$http.get(baseUrl + 'user/favourites/add/' + uid + '/' + tid);
			},

			removeFavourite: function(uid, tid) {
				return _this.$http.get(baseUrl + 'user/favourites/remove/' + uid + '/' + tid);
			},

			modifyProfile: function(data) {
				return _this.$http.post(baseUrl + 'user/profile/modify', data);
			},

    		countDraft: function(uid) {
    			return _this.$http.get('user/count/draft/' + uid);
    		},

    		countFavourites: function(uid) {
    			return _this.$http.get('user/count/favourites/' + uid);
    		},

    		countDeleted: function(uid) {
    			return _this.$http.get('user/count/deleted/' + uid);
    		},

    		countFo: function(uid) {
    			return _this.$http.get('user/count/fo/' + uid);
    		},

    		getProfile: function(uid) {
    			return _this.$http.get('user/profile/get/' + uid);
    		},

    		getRecomended: function() {
    			return _this.$http.get('user/recommended');
    		},

    		uploadPicture: function(data) {
    			return _this.$http.post('http://image.poimoe.com/upload.php');
    		},

    		loadTimeline: function(page, count) {
    			return _this.$http.get('timeline/' + page + '/' + count);
    		}

		}

	}

};
