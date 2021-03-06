import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		isShow: false,
	},
	mutations:{
		updateIsShow(state, payload){
			state.isShow = payload;
		}
	}
})