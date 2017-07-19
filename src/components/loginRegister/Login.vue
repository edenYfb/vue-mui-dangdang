<template>
	<div id="login">
		<!--登录表单-->
		<div class="loginForm">
			<form class="mui-input-group">
			    <div class="mui-input-row" @tap="cannel">
			        <label>
			        	<span class="mui-icon mui-icon-person"></span>
			        </label>
			    	<input type="text" class="mui-input-clear" v-model='telValue' @keyup='check' placeholder="请输入您的手机号">
			    </div>
			    <div class="mui-input-row">
			        <label>
			        	<span class="mui-icon mui-icon-locked"></span>
			        </label>
			        <input type="password" class="mui-input-password" v-model='psdValue' @keyup='check' placeholder="密码">
			    </div>
			    <div class="mui-button-row">
			        <button type="button"
			        :class="{'mui-btn':true, 'mui-btn-block':true, bgRed:btnRed}"
			        @tap="toLogin">
			        	   登陆
			        </button>
			    </div>
			</form>
		</div>
		<!--其他操作-->
		<div class="otherOperation">
			<a class="mui-pull-left" href="javascript:;" @tap="jump('forget')">找回密码</a>
			<a class="mui-pull-right" href="javascript:;" @tap="jump('register')">注册</a>
		</div>
		<!--提示-->
		<p class="agreement">
				协议协议协议协议协议协议协议协议协议协议协议
				协议协议协议协议协议协议协议协议协议协议协议
		</p>
		<div class="thirdLogin">
			<div class="title">
				<div>
					第三方登录
				</div>
			</div>
			<div class="enter">
				<ul>
					<li>
						<a href="javascript:;">
							<img src="../../../assets/image/2017/7/loginQQ.png"/>
							<p>QQ登录</p>
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<img src="../../../assets/image/2017/7/loginTaobao.png"/>
							<p>支付宝登录</p>
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<img src="../../../assets/image/2017/7/loginXinlang.png"/>
							<p>微博登录</p>
						</a>
					</li>
				</ul>
			</div>
			<div class="tip">
				<span>七天无理由退货</span>
				<span>支持货到付款</span>
				<span>100%正品</span>
			</div>
		</div>
	</div>
</template>

<script>
//import validator from 'validator';
export default {
	name: 'login',
	data(){
		return{
			telValue: '',
			psdValue: '',
			btnRed: false,
			checkEnd: false
		}
	},
	computed:{
	},
	methods: {
		jump(path){
			this.$router.push(path)
		},
		toLogin(){
			if(this.checkEnd){
				window.localStorage.loginOk = true;
				mui.toast('登陆成功!');
				var _this = this;
				setTimeout(function(){
					_this.$router.push('self');
				},2500);
			}
		},
		check(){
			this.colorChange();
			this.easyCheck();
		},
		colorChange(){
			this.btnRed = (this.telValue.length>0) && (this.psdValue.length>0)
		},
		easyCheck(){
			this.checkEnd = (this.telValue == 'a') && (this.psdValue == 1);
		},
		cannel(event){
			if(event.target == document.querySelector(".mui-input-row>.mui-icon-clear")){
				this.telValue = '';
				this.btnRed = false;
			}
		}
	}
}
</script>
<style lang="less">
#login {
	height: 100%;
	padding-right: 20px;
	padding-left: 20px;
	padding-top: 40px;
	background: #fff;
	.loginForm {
		padding-top: 24px;
		height: 200px;
		.mui-input-group {
			&::after {
				height:0;
				border:0;
			}
			.mui-input-row {
				height: 45px;
				border: 0px;
				background: #fafafa;
				&:nth-child(2) {
					margin-top:10px;
				}
				&::after {
					height:0;
					border:0;
				}
				label {
					width: 36px;					
					height: 45px;
					overflow: hidden;
					padding: 8px 4px 10px 4px !important;
				}
				input{
					width: 85%;
					float: left
				}
			}
			.mui-button-row {
				padding-top: 20px;
				.mui-btn {
					height: 45px;
					line-height: 18px;
					background: #aaa;
					border-radius: 6px;
					color: #fff
				}
				.bgRed{
					background: #ff463c
				}
			}
		}
	}
	.otherOperation {
		height:30px;
		background: #fff;
		&>a {
			color:#000;
			font-size: 12px;
		}
	}
	.agreement {
		font-size:12px;
	}
	.thirdLogin {
		height:200px;
		padding-top:20px;
		.title {
			padding-left:30px;
			padding-right:30px;
			position: relative;
			&::after, &::before {
				content:'';
				position:absolute;
				width:200px;
				height:1px;
				background: #ddd;
				top:10px;
				z-index:1
			}
			&::before { left: 0;}
			&::after { right: 0;}
			&>div {
				width:80px;
				height:30px;
				margin:0 auto;
				font-size: 13px;
				background: #fff;
				color:#aaa;
				position: relative;
				z-index:2;
			}
		}
		.enter {
			height:100px;
			padding-top: 10px;
			ul{
				margin: 0;
				padding: 0;
				li{
					margin: 0;
					padding: 0;
					list-style: none;
					float: left;
					width: 33%;
					text-align: center;
					a{
						img{
							width:41px;
							height:41px;
						}
					}
				}
			}
		}
		.tip {
			height:30px;
			padding-top:20px;
			text-align: center;
			span {
				position: relative;
				font-size: 11px;
				margin-left:25px;
				color:#aaa;
				&::before {
					content: '';
					position:absolute;
					width:16px;
					height:16px;
					left:-20px;
					top:-1px;
					background:url('../../../assets/image/2017/7/check_icon.png') no-repeat center;
					background-size: contain;
				}
			}
		}
	}
}
</style>