<template>
	<div id="app">
		<el-select v-model="selected" placeholder="请选择">
			<el-option v-for="(option, index) in options" 
					   :key='index'
					   :value="option.value"
					   :label="option.label">
			<!-- 我们可以直接在 el-option 里面添加样式模板
			*    el-option 组件模板中已经预留了默认的 slot 位置
			*  -->
			<span style="float: left;">{{option.label}}</span>
			<span style="float: right;">{{option.value}}</span>
			</el-option>
		</el-select>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			selected: '',
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
