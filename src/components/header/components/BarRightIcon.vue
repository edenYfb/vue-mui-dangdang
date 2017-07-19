<template>
<div id="barRightIcon">
	<a class="mui-action mui-icon mui-icon-chatboxes mui-pull-right" @tap="jump('message')"></a>
</div>
</template>

<script>
export default{
	name: 'barRightIcon',
	data(){
		return {}
	},
	methods:{
		jump(path){
			this.$router.push(path);
		}
	}
}
</script>

<style lang="less">
#barRightIcon {
	a{
		color:#fff;
		margin-left:2%;
	}
}
</style>