<template>
	<div class="wrapper">
		<swiper :options="swiperOption" v-if="showSwiper">
		    <swiper-slide v-for="item in list" :key="item.id"><img class="swiper-img" :src="item.imgUrl" alt=""></swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
	  	</swiper>
  	</div>
</template>

<script>
export default {
	name:'HomeSwiper',
	props:{
		list: Array
	},
	data: function () {
		return {
			swiperOption:{
				pagination:'.swiper-pagination',
				loop:true
			}/*,
			swiperList:[{
				id:'0001',
				imgUrl:'http://img1.qunarzz.com/piao/fusion/1809/3a/733d3de8ee68cb02.jpg_750x200_6548e9b6.jpg'
			},
			{
				id:'0002',
				imgUrl:'http://img1.qunarzz.com/piao/fusion/1809/82/c94c9a77de17f902.jpg_750x200_a8419488.jpg'
			}]*/
		}
	},
	computed: {
		showSwiper () {
			return this.list.length
		}
	}
}
</script>

<style lang="stylus" scoped>
	.wrapper >>> .swiper-pagination-bullet-active
			background:#fff
	.wrapper
		width:100%
		height:0
		overflow:hidden
		padding-bottom:26.67%
		background:#ccc
		.swiper-img
			width:100%
</style>