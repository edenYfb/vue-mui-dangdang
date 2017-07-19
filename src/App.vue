<template>
	<div class="mui-off-canvas-wrap mui-draggable" id='app'>
	  <!-- 主页面容器 -->
	  <div class="mui-inner-wrap mui-transitioning">
	    <!-- 菜单容器 -->
		<aside-component></aside-component>
	    <!-- 主页面标题 -->
	    <header-component ref="header"></header-component>
	    <!-- 主页面内容 -->
	    <div class="mui-content mui-scroll-wrapper" id="main">
        	<!--<transition name='fade'>-->
	        	<keep-alive>
	        		<router-view name="main"></router-view>
	        	</keep-alive>
        	<!--</transition>-->
	    </div>  
	   	<!-- 主页面底部 -->
	    <footer-component ref="footer"></footer-component>
	  </div><!--end 主页面容器-->
	</div><!--end 侧滑导航容器 #app-->
</template>
<script>
//加载组件
import headerComponent from './components/header/Header.vue';
import footerComponent from './components/footer/Footer.vue';
import asideComponent from './components/aside/Aside.vue';

export default {
  name: 'app',
  mounted(){
	//禁止手动侧滑
	document.querySelector('.mui-inner-wrap').addEventListener('drag', function(event) {
	    event.stopPropagation();
	});
  	//允许滚动
	mui('.mui-scroll-wrapper').scroll({
		 scrollY: true, //是否竖向滚动
		 scrollX: false, //是否横向滚动
		 startX: 0, //初始化时滚动至x
		 startY: 0, //初始化时滚动至y
		 indicators: true, //是否显示滚动条
		 deceleration:0.0006, //阻尼系数,系数越小滑动越灵敏
		 bounce: true //是否启用回弹
	});
  },
  //各个组件的watch地址改变集中在app里
  watch: {
  	$route(to, from){
  		this.$refs.header.headerWatch(to.path, from.path);
  		this.$refs.footer.footerWatch(to.path, from.path);
  	}
  },
  components:{
  	headerComponent,
  	footerComponent,
  	asideComponent
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#main {
}
.mui-off-canvas-left, .mui-off-canvas-right{
  width: 100% !important;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
