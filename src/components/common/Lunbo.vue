<template>
	<div class="mui-slider">
	  <div class="mui-slider-group mui-slider-loop">
	    <!--支持循环，需要重复图片节点-->
	    <div class="mui-slider-item mui-slider-item-duplicate">
	    	<a href="#"><img v-bind:src="lunbodatas[lunbodatas.length-1].img" /></a>
	    </div>
	    <div class="mui-slider-item" v-for='data in lunbodatas'>
	    	<a href="#"><img v-bind:src="data.img"/></a>
	    </div>
	    <!--支持循环，需要重复图片节点-->
	    <div class="mui-slider-item mui-slider-item-duplicate">
	    	<a href="#"><img v-bind:src="lunbodatas[0].img" /></a>
	    </div>
	  </div>
	</div>
</template>
<script>

export default{
	name: 'lunbo',
	props:['lunbodatas'],
	mounted(){
		//轮播设置
		mui('.mui-slider').slider({interval:2000});
	}
}
</script>

<style>
</style>