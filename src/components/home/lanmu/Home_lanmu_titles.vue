<template>
	<div class="lanmu_title" id="lanmu_title">
		<span class="title mui-pull-left">{{title.title_left}}</span>
		<span class="mui-pull-left" v-if=''>
			<slot></slot>
		</span>
		<span class="mui-pull-right">
			<a href="javascrit:;">
				<span>{{title.title_right}}</span>
				<span class="mui-icon mui-icon-forward" v-show='title.iconshow'></span>
			</a>
		</span>
	</div>
</template>

<script>
export default{
	name:'lanmuTitle',
	props:['title']
}
</script>

<style lang="less">
#lanmu_title{
	padding:5px 0 10px 8px;
	overflow: hidden;
	line-height:30px;
	background-color:#fff;
	.title{
		font-weight:800;
		margin-right:10px;
	}
	.mui-pull-right{
		span{
			color: #ff463c
		}
	}
}
</style>