import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import '../node_modules/element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);

new Vue({
	el:'#app',
	components:{
		App
	},
	template:"<App/>"
})