<template>
	<div>
		<div class="title">周末去哪儿</div>
		<ul>
			<li 
				class="item border-bottom" 
				v-for="item in list" 
				:key="item.id">
				<div class="icon-img-wrapper">
					<img class="item-img" :src="item.imgUrl">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>			
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'HomeWeekend',
		props:{
			list:Array
		},
		/*data () {
			return {
				weekendList: [{
					id:'0001',
					imgUrl:'http://img1.qunarzz.com/sight/source/1507/ab/1c456b9cbffc31.jpg_r_640x214_1c2552de.jpg',
					title:'大连圣亚海洋世界',
					desc:'浪漫大连首站，浪漫的海洋主题乐园'
				},{
					id:'0002',
					imgUrl:'http://img1.qunarzz.com/sight/source/1505/3e/18b666031b22e7.jpg_r_640x214_864dce2f.jpg',
					title:'大连圣亚海洋世界',
					desc:'浪漫大连首站，浪漫的海洋主题乐园'
				},{
					id:'0003',
					imgUrl:'http://img1.qunarzz.com/sight/source/1505/d7/5acd9640ee6cb2.jpg_r_640x214_975d2c3f.jpg',
					title:'大连圣亚海洋世界',
					desc:'浪漫大连首站，浪漫的海洋主题乐园'
				}]	
			}
		}*/
	}
</script>

<style lang="stylus" scoped>
	@import '../../../assets/styles/mixins.styl'
	.title
		line-height:.8rem
		background:#eee
		text-indent:.2rem
	.icon-img-wrapper
		overflow:hidden
		height:0
		padding-bottom:33.9%
		.item-img
			width:100%
	.item-info
		padding:.1rem
		.item-title
			line-height:.54rem
			font-size:.32rem
			ellipsis()
		.item-desc
			line-height: .4rem
			color:#ccc
			ellipsis()


</style>