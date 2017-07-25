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
	name: 'lanmucontentShangou',
	props:['content']
}
</script>

<style lang="less">
#lanmucontent_shangou{
	.top{
		overflow: hidden;
		.top0{
			width:50%;
			display: inline-block;
			float:left;
			& img{
				width:100%;
			}
		}
		.top1{
			width:50%;
			display: inline-block;
			float: left;
			padding-top:10px;
			&{
				a{
					&>img{
						width:45%;
						float:right
					}
					&>div{
						display: inline-block;
						width:55%;
						float:left;
						padding-top: 20%;
						&>p{
							margin-bottom:5px;
						}
						.title{
							font-size:14px;
							font-weight: 800;
							color:#000
						}
						.tip0{
							font-size:13px;
						}
						.tip1{}
					}
				}
			}
		}
	}
	.bottom{
		width:100%;
		&>.items{
			width:33.33%;
			display:inline-block;
			float:left;
			&>a{
				&>img{
					max-width:100%;	
				}
				&>div{
					padding-top:10px;
					background-color:#fff;
					&>.title{
						font-size:15px;
						color:#000;
						font-weight:800;
						margin-bottom: 0;
					}
					&>.tip0{
						margin-bottom:0
					}
				}
			}
		}
	}
}
</style>