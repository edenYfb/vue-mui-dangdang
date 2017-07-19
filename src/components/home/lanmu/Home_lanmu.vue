<template>
	<div id="homeLanmu">
		<titles v-bind:title='title'>
			<slot name='title'></slot>
		</titles>
		<component v-bind:content='content' v-bind:is='name'>
			<slot name='content'></slot>
		</component>
	</div>
</template>

<script>
import titles from './Home_lanmu_titles.vue'
import content_miaosha from './Home_lanmu_content_miaosha.vue'
import content_zhutiguan from './Home_lanmu_content_zhutiguan.vue'
import content_shangou from './Home_lanmu_content_shangou.vue'

export default{
	props:['lanmudatas'],
	data(){
		return{
			name: this.lanmudatas.name,
			title: this.lanmudatas.title,
			content: this.lanmudatas.content
		}
	},
	components:{
		titles,
		'miaosha':content_miaosha,
		'zhutiguan':content_zhutiguan,
		'shangou':content_shangou
	}
}
</script>
<style lang="less">
#homeLanmu{
}
</style>