<template>
	<div id="app">
		<!-- 我们可以在 el-select 标签上面添加一个 multiple 属性
		*    那么就可以一次性选中多个值
		*  -->
		<el-select v-model="selected" multiple placeholder="请选择">
			<el-option v-for="(option, index) in options" 
					   :key='index'
					   :value="option.value"
					   :label="option.label"
		    ></el-option>
		</el-select>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			// 如果我们可以一次性选中多个值，那么绑定的 selected 就应该是一个数组
			selected: [],
			options: [
				{value: 'bj', label: '北京'},
				{value: 'sh', label: '上海'},
				{value: 'sz', label: '深圳'},
				{value: 'xm', label: '厦门'},
				{value: 'hz', label: '杭州'},
			]
		}
	},
};
</script>

<style></style>
