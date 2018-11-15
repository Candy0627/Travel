<template>
	<div>
		<city-header></city-header>
		<city-search 
			:cities="allcities">
				
		</city-search>
		<city-list 
			:hot="hotCities" 
			:cities="allcities" 
			:letter="letter"
		></city-list>
		<city-alphabet 
			:cities="allcities" 
			@change="handleLetterChange"
		>
		</city-alphabet>		
	</div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
	name: 'City',
	components: {
		CityHeader,
		CitySearch,
		CityList,
		CityAlphabet
	},
	data: function () {
		return {
			hotCities: [],
			allcities: {},
			letter:''
		}
	},
	methods: {
		getCityInfo: function () {
			axios.get('/api/city.json')
				.then(this.handleGetCityInfoSucc)
		},
		handleGetCityInfoSucc: function (res) {
			// console.log(res)
			res = res.data
			if(res.ret && res.data){
				this.hotCities = res.data.hotCities;
				this.allcities = res.data.cities;
			}
		},
		handleLetterChange: function (letter){
			// 手动点击字母的时候出发的点击事件
			this.letter = letter
			// console.log(letter)
		}
	},
	mounted: function () {
		this.getCityInfo()
	}
}
</script>

<style lang="stylus" scoped>
</style>