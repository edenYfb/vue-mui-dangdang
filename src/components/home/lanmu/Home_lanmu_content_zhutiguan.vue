<template>
	<div id="home_zhutiguan">
		<div v-for='data in content' class="item">
			<a href="data.href">
				<div>
					<p class="title">{{data.title0}}</p>
					<p class='tips'>{{data.title1}}</p>
				</div>
				<img :src="data.img"/>
			</a>
		</div>
	</div>
</template>

<script>
export default{
	props:['content']
}
</script>

<style lang="less">
#home_zhutiguan {
	.item{
		display:inline-block;
		width:50%;
		height:80px;
		padding:5px 5px 5px 0px;
		float:left;
		background-color:#fff;
		a{
			display: block;
			width:100%;
			height:100%;
			div{
				display: inline-block;
				width:60%;
				float:left;
				padding: 2% 2% 0 5%;
				.title {
					font-size:15px;
					font-weight:800;
					color:#000;
				};
				.tips {
					font-size:12px;
					font-weight:600;
					color:#555;
				}
			};
			img{
				max-width:40%;
				max-height:100%;
				float: left;
			}
		}
	}
}
</style>