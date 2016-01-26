<template>

	<div>
		<div  @click="showFooter" class="footer">
			<span class="glyphicon glyphicon-exclamation-sign"></span>
		</div>
		<div v-show="footer.show" transition="footer" @click="hideFooter" class="footer-content">
		</div>
		<div v-show="footer.show" transition="realfooter" class="footer-real">
			<a target="_blank">© vue-seeds</a>
			Powered by <a href="http://ivydom.com" target="_blank">ivydom.com</a>
		</div>
	</div>

</template>

<script>
	
	export default {
		data() {
			return {
				footer: {
					show: false
				}
			};
		},

		methods: {
			showFooter: function(){
				this.footer.show = true;
			},
			hideFooter: function() {
				this.footer.show = false;
			}
		}
	};


</script>

<style>
	
	.footer {
		position: fixed;
		bottom: 14px;
		right: 20px;
		border-radius: 50%;
		color: rgb(156, 157, 164);
		transition: all .3s ease;
		font-size: 2.2em;
	}

	.footer:hover {
		color: rgb(55, 62, 82);
		transform: scale(1.2,1.2);
		-ms-transform: scale(1.2,1.2);	/* IE 9 */
		-webkit-transform: scale(1.2,1.2);	/* Safari 和 Chrome */
		-o-transform: scale(1.2,1.2);	/* Opera */
		-moz-transform: scale(1.2,1.2);	/* Firefox */
	}

	.footer-content {
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.4);
		z-index: 6555;
		top: 0;
		left: 0;
		opacity: 0;
	}

	.footer-real {
		width: 100%;
		padding: 20px;
		position: fixed;
		bottom: 0;
		left: 0;
		background: rgb(55, 62, 82);
		z-index: 65535;
		color: rgba(255, 255, 255, 0.4);
	}

	.footer-real a{
		color: rgb(255, 255, 255);
	}

	/* 必需 */
	.footer-transition {
	  	transition: all .3s ease;
	  	opacity: 1;
	}

	.footer-enter, .footer-leave {
		opacity: 0;
	}

	/* 必需 */
	.realfooter-transition {
	  	transition: all .2s ease;
	  	opacity: 1;
	}

	.realfooter-enter, .realfooter-leave {
		padding: 0 10px;
		opacity: 0;
	}

</style>