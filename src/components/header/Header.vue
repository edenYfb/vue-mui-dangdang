<template>
<div id="header" v-show="navShow">
	<!--search类型-->
	<div class="search mui-bar" v-show="navType=='search'">
		<!--左侧图标-->
		<barLeftIcon-component ref="barLeftIcon"></barlefticon-component>
		<!--中间搜索-->
		<div id="header_search" :class="{searchItem:true,'mui-pull-left':true, long:long, short:!long}">
			<!--放大镜-->
			<a class="mui-action mui-icon mui-icon-search search_icon0 mui-pull-left"></a>
			<!--搜索框-->
			<div type="text" class="search_input" @tap='toAside'>商品</div>
			<!--<router-link class="mui-action mui-icon mui-icon-loop search_icon1 mui-pull-right" to='self'></router-link>-->
		</div>
		<!--右侧图标-->
		<barRightIcon-component></barRightIcon-component>
	</div>
	<!--title类型-->
	<div class="title mui-bar mui-bar-nav" v-show="navType=='title'">
		<h1 class="mui-title">{{navTitle}}</h1>
		<a v-show="navIconLeft" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
	</div>
</div>
</template>
<script>
//导航左边图标
import barLeftIconComponent from './components/BarLeftIcon.vue'
//导航右边图标
import barRightIconComponent from './components/BarRightIcon.vue'

export default{
	name: 'header',
	data(){
		return {
			navShow: Boolean,	//显示隐藏
			navType: String,	//中间是搜索还是标题
			navTitle: String,	//如果是标题类型，标题名,
			//细节调整
			long: Boolean,	//search类型的宽度
			navIconLeft: true
		}
	},
	computed:{
	},
	mounted(){
		//初始化(首次进入或刷新)
		this.configure(this.$router.currentRoute.path);
		//颜色渐变
		this.headerColor();
	},
	methods:{
		//由app.vue观察触发
		headerWatch(to, form){
			this.configure(arguments[0]);
			//barLeftIcon视图刷新
			this.$refs.barLeftIcon.forceView(arguments[0], arguments[1]);
			//色彩重置
			document.querySelector('#header>.search').style.backgroundColor = 'rgba(255,70,60, 0)';
		},
		//配置
		configure(path){
			switch(path){
				//search类型nav
				case '/home':
					this.navShow = true, this.navType = 'search', this.long = false;
					break;
				case '/classify':
					this.navShow = true, this.navType = 'search', this.long = true;
					break;
				//title类型nav
				case '/discover':
				    this.navShow = true, this.navType = 'title', this.navTitle = '发现', this.navIconLeft = false;
				    break;
				case '/buy':
				    this.navShow = true, this.navType = 'title', this.navTitle = '购物车', this.navIconLeft = false;
				    break;
				case '/login':
		  			this.navShow = true, this.navType = 'title', this.navTitle = '登录', this.navIconLeft = false;
		  			break;
		  		case '/register':
		  			this.navShow = true, this.navType = 'title', this.navTitle = '注册', this.navIconLeft = true;
		  			break;
		  		case '/forget':
		  			this.navShow = true, this.navType = 'title', this.navTitle = '忘记密码', this.navIconLeft = true;
					break;
		  		case '/message':
		  			this.navShow = true, this.navType = 'title', this.navTitle = '消息中心', this.navIconLeft = false;
					break;
				default:
					this.navShow = false;
			}
		},
		//侧滑动作
		toAside(event){
			mui('.mui-off-canvas-wrap').offCanvas('show');
			document.querySelector("#asideSearchInput").focus()
		},
		headerColor(){
			//mui-bar-transparent有bug变不了色，没用它
			var top = document.querySelector('.search.mui-bar');
			var item = document.querySelector('#home');//home.vue里
			top.style.backgroundColor = 'rgba(255,70,60, 0)';
			window.onscroll = function(){
				var num = parseInt(item.style.transform.split(',')[1]);
				if(num>0) return
				var percent = Math.abs(num)/200;
				percent = percent>1 ?1 :percent;
				top.style.backgroundColor = 'rgba(255,70,60,'+ percent +')';
			}
		}
	},
	components:{
		barLeftIconComponent,
		barRightIconComponent
	}
}
</script>
<style lang="less">
#header {
	.search{
		.long{
			width:88%;
			margin-left:3%;
		}
		.short{
			width:80%;
			margin-left:5%;
		}
		.searchItem{
			position: relative;
			margin-left:2%;
			.search_input{
				position:absolute;
				left:0;
				top:0;
				z-index:1;
				width:100%;
				height:32;
				float:left;
				margin-top:5px;
				height:32px;
				line-height: 32px;
				border-radius: 16px;
				background-color:rgba(255, 255, 255, 0.95);
				font-size:13px;
				text-align: left;
				text-indent: 3em;
			}
			.search_icon0{
				left:5px;
				color:#000;
			}
			.search_icon1{
				right:5px;
			}
		}
	}
	.title{
		a{
			color:#000;
		}
		.titleItem{
			width: 100%;
			text-align: center;
			line-height: 45px;
		}
	}
}


</style>