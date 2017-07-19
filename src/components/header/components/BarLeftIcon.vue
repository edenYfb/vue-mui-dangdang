<template>
	<div id="barLeftIcon">
		<a :class="iconClass" @tap="toDo"></a>
	</div>
</template>
<script>
export default{
	name: 'barLeftIcon',
	data(){
		return {
			//导航栏左侧图标
			iconClass: Object
		}
	},
	beforeMount(){
		this.init();
	},
	methods:{
		//导航左侧图标初始化
		init(){
			var iconStyle;
			switch(this.$router.currentRoute.path){
				case '/home': iconStyle = 'mui-icon-bars'; break;
				case '/classify': iconStyle = 'hide'; break;
			};
			this.iconClass = {
				'mui-action': true,
				'mui-icon': true,
				'mui-icon-bars': iconStyle =='mui-icon-bars',
				'mui-icon-back': iconStyle =='mui-icon-back',
				'hide': iconStyle =='hide',
				'mui-pull-left':true
			}
		},
		//服务于forceView的查询
		typeSearch(path){
			switch(path){
				case '/home': return 'mui-icon-bars';
				case '/classify': return 'hide';
			};
		},
		//强制视图刷新
		forceView(to, from){
			var lastClass = this.typeSearch(from);
			var nowClass = this.typeSearch(to);
			this.iconClass[lastClass] = false;
			this.$set(this.iconClass, nowClass, true);
		},
		toDo(){
			switch(this.$router.currentRoute.path){
				case '/home':
					this.$router.push('/classify');
					break;
				case '/classify':
					this.$router.go(-1);
				break;
			};
		},
		hideOrShow(){
			return barLeftIcon
		}
	}
}
</script>
<style lang="less">
#barLeftIcon {
	.hide{
		display: none;
	}
	&>a{
		color: #fff;
	}
}
</style>