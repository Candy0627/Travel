import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)
/* 下面存放的是vux里面的全局共用的数据 */

export default new Vuex.Store({
	state,
	mutations,
	getters: {
		doubleCity (state) {
			return state.city + '' +state.city
		}
	}
})
