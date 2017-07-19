<template>
	<nav id="footer" class="mui-bar mui-bar-tab">
	  	<a href='javascript:;' @tap="jump('home')" :class="{'mui-tab-item':true, 'mui-active':isActive.isHome}">
	  		<!--mui-tab-item mui-active-->
			<span class="mui-icon mui-icon-home"></span>
			<span class="mui-tab-label">首页</span>
		</a>
		<a href='javascript:;' @tap="jump('classify')" :class="{'mui-tab-item':true, 'mui-active':isActive.isClassify}">
			<span class="mui-icon mui-icon-list"></span>
			<span class="mui-tab-label">分类</span>
		</a>
		<a href='javascript:;' @tap="jump('discover')" :class="{'mui-tab-item':true, 'mui-active':isActive.isDiscover}">
			<span class="mui-icon mui-icon-navigate"></span>
			<span class="mui-tab-label">发现</span>
		</a>
		<a href='javascript:;' @tap="jump('buy')" :class="{'mui-tab-item':true, 'mui-active':isActive.isBuy}">
			<span class="mui-icon mui-icon-map"></span>
			<span class="mui-tab-label">购物车</span>
		</a>
		<a href='javascript:;' @tap="jump('self')" :class="{'mui-tab-item':true, 'mui-active':isActive.isSelf}">
			<span class="mui-icon mui-icon-person"></span>
			<span class="mui-tab-label">我的</span>
		</a>
	</nav>
</template>
<script type="text/javascript">
export default {
	name: 'footer',
	data(){
		return{
			isActive:{
				isHome:false,
				isClassify:false,
				isDiscover:false,
				isBuy:false,
				isSelf:false
			}
		}
	},
	beforeMount(){
		//针对刷新和首次
		this.activeChange(this.$router.currentRoute.path,'');
	},
	methods: {
		jump(path) {
			this.$router.push(path)
		},
		//由app.vue观察触发
		footerWatch(to, from){
			this.activeChange(to, from);
		},
		//样式的active状态改变
		activeChange(to, from){
			for(var i in this.isActive){
				i = false;
			}
			switch(to){
				case '/home':
					this.$set(this.isActive, 'isHome', true); break;
				case '/classify':
					this.$set(this.isActive, 'isClassify', true); break;
				case '/discover':
					this.$set(this.isActive, 'isDiscover', true); break;
				case '/buy':
					this.$set(this.isActive, 'isBuy', true); break;
				case '/self':
					this.$set(this.isActive, 'isSelf', true); break;
			}
		}
	}
}
</script>
<style lang="less">
#footer{
	/*position:absolute;*/
	/*bottom:-50px;*/
	/*z-index:3;*/
}	
</style>