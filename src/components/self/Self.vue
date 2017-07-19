<template>
	<div id="self">
		<div class="top">
			<div class="login" :style="{background: banner}">
				<a href="javascript:;" @tap="jump('login')" class="loginBtn">登录/注册</a>
			</div>
			<div class="message">
				<ul>
					<li v-for="(message, messageIndex) in datas.messageInit" :key="messageIndex">
						<div>
							{{message.num}}
						</div>
						<div>
							{{message.name}}
						</div>
					</li>
				</ul>
			</div>
			<div class="face">
				<img :src="faceImg"/>
			</div>
		</div>
		<div class="list">
			<ul class="mui-table-view">
			    <li class="mui-table-view-cell" v-for="(listItem, listIndex) in datas.list" :key="listIndex">
			    	<img class="mui-pull-left" :src="listItem.img"/>
			        <a class="mui-navigate-right mui-pull-left">{{listItem.title}}</a>
			    </li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
import selfDatas from '../../datas/self.js'

export default {
	name: 'self',
	data(){
		return {
			datas: selfDatas,
			indexShow: true
		}
	},
	computed:{
		banner(){
			return "url(" + this.datas.banner + ") center no-repeat"
		},
		faceImg() {
			return this.datas.face
		}
	},
	methods: {
		jump(path) {
			this.$router.push(path)
		}
	},
	watch: {
		$route(to, from) {
	  		this.indexShow = to.path=='/self' ?true :false;
		}
	}
}
</script>
<style lang="less">
#self {
	.top {
		height: 140px;
		position: relative;
		.login {
			height: 90px;
			
			padding-top: 34px;
			.loginBtn {
				height: 32px;
				padding-top:5px;
				width: 102px;
				display: block;
				border: 1px solid #fff;
				border-radius:5px;
				margin: 0 auto;
				color: #fff;
			}
		}
		.message {
			height: 50px;
			overflow: hidden;
			background: #fff;
			ul{
				height: 50px;
				margin: 0;
				li{
					width: 24%;
					height: 51;
					padding-top:5px;
					list-style: none;
					float: right;
					font-size: 13px;
					font-weight: 600;
					margin-right:1%;
					&>nth-child(2){
						border:0 1px 0 1px solid #000;
					}
				}
			}
		}
		.face {
			width: 68px;
			height: 68px;
			overflow: hidden;
			border-radius: 10px;
			position: absolute;
			left:10px;
			top:50px;
			img {
				width:100%;
				height:100%;
			}
		}
	}
	.list{
		&>ul{
			&>li{
				text-align: left;
				padding-right: 0px;
				padding-top:20px;
					img{
						width:22px;
						/*margin-top:10px;
						margin-right:10px;*/
					}
				.mui-navigate-right{
					margin: 0px;
					padding: 0px;
					width: 92%;
					float: right;
				}
			}
		}
	}
}
</style>