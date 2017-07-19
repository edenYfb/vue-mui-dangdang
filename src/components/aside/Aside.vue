<template>
	<div id="aside" class="mui-off-canvas-right">
        <div class="mui-scroll-wrapper">
	        <div class="mui-scroll">
				<!--搜索-->
				<div class="mui-bar mui-bar-nav">
					<a class="mui-action mui-icon mui-icon-back mui-pull-left" @tap='backHome'></a>
					<input id="asideSearchInput" type="text" placeholder='请输入' class="mui-pull-left"/>
				</div>
	        </div>
	        <div class="container">
	        	<router-view name="aside"></router-view>
	        </div>
	    </div>
    </div>
</template>
<script type="text/javascript">
	
export default{
	name: 'aside',
	data(){
		return{}
	},
	methods:{
		backHome(){
			mui( '#app' ).offCanvas( 'close' );
			asideSearchInput.value = '';
		}
	},
	components: {
	}
}
</script>
<style lang="less">
#aside{
	.mui-scroll-wrapper{
		.mui-scroll{
			.mui-bar{
				&>a{
					color: #555;
				}
				&>input{
					width: 80%;
					height: 32px;
					line-height: 32px;
					margin:5px 0 0 20px;
					border-radius: 16px;
				}
			}
		}
		.container {
			height: 100%;
			padding-top: 44px;
		}
	}
}
</style>