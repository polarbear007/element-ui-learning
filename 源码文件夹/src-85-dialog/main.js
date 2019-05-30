import Vue from 'vue';
// 引入模块
import ElementUI from 'element-ui';
// 引入 css 文件， 这个 index.css 文件其实也是一个打包过的文件
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import store from './store.js';

// 通过 use() 函数启用 element-ui 插件
Vue.use(ElementUI);

new Vue({
	el: '#app',
	components:{
		App
	},
	template: "<App/>",
	store
})