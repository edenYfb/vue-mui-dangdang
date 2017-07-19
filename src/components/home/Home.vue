<template>
  	<div id="home" class="mui-scroll">
        <ul class="mui-table-view mui-table-view-chevron" id='main_ul'>
        	<!--轮播图-->
			<keep-alive>
				<lunbo-component :lunbodatas='datas.lunbodatas'></lunbo-component>
			</keep-alive>
			<!--按钮栏-->
			<btnimages-component :btndatas='datas.btndatas'></btnimages-component>
			<!--横幅1-->
			<banner-component :bannerdatas='datas.bannerdatas[0]'></banner-component>
			<!--第一个栏目-->
			<lanmu-component :lanmudatas='datas.lanmu_datas.miaosha'>
				<!--第一个栏目使用的倒计时组件-->
				<daojishi-component :time='8' slot='title'></daojishi-component>
			</lanmu-component>
			<!--第二个栏目-->
			<lanmu-component :lanmudatas='datas.lanmu_datas.zhutiguan'></lanmu-component>
			<!--横幅2-->
			<banner-component :bannerdatas='datas.bannerdatas[1]'></banner-component>
			<!--第三个栏目-->
			<lanmu-component :lanmudatas='datas.lanmu_datas.shangou'></lanmu-component>
		</ul>
  	</div>
</template>
<script type="text/javascript">
//功能组件
import lunboComponent from '../common/Lunbo.vue'
import bannerComponent from '../common/Banner.vue'
import daojishiComponent from '../common/Small_daojishi.vue'
//样式组件
import btnimagesComponent from './Home_btn.vue'
import lanmuComponent from './lanmu/Home_lanmu.vue'

//数据获取
import homeDatas from '../../datas/home.js'

export default{
	name: 'home',
	data(){
		return {
			datas: homeDatas
		}
	},
	components:{
		lunboComponent,
		btnimagesComponent,
		bannerComponent,
		lanmuComponent,
		daojishiComponent
	}
}
</script>
<style lang="less">
#home {
	padding-bottom: 50px;
}
</style>
