<template>
	<div id="forget">
		<!--登录表单-->
		<div class="loginForm">
			<form class="mui-input-group">
			    <div class="mui-input-row" @tap="cannel">
			        <label>
			        	<span class="mui-icon mui-icon-person"></span>
			        </label>
			    	<input type="text" @keyup='check' v-model="forgetInput" class="mui-input-clear" placeholder="手机号/邮箱/昵称">
			    </div>
			    <div class="mui-button-row">
			        <button type="button"
			        	:class="{'mui-btn':true, 'mui-btn-block':true, bgRed:btnRed}" >
			        	下一步
			        </button>
			    </div>
			</form>
		</div>
	</div>
</template>

<script>
//import validator from 'validator';
export default {
	name: 'forget',
	data(){
		return{
			forgetInput: '',
			btnRed: false
		}
	},
	methods:{
		check(){
			this.colorChange();
		},
		colorChange(){
			this.btnRed = this.forgetInput.length>0
		},
		cannel(event){
			if(event.target == document.querySelector(".mui-input-row>.mui-icon-clear")){
				this.forgetInput = '';
				this.btnRed = false;
			}
		}
	}
}
</script>
<style lang="less">
#forget {
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
					border-radius:6px;
					color:#fff
				}
				.bgRed{
					background: #ff463c
				}
			}
		}
	}
}
</style>