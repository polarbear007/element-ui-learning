import Vue from 'vue';
// 引入element-ui  插件中的部分组件
import {Button} from 'element-ui';
// 引入 css 文件， 这个 index.css 文件其实也是一个打包过的文件
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

// 通过 use() 函数启用 element-ui 插件的 Button 组件
Vue.use(Button);

new Vue({
	el: '#app',
	components:{
		App
	},
	template: "<App/>"
})