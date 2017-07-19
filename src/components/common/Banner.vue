<template>
<div id="banner">
	<a v-bind:href='bannerdatas.href'>
		<img v-bind:src='bannerdatas.img'/>
	</a>
</div>
</template>

<script>
export default{
	name:'banner',
	props:['bannerdatas']
}
</script>
<style lang="less">
#banner{
	&>a{
		display: block;
		width:100%;
		&>img{
			width:100%;
		}
	}
}
</style>