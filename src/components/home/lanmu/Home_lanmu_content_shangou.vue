<template>
<div class="lanmucontent_shangou" id="lanmucontent_shangou">
	<div class="top">
		<div class="top0">
			<a v-bind:href="content[0].href"><img v-bind:src="content[0].img"/></a>
		</div>
		<div class="top1">
			<a v-bind:href="content[1].href">
				<div>
					<p class="title">{{content[1].title0}}</p>
					<p class='tip0' font-color='red'>{{content[1].title1}}</p>
					<p class='tip1' v-if='content[1].title2'>{{content[1].title2}}</p>
				</div>
				<img v-bind:src="content[1].img"/>
			</a>
		</div>
		<div class="top1">
			<a v-bind:href="content[2].href">
				<div>
					<p class="title">{{content[2].title0}}</p>
					<p class='tip0' font-color='red'>{{content[2].title1}}</p>
					<p class='tip1' v-if='content[0].title2'>{{content[2].title2}}</p>
				</div>
				<img v-bind:src="content[2].img"/>
			</a>
		</div>
	</div>
	<div class="bottom">
		<div class="items" v-for='(datas,index) in content' v-if='index>2'>
			<a v-bind:href="datas.href">
				<div>
					<p class="title">{{datas.title0}}</p>
					<p class="tip0">{{datas.title1}}</p>
				</div>
				<img v-bind:src="datas.img"/>
			</a>
		</div>
	</div>
</div>
</template>

<script>
export default{
	props:['content']
}
</script>

<style scoped>
.lanmucontent_shangou a{
	display: block;
	width:100%;
}
.top{
	overflow: hidden;
}
.top>.top0{
	width:50%;
	display: inline-block;
	float:left;
}
.top>.top0 img{
	width:100%;
}
.top>.top1{
	width:50%;
	display: inline-block;
	float: left;
	padding-top:10px;
}
.top>.top1>a>img{
	width:45%;
	float:right
}
.top>.top1>a>div{
	display: inline-block;
	width:55%;
	float:left;
	padding-top: 20%;
}
.top>.top1>a>div>p{
margin-bottom:5px;
}
.top>.top1 .title{
	font-size:14px;
	font-weight: 800;
	color:#000
}
.top>.top1 .tip0{
	font-size:13px;
}
.bottom{
	width:100%;
}
.bottom>.items{
	width:33.33%;
	display:inline-block;
	float:left;
}
.bottom>.items>a>img{
	max-width:100%;	
}
.bottom>.items>a>div{
	padding-top:10px;
	background-color:#fff;
}
.bottom .title{
	font-size:15px;
	color:#000;
	font-weight:800;
	margin-bottom: 0;
}
.bottom .tip0{
	margin-bottom:0
}
</style>