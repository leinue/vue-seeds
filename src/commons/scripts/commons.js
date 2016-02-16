var vue = require('vue');

window.loadEnd = function(cb) {

	var loadInterval = setInterval(function() {

		if(typeof window.router != 'undefined') {
			clearInterval(loadInterval);
			cb;
		}

	}, 1);

};

module.exports = {

	registerComponent: function(obj) {
		var myComponent = vue.extend({
			template: obj.template
		});

		vue.component(obj.name, myComponent);
	},

	getElementsByClassName: function(className) {
		var all = document.all ? document.all : document.getElementsByTagName( ' *' );
    	var elements = new Array();
    	for ( var e = 0; e < all.length; e ++ ) {
      		if (all[e].className == className) {
        		elements[elements.length] = all[e];
        		break ;
      		}
    	}
    	return elements;
    },

    cancelActiveMenu: function() {
		var poiHeader = document.getElementById('poi-header');
		var ul = poiHeader.childNodes;
		var lis = ul.item(1).getElementsByTagName('li');

		for (var i = 0; i < lis.length; i++) {
			var li = lis[i];
			var route = li.getAttribute('route');
			var span = li.childNodes.item(0);

			span.setAttribute('class', '');
		};
    },

    tologin: function() {
    	router.go('/login');
    	localStorage.logPrev = router.path;
    },

    toRegister: function() {
    	router.go('/register');
    	localStorage.logPrev = router.path; 
    },

    resetNavSearchSize: function() {
        var indexSearchNav = document.getElementById('index-nav-search');

        if(indexSearchNav != null) {
            var indexSearchInput = document.getElementById('index-search-input');

            var isiWidth = indexSearchInput.clientWidth + 1;
            indexSearchNav.setAttribute('style', 'width: ' + isiWidth + 'px');
        }
    },

	emailCheck: function(val) {
		var pattern = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
		if (!pattern.test(val)) {
			return false;
		}
		return true;
	},

	messageBox: function(message, danger) {
		var boxId = danger ? 'alert-danger' : 'alert-success';
		var tipsId = danger ? 'danger-tips' : 'success-tips';

		var alertSuccess = document.getElementById(boxId);
		var cls = alertSuccess.getAttribute('class');
		var cls = cls.split(' ');
		var i = cls.indexOf('displaynone');
		cls.splice(i, 1);
		cls.push('fade-enter');
		var cls = cls.join(' ');
		alertSuccess.setAttribute('class', cls);
		var tips = document.getElementById(tipsId);
		tips.innerHTML = message;
	},
	
	confirm: function(content) {
		return confirm(content);
	},

	handleError: function(err) {
		this.messageBox('Error status: ' + err.status + '\r\nError text: ' + err.statusText + '\r\nError data:\r\n' + JSON.stringify(err.data));
	},

	session: function(key, val) {

		if(key == null) {
			return false;
		}

		localStorage[key] = val;
		return localStorage[key];

	},

	pathToSearch: function(name) {
		this.cancelActiveMenu();
        var route = {
            name: 'search-key',
            params: {
                keywords: name
            }
        };
        router.replace(route);
	},

	toPageTop: function() {
		document.documentElement.scrollTop = 0;
	},
	
	//图片上传预览,IE使用了滤镜
    previewImage: function(fileid, outer, inner, class_, style_) {

    	var _this = this;

    	var file = document.getElementById(fileid);
      	var MAXWIDTH  = 260; 
      	var MAXHEIGHT = 180;
      	var div = document.getElementById(outer);
      	if(file.files && file.files[0]) {
          	div.innerHTML ='<img style="' + style_ + '" id="' + inner + '" class="' + class_ + '">';
          	var img = document.getElementById(inner);
          	img.onload = function(){
	            var rect = _this.clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
	            img.width  =  rect.width;
	            img.height =  rect.height;
	            // img.style.marginTop = rect.top + 'px';
          	}
      		var reader = new FileReader();
      		reader.onload = function(evt){img.src = evt.target.result;}
      		reader.readAsDataURL(file.files[0]);
      		return img;
      }else {
        var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
        file.select();
        var src = document.selection.createRange().text;
      	div.innerHTML ='<img style="' + style_ + '" id="' + inner + '" class="' + class_ + '">';
	    var img = document.getElementById(inner);
        img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
        var rect = _this.clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
        status =('rect:'+rect.top+','+rect.left+','+rect.width+','+rect.height);
        div.innerHTML = "<div id='divhead' style='width:"+rect.width+"px;height:"+rect.height+"px;margin-top:"+rect.top+"px;"+sFilter+src+"\"'></div>";
        return div.innerHTML;
      }
    },

	clacImgZoomParam: function(maxWidth, maxHeight, width, height){
	    var param = {top:0, left:0, width:width, height:height};
	    if( width>maxWidth || height>maxHeight )
	    {
	        rateWidth = width / maxWidth;
	        rateHeight = height / maxHeight;
	         
	        if( rateWidth > rateHeight )
	        {
	            param.width =  maxWidth;
	            param.height = Math.round(height / rateWidth);
	        }else
	        {
	            param.width = Math.round(width / rateHeight);
	            param.height = maxHeight;
	        }
	    }
	     
	    param.left = Math.round((maxWidth - param.width) / 2);
	    param.top = Math.round((maxHeight - param.height) / 2);
	    return param;
	},

	syncUploadPic: function(submitBtnId, ifrId, cb) {
		document.getElementById(submitBtnId).click();

		var _this = this;

        var getJSON = function() {
        	var picJSON = JSON.parse(localStorage.pictureUploadedJSON);

        	if(picJSON.status != 200) {
        		_this.messageBox('上传失败，请重试');
        		return false;
        	}

        	cb(picJSON);
        };

        var oFrm = document.getElementById(ifrId);

		oFrm.onload = oFrm.onreadystatechange = function() {
		     if (this.readyState && this.readyState != 'complete') {
		     	return false;
		     }
		     else {
		         getJSON();
		     }
		}
	},

	turnoffEventSource: function(backend) {
		backend = backend || false;

		var _this = this;

		services.TimelineService.turnOffES().then(function(res) {

			var code = res.data.code;
			var data = res.data.message;

			if(code != 200) {
				if(!backend) {
					_this.messageBox(data);					
				}
				return false;
			}

			if(!backend) {
				_this.messageBox(data);
			}

		}, function(err) {
			_this.handleError(err);
		});
	}

};