<template>

	<div id="alert-success" role="alert" class="alert alert-success top displaynone" style="width: 400px;"><button @click="hideThisSuccessAlert()" type="button" class="close"><span>×</span></button><span class="glyphicon glyphicon-ok-sign"></span>
		  <strong>提示信息</strong>
		  <p id="success-tips"></p>
	</div>

	<div id="alert-danger" role="alert" class="alert alert-danger top displaynone" style="width: 400px;"><button @click="hideThisDangerAlert()" type="button" class="close"><span>×</span></button><span class="glyphicon glyphicon-info-sign"></span>
		  <strong>服务器提了一个问题</strong>
		  <p id="danger-tips"></p>
	</div>

    <div class="notification-center {{boncein}}">
    	<ul>
    		<li v-for="noti in notificationsList">
    			<div @click="pathToProfile(noti.operator._id)" class="avatar" style="background-image: url({{noti.targetUser.photo}});"></div>
    			<div class="body">
    				<span><a @click="pathToProfile(noti.operator._id)">{{noti.operator.username}}</a> {{noti.did | notificationActionFilter}}了您的分享 </span>
    				<span class="time">{{noti.createdAt}}</span>
    			</div>
    			<div @click="pathToCG(noti.targetTheme._id)" class="noti-item" style="background-image: url({{noti.targetTheme.image}});"></div>
    		</li>
    		<li>
    			<div @click="pathToNotifications()" class="body more"><a>查看更多</a></div>
    		</li>
    	</ul>
    </div>

	<nav class="navbar navbar-default">
	  <div class="container-fluid">
	    <!-- Brand and toggle get grouped for better mobile display -->
	    <div class="navbar-header">
	      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
	        <span class="sr-only">Toggle navigation</span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	      </button>
	      <a class="navbar-brand" v-link="{ path: '/list' }">vue-seeds</a>
	    </div>

	    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	      <ul class="nav navbar-nav navbar-right" id="profile-menu">
<!-- 	        <li><a>投稿</a></li>
	        <li><a>个人中心</a></li>
	       	<li><a>登录</a></li>
	       	<li><a>注册</a></li>
	       	<li><a>退出</a></li>
 -->	      </ul>
	    </div><!-- /.navbar-collapse -->
	  </div><!-- /.container-fluid -->
	</nav>

	<style type="text/css">
		.imghead {filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=image);}
	</style>

  	<div class="row" style="margin-right:0px;margin-bottom:15px;">
  		<div class="col-md-6 col-md-offset-3" style="padding-left: 0px;padding-right: 0px">
  			<div class="menu-header" id="poi-header" style="background-color: rgb(249, 245, 239)">
	  			<ul>
					<li route="/index"><span @click="pathTo('/index')" v-bind:class="menu.currentName != '/index' ? '' : 'active'">菜单一</span></span></li>
					<li route="/timeline"><span @click="pathTo('/timeline')" v-bind:class="menu.currentName != '/timeline' ? '' : 'active'">菜单二</span></li>
	  			</ul>
  			</div>
  		</div>
	</div>

</template>

<script>

	var util = require('../commons/scripts/commons.js');

	export default {
		data() {
			return {
				msg: 'hello from header.vue',
				showRight: false,
				menu: {
					currentName: 'index'
				},

				username: localStorage.username,
				introduction: localStorage.introduction,
				photo: 'background-image: url(' + localStorage.photo + ');',
				photoSrc: localStorage.photo,

				editable: false,

				draftsCount: localStorage.draftsCount,
				favouritesCount: localStorage.favouritesCount,
				deletedCount: localStorage.deletedCount,

				followerCount: localStorage.followerCount,
				followingCount: localStorage.followingCount,

				notificationCount: 0,
				realNofiticationCount: 0,

				boncein: '',

				notificationsList: []
			};
		},

		methods: {
			init: function() {
				this.isLogin = localStorage.login;
				this.startNotificationComet();
			},

			pathTo: function(path){
				util.cancelActiveMenu();
				this.menu.currentName = path;
				router.replace(path);
			},

			pathToAndCloseThis: function(path) {
				this.pathTo(path);
				this.showRight = false;
			},

			hideThisDangerAlert: function() {
				var alertDanger = document.getElementById('alert-danger');
				var cls = alertDanger.getAttribute('class');
				var cls = cls.split(' ');
				var i = cls.indexOf('fade-enter');
				cls.splice(i, 1);
				cls.push('fade-leave');
				alertDanger.setAttribute('class', cls.join(' '));
			},

			hideThisSuccessAlert: function() {
				var alertSuccess = document.getElementById('alert-success');
				var cls = alertSuccess.getAttribute('class');
				var cls = cls.split(' ');
				var i = cls.indexOf('fade-enter');
				cls.splice(i, 1);
				cls.push('fade-leave');
				alertSuccess.setAttribute('class', cls.join(' '));
			}

		},

        props: {
            isLogin: {
                type: String,
                default: localStorage.login
            }
        },

		created() {

		}

	};

</script>	

<style>
	
	.header-circle {
		width: 40px!important;
		height: 40px!important;
		line-height: 40px!important;
	}

	.menu-header {
		display: table;
		margin-top: -19px;
		width: 100%;
	}

	.menu-header ul{
		list-style: none;
		display: table-row;
	}

	.menu-header ul li {
		display: table-cell;
		text-align: center;
		padding-top: 8px;
		width: 25%;
	}

	.menu-header ul li span {
		padding-top: 8px;
		letter-spacing: 1px;
		color: rgb(68, 68, 68);
		font-weight: 200;
	}

	.menu-header ul li span:hover {
		cursor: pointer;
		border-top: 2px solid rgb(55, 62, 82);
	}

	.menu-header ul li span.active {
		border-top: 2px solid rgb(0, 133, 242);
		color: rgb(0, 133, 242)!important;
	}

	.side-profile-photo {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		margin: 0 auto;
		cursor: pointer;
		transition: all .3s ease;
	}

	.side-profile-photo:hover {
		transform: scale(1.05, 1.05);
	}

	.side-profile-detail {
		text-align: center;
		padding: 15px;
	}

	.side-profile-detail span.description {
		color: rgb(209, 202, 192)!important;
		font-size: .8em!important;
	}

	.side-profile-detail .relations {
		font-size:1em!important;
		margin-top:15px;
		font-weight:200;
	}

	.side-profile-detail .relations span:hover {
		cursor: pointer;
		color: rgb(0, 149, 219);
	}

	.side-profile-footer {
		height: 100%;
		padding-top: 20px;
		padding-bottom: 20px;
	}

	.aside .aside-dialog .aside-body {
		padding-left: 0px;
		padding-right: 0px;
	}

	.side-profile-footer-content {
		padding-top: 20px;
		border-top: 1px solid rgb(0, 149, 219);
		text-align: center;
		font-size: 1.2em!important;
		font-weight: 200!important;
	}

	.side-profile-footer-content p {
		font-size: 3em!important;
		font-weight: 200!important;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.side-profile-footer-content div.col-xs-4.block {
		transition: all .2s ease;
	}

	.side-profile-footer-content div.col-xs-4.block:hover {
		color: rgb(0, 149, 219)!important;
		cursor: pointer;
		transform: scale(1.1);
	}

	#modify-pencil:hover {
		cursor: pointer;
		color: rgb(35, 119, 186);
	}

	#main-page {
		top: 15px;
		left: 20px;
	}

	#search-button {
		top: 15px;
		left: 70px;
	}

	.type-circle.right {
		top: 5px;
		right: 0!important;
	}

	#newcg-button {
		right: 170px!important;
		top: 15px;
	}

	#exit-button {
		right: 20px!important;
		top: 15px;
	}

	#userprofile-button {
		right: 120px!important;
		top: 15px;
	}

	#usernoti-button {
		right: 70px!important;
		top: 15px;
	}

	.noti-tip {
		background: rgb(207, 0, 31);
		position: absolute;
		border: none;
		width: 18px;
		height: 18px;
		border-radius: 9px;
		line-height: 18px;
		margin-left: 24px;
		color: white;
		font-size: 12px;
		letter-spacing: .1px;
	}

	.notification-center {
		background: rgb(255, 255, 255);
		width: 280px;
		position: fixed;
		right: 20px;
		font-size: 12px;
		line-height: 15px;
		border-radius: 4px;
		max-height: 360px;
		top: 66px;
		/*height: 360px;*/
		z-index: 3000;
		box-shadow: 0 0 15px rgba(99, 75, 37, 0.1);
		opacity: 0
	}

	.notification-center ul {
		width: 100%;
		height: 100%;
		padding: 0px;
	}

	.notification-center ul li {
		padding: 10px;
		border-bottom: 1px solid rgba(46, 151, 216, 0.12);
	}

	.notification-center ul li a {
		cursor: pointer;
	}

	.notification-center ul li .avatar {
		width: 40px;
		height: 40px;
		border-radius: 20px;
		background-color: #FFFFFF;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 50% 50%;
		cursor: pointer;
	}

	.notification-center ul li .body {
		display: inline-block;
		vertical-align: top;
		padding-top: 8px;
		padding-left: 50px;
		padding-right: 50px;
		margin-top: -40px;
	}

	.notification-center ul li .body.more {
		width: 100%;
		text-align: center;
		vertical-align: middle;
		margin-top: -4px;
	}

	.notification-center ul li .body .time {
		color: #d0cac1;
		font-size: 10px;
		display: block;
	}

	.notification-center ul li .noti-item {
		width: 40px;
		height: 40px;
		background-color: #FFFFFF;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: 50% 50%;
		position: absolute;
		margin-top: -55px;
		margin-left: 220px;
		vertical-align: top;
		cursor: pointer;
	}

</style>
