<template>
	<div class="icons">
		<swiper :options="swiperOption">
			<swiper-slide v-for="(page,index) in pages" :key="index">
				<div class="icon"  v-for="item in page" :key="item.id">
					<div class="icon-img">
						<img class="icon-img-content" :src="item.imgUrl" alt="">
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
export default {
	name:'HomeIcons',
	props:{
		list: Array
	},
	data: function () {
		return {
			swiperOption:{
				pagination: '.swiper-pagination',
				autoplay:false
			}/*,
			iconList:[{
				id:'0001',
				desc:'景点门票',
				imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
			},{
				id:'0002',
				desc:'古镇',
				imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
			},{
				id:'0003',
				desc:'一日游',
				imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
			},{
				id:'0004',
				desc:'苏州必游',
				imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
			},{
				id:'0005',
				desc:'打卡圣地',
				imgUrl:'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
			},{
				id:'0006',
				desc:'华谊兄弟',
				imgUrl:'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
			},{
				id:'0007',
				desc:'苏州园林',
				imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
			},{
				id:'0008',
				desc:'拙政园',
				imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
			},{
				id:'0009',
				desc:'拙政园1',
				imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
			}]*/
		}
	},
	computed: {
		pages () {
			const pages = []
			this.list.forEach((item, index) => {
				const page = Math.floor(index / 8)
				if (!pages[page]){
					pages[page] = []
				}
				pages[page].push(item)
			})
			return pages

		}
	}
}
</script>

<style lang="stylus" scoped>
	@import '../../../assets/styles/varibles.styl'
	@import '../../../assets/styles/mixins.styl'
	.icons >>> .swiper-container
		width:100%
		height:0
		padding-bottom:50%
		overflow: initial
		.swiper-pagination-bullets
			bottom:-7px
			.swiper-pagination-bullet
				width:5px
				height:5px
			
	.icons
		margin-top:.1rem
		.icon
			position:relative
			overflow:hidden
			float:left
			width:25%
			height:0
			padding-bottom:25%
			.icon-img
				position:absolute
				top:0
				left:0
				right:0
				bottom:.44rem
				box-sizing:border-box
				padding:.1rem
				.icon-img-content
					display:block
					margin:0 auto
					height:100%
			.icon-desc
				position:absolute
				left:0
				right:0
				bottom:0
				height.44rem
				line-height:.44rem
				text-align:center
				color:$darkTextColor
				ellipsis()
</style>