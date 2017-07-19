<template>
	<div id="register">
		<!--登录表单-->
		<div class="loginForm">
			<form class="mui-input-group">
			    <div class="mui-input-row" @tap="cannel">
			        <label>
			        	<span class="mui-icon mui-icon-person"></span>
			        </label>
			    	<input id="registerInput" type="text" v-model="registerInput" class="mui-input-clear" placeholder="手机号/邮箱/昵称">
			    </div>
			    <div class="mui-button-row">
			        <button type="button" :class="{'mui-btn':true, 'mui-btn-block':true, bgRed:btnRed}">下一步</button>
			    </div>
			</form>
		</div>
		<!--提示-->
		<p class="agreement">
				协议协议协议协议协议协议协议协议协议协议协议
				协议协议协议协议协议协议协议协议协议协议协议
		</p>
		<div class="thirdLogin">
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
	name: 'register',
	data(){
		return{
			registerInput: '',
			btnRed: false
		}
	},
	methods:{
		check(){
			this.colorChange();
		},
		colorChange(){
			this.btnRed = this.registerInput.length>0
		},
		cannel(event){
			if(event.target == document.querySelector(".mui-input-row>.mui-icon-clear")){
				this.registerInput = '';
				this.btnRed = false;
			}
		}
	},
	watch:{
		registerInput(){
			this.check()
		}
	}
}
</script>
<style lang="less">
#register {
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
					float: left;
				}
			}
			.mui-button-row {
				padding-top: 20px;
				.mui-btn {
					height: 45px;
					line-height: 18px;
					background: #aaa;
					border-radius:6px;
					color:#fff
				}
				.bgRed{
					background: #ff463c
				}
			}
		}
	}
	.agreement {
		font-size:12px;
	}
	.thirdLogin {
		height:200px;
		padding-top:20px;
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