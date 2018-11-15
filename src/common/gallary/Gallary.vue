<template>
	<div class="container" @click="handleGallaryClick">
		<div class="wrapper">
			<swiper :options="swiperOptions">
			    <swiper-slide v-for="(item,index) in imgs" :key="index">
			    	<img class="gallary-img" :src="item" alt="">
			    </swiper-slide>
			    <div class="swiper-pagination"  slot="pagination"></div>
		  	</swiper>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CommonGallary',
	props: {
		// gallaryImgs: Array
		imgs: {
			type:Array,
			default () {
				return []
			}
		}
	},
	data () {
		return {
			/*gallaryImg:[
				{
					'id':'001',
					'imgUrl':'http://img1.qunarzz.com/sight/p0/1505/31/31aefaba792d771b.water.jpg_r_800x800_ab613da9.jpg'
				},{
					'id':'002',
					'imgUrl':'http://img1.qunarzz.com/sight/p0/201301/11/0075e351765d21f393835fbb.jpg_r_800x800_9264dc0c.jpg'
				}
			],*/
			// observer或observerParents的使用，使得swiper插件监听这个元素或父级元素发生dom结构变化的时候，会自动的自我刷新一次
			swiperOptions: {
				pagination:'.swiper-pagination',
				paginationType: 'fraction',
				observeParents:true,
				observer:true
			}
		}
	},
	methods: {
		handleGallaryClick () {
			this.$emit('close')
		}
	}
}
</script>

<style lang="stylus" scoped>
	.container >>> .swiper-container
		overflow:inherit
	.container
		display:flex
		flex-direction:column
		justify-content:center
		z-index:99
		position: fixed
		left:0
		right:0
		top:0
		bottom:0
		background:#000
		.wrapper
			height:0
			width:100%
			padding-bottom:100%
			.gallary-img
				width:100%
			.swiper-pagination
				color:#fff
				bottom:-1rem
</style>