<template>
	<span id="miaosha">
		<span class="mui-icon-extra mui-icon-extra-outline"></span>
		<span>{{t[0]}}</span>
		<span>{{t[1]}}</span>
		<span>:</span>
		<span>{{t[2]}}</span>
		<span>{{t[3]}}</span>
		<span>:</span>
		<span>{{t[4]}}</span>
		<span>{{t[5]}}</span>
	</span>
</template>
<script type="text/javascript">
export default{
	name:'daojishi',
	props:['time'],
	data(){
		return{
			t:[]
		}
	},
	created:function(){
		var _this = this;
		var totalSec = this.time*60*60;
		var js = function(){
			var h = Math.floor(totalSec/3600) ;
			var m = Math.floor(totalSec%3600/60);
			var s = totalSec%60;
			//时
			_this.$set(_this.t, '0', Math.floor(h/10));
			_this.$set(_this.t, '1', h%10);
			//分
			_this.$set(_this.t, '2', Math.floor(m/10));
			_this.$set(_this.t, '3', m%10);
			//秒
			_this.$set(_this.t, '4', Math.floor(s/10));
			_this.$set(_this.t, '5', s%10);
		}
		js();
		var timerId = setInterval(function(){
			if (totalSec<0) {
				clearInterval(timerId);
				return;
			}
			totalSec--;
			js();
		},1000);
	}
}
</script>
<style lang="less">
#miaosha{
	display:inline-block;
	line-height: 20px;
	&>span:nth-child(2),
	&>span:nth-child(3),
	&>span:nth-child(5),
	&>span:nth-child(6),
	&>span:nth-child(8),
	&>span:nth-child(9){
		display:inline-block;
		background-color:#333333;
		color:#fff;
		border-radius:2px;
		width:14px;
		font-size:13px;
		text-align: center;
		line-height:20px;
		height: 100%;
	}
	&>span{
		display:inline-block;
		float:left;
		margin-right:2px;
		margin-top: 5px;
	}
	&>span:nth-child(1){
		color:red;
		font-weight:800;
		margin-top: 3px;
	}
}

</style>
