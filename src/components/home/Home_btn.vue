<template>
	<ul id="btn_classify" class="btnimages">
		<li v-for='btn in btndatas'>
			<a :href="btn.href">
				<img :src="btn.img"/>
			</a>
		</li>
	</ul>
</template>
<script type="text/javascript">
export default{
	props:['btndatas']
}
</script>
<style lang="less">
#btn_classify{
	padding:0;
	display: block;
	overflow: hidden;
	& li{
		float:left;
		width:20%;
		list-style:none;
	};
	& img{
		width:100%;
	}
}

</style>