<template>
	<div id="classify" class="mui-content mui-row mui-fullscreen">
		<!--左边-->
		<div class="mui-col-xs-3">
			<div  id="segmentedControls" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical">
				<a :class="{'mui-control-item':true, 'mui-active':!itemIndex}" :href="'#'+itemIndex" v-for="(item, itemIndex) in datas" :key='itemIndex'>{{item.name}}</a>
			</div>
		</div>
		<!--右边-->
		<div class="mui-col-xs-9">
			<div class="mui-control-content mui-active" 
				:id="classifyIndex" v-for="(classify, classifyIndex) in datas" :key='classifyIndex'>
				<ul class="mui-table-view">
					<!--横幅-->
					<li class="mui-table-view-cell">
						<a :href="classify.banner.href" :title='classify.banner.title' class="banner">
							<img :src="classify.banner.img"/>
						</a>
					</li>
					<!--栏目-->
					<li class="mui-table-view-cell" v-for="(lanmu, lanmuIndex) in classify.lanmu" :key='lanmuIndex'>
						<!--标题-->
						<div class="lanmuTitle">
							<a class="mui-pull-left">{{lanmu.name}}</a>
							<a :herf='lanmu.href' class="mui-pull-right">{{lanmu.enterRight}}</a>
						</div>
						<!--内容-->
						<div class="lanmuContent">
							<!--图片类型-->
							<div class="typePicture" v-if="lanmu.type=='picture'">
								<a  class="mui-pull-left" :href="i.href" v-for="(i, iIndex) in lanmu.data" :key="iIndex">
									<div>
										<img :src="i.img"/>
									</div>
									<div class="title">{{i.title}}</div>
								</a>
							</div>
							<!--表格类型-->
							<div class="typeTable" v-if="lanmu.type=='table'">
								<!--未展开表格-->
								<table border="0" cellspacing="0" cellpadding="0" v-show='lanmu.data2rowShow'>
									<td v-for="(i, iIndex) in lanmu.data2row" :key="iIndex">
										<a :href='i.href'>{{i.title}}</a>
									</td>
									<!--展开-->
									<td class="btnMore" v-show='lanmu.data.length>6'>
										<span @tap='tableMoreLess(classifyIndex, lanmuIndex)'>展开</span>
										<span class="mui-icon mui-icon-arrowdown"></span>
									</td>
								</table>
								<!--展开表格-->
								<table border="0" cellspacing="0" cellpadding="0" v-show='!lanmu.data2rowShow'>
									<td v-for="(i, iIndex) in lanmu.data" :key="iIndex">
										<a :href='i.href'>{{i.title}}</a>
									</td>
									<!--展开-->
									<td class="btnMore">
										<span @tap='tableMoreLess(classifyIndex, lanmuIndex)'>收起</span>
										<span class="mui-icon mui-icon-arrowup"></span>
									</td>
								</table>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import classifyDatas from '../../datas/classify.js'
export default {
	name: 'classify',
	data(){
		return {
			datas: classifyDatas,
		}
	},
	computed:{
	},
	beforeMount(){
		this.lanmuTableType2Row();
		this.fun();
	},
	methods: {
		//当当上边它的数据是两行然后展开，然后根据数据设计做的
		lanmuTableType2Row(){
			for(var i in this.datas){
				for(var r in this.datas[i]['lanmu']){
					var arr = this.datas[i]['lanmu'][r]['data'].filter((item, index)=>{
						return index<5
					})
					this.datas[i]['lanmu'][r].data2row = arr;
					this.datas[i]['lanmu'][r].data2rowShow = true;
				}
			}
		},
		tableMoreLess(){
			var classify = arguments[0];//类名
			var lanmu = arguments[1];//具体栏目名，类别下的所有栏目放在'lanmu'下
			var showHide = !this.datas[classify]['lanmu'][lanmu]['data2rowShow'];
			//指针改变才能促使更新
			delete this.datas[classify]['lanmu'][lanmu]['data2rowShow'];
			this.datas[classify]['lanmu'][lanmu] = Object.assign({}, this.datas[classify]['lanmu'][lanmu], { 'data2rowShow': showHide });
		},
		fun(){
			for(var i=0;i<10;i++){
				this.datas.push({
					name:i,
					banner: {
					img: './assets/image/2017/7/item1banner.png',
					href: '#',
					title: '图书的banner'
					},
				})
			}
		}
	}
}
</script>

<style lang='less'>
	#classify{
		padding-top:44px;
		&>[class*="mui-col-"] {
			height: 100%;
		};
		.mui-col-xs-3,
		.mui-control-content {
			overflow-y: auto;
			height: 100%;
		};
		.mui-segmented-control .mui-control-item {
			line-height: 50px;
			width: 100%;

		};
		.mui-control-item.mui-active{
			box-sizing: border-box;
			border-left:3px solid #DD524D;
		}
		.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active {
			background-color: #fff;
		};
		.mui-col-xs-9 {
			border-left: 1px solid #c8c7cc;
			.mui-control-content {
				.mui-table-view {
					padding-bottom: 50px;
					.mui-table-view-cell {
						.banner{
							margin:0;
							padding:0px;
							img{
								width:100%;
							}
						};
						.lanmuTitle {
							height:36px;
							line-height: 36px;
							overflow: hidden;
							a{
								font-size: 13px;
								color: #1e1e1e;
							}
							.mui-pull-right {
								color:#ACACB4;
							}
						};
						.lanmuContent {
							/*height: 120px;*/
							.typePicture {
								a{
									display:block;
									width:33.33%;
									padding:4px;
									img{
										width:100%;
										/*height:90px;*/
									}
									.title{
										color: #4d525d;
										font-size: 11px;
										text-align: center;
									}
								}
							};
							.typeTable{
								padding: 0;
								table {
									padding: 0;
									margin: 0;
									width: 100%;
										td{
											height: 44px;
											line-height: 44px;
											width: 33.33%;
											float: left;
											border: 0.5px solid #ddd;
											a{
												color:#000;
												font-size: 11px;
											}
											&[class='btnMore'] {
												background:#fafafa;
												&>span{
													color:#555;
													font-size:13px;
													&:nth-child(2){
														position:relative;
														&::before{
															position:absolute;
															left:-2px;
															top:-10px;
															font-size:12px;
														}
													}
												}
											}
										}
								}
							}
						}
					}
				}
			}
		}
	}
</style>