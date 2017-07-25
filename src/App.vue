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
        	<transition name='fade'>
	        	<keep-alive>
	        		<router-view name="main"></router-view>
	        	</keep-alive>
        	</transition>
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
  	var _this = this;
	//刷新
	mui.init({
		swipeBack:true,//不允许侧滑
		pullRefresh : {
		    container:"#main",
		    down: {
		    	height:80,
			    contentrefresh: "正在刷新...",
			    callback: _this.pullFresh
			}
		}
	});
	//滚动
	mui('.mui-scroll-wrapper').scroll();
  },
  methods: {
		pullFresh(){
			var _this = this;
			setTimeout(()=>{
				alert('加载完成');
				console.log(111, mui('#main').pullRefresh())
				mui('#main').pullRefresh().endPulldownToRefresh();
			},1000);
		}
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
<style lang="less">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	&>.mui-inner-wrap{
		&>#main{
			&>.mui-pull-top-pocket.mui-block{
				top:30px;
			}
			/*&>.fade-enter-active,
			&>.fade-leave-active {
			  transition: opacity .5s
			}
			&>.fade-enter,
			&>.fade-leave-active {
			  opacity: 0
			}*/
		}
	}
}
</style>
