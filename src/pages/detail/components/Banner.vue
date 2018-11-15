<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" :src="this.bannerImg" alt="">
			<div class="banner-info">
				<div class="banner-title">
					{{this.sightName}}
				</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe632;</span>
					39
				</div>
			</div>
		</div>
		<fade-animation>
			<common-gallary 
				:imgs="gallaryImgs" 
				v-show="showGallary"
				@close="handleGallaryClose"
			></common-gallary>
		</fade-animation>
	</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
	name:'DetailBanner',
	props: {
		sightName: String,
		bannerImg: String,
		gallaryImgs: Array
	},
	data () {
		return {
			showGallary: false,
			imgs: ['http://img1.qunarzz.com/sight/p0/1505/31/31aefaba792d771b.water.jpg_r_800x800_ab613da9.jpg','http://img1.qunarzz.com/sight/p0/201301/11/0075e351765d21f393835fbb.jpg_r_800x800_9264dc0c.jpg']
		}
	},
	components: {
		CommonGallary,
		FadeAnimation
	},
	methods:{
		handleBannerClick () {
			this.showGallary = true
		},
		handleGallaryClose () {
			this.showGallary = false
		}
	}
}
</script>

<style lang="stylus" scoped>
	.banner
		position: relative
		overflow: hidden
		height: 0
		padding-bottom: 55%
		.banner-img
			width:100%
		.banner-info
			display: flex
			position: absolute
			left: 0
			right: 0
			bottom: 0
			line-height: .6rem
			color:#fff
			background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
			.banner-title
				flex:1
				font-size:.32rem
				padding:0 .2rem
			.banner-number
				height:.32rem				
				line-height: .32rem
				margin-top: .14rem
				padding: 0 .4rem
				border-radius: .2rem
				background: rgba(0, 0, 0, 0.8)
				font-size:.24rem
				.banner-icon
					font-size:.24rem
					
</style>