<template>
<div class="lanmucontent_miaosha" id="lanmucontent_miaosha">
	<div class="item" v-for='data in content'>
		<a v-bind:href="data.href">
			<img width='100%' v-bind:src="data.img"/>
			<a href="" class="content_text">{{data.title}}</a>
		</a>
	</div>
</div>

</template>

<script>
export default{
	name: 'lanmucontentMiaosha',
	props:['content']
}
</script>

<style lang="less">
#lanmucontent_miaosha{
	width:100%;
	float:left;
	padding:0 0 0 2%;
	&>.item{
		width:30%;
		display:inline-block;
		float:left;
		&:nth-child(1),
		&:nth-child(2){
			margin-right:4%;
		}
		&>div{
			&>a{
				display:block;
				width:100%;
				&>img{
					max-width:100%
				}
			}
		}
	}
	.content_text{
		color:red;
	}
}

</style>