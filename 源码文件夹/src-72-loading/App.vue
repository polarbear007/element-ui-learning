<template>
	<div id="app">
		<div id="box" style="width: 200px; height: 200px; border: 1px solid black;"></div>
		<el-button @click="loadContent">加载数据</el-button>
	</div>
</template>

<script>
// 引入一个 Loading 组件，注意 L 要大写
import {Loading} from 'element-ui';

export default {
	data() {
		return {};
	},
	methods:{
		loadContent(){
			// service 函数需要一个 options 配置对象，你全部使用默认配置的话，需要传入 {}
			// 这个 service 函数会返回一个  loading 实例，我们可以调用这个实例的 close 函数关闭加载
			// target 接收任意一个 dom 元素对象，或者这个元素对象的id 选择器
			// text:  加载时显示的文字
			// spinner: 加载时显示的图标，可以写一个类名
			// background: 可以使用 rgba()  指定一个半透明的背景颜色
			// body ： 相当于  .body 修饰符
			// fullscreen : 相当于  .fullscreen 修饰符
			// lock:   相当于 .lock 修饰符
			let loadingInstance = Loading.service({
				target: '#box',
				text: '正在拼命加载中...',
				spinner: 'el-icon-loading',
				background: 'rgba(0, 0, 0, 0.5)',
				body: false, 
				fullscreen: false, 
				lock: false
			});
			setTimeout(()=>{
				loadingInstance.close();
			}, 2000);
		}
		
	}
};
</script>

<style></style>
