<template>
	<div id="homeAside">
		<p class="title">
			<img src="../../../../assets/image/2017/7/fire.png"/>
			<span>首页热门搜索</span>
		</p>	
		<ul class="content">
			<li v-for="(item, index) in datas" :key="index">
				<span>
					<a href="javascript:;">{{item}}</a>
				</span>
			</li>
		</ul>
	</div>
</template>

<script>
import datas from '../../../datas/aside.js'
export default {
	name: 'homeAside',
	data(){
		return {
			datas: datas.home
		}
	},
	
}
</script>

<style lang="less">
#homeAside {
	height: 100%;
	background: #e5e5e5;
	.title {
		padding-top: 15px;
		padding-left: 10px;
		text-align: left;
		img{
			width: 13px;
		}
	}
	.content {
		width: 100%;
		padding-left:10px;
		background: red;
		&>li{
			list-style: none;
			float: left;
			min-width: 80px;
			height: 30px;
			line-height: 30px;
			background-color: #fff;
			margin-right:10px;
			margin-bottom:10px;
			&>span{
				margin-left: 15px;
				margin-right: 15px;
				&>a{
					font-size: 13px;
					color: #464646;
				}
			}
		}
	}
}
</style>