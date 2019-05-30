<template>
	<div id="app">
		<!-- 我们可以在 el-select 标签上面添加一个 clearable 属性
		*    那么选中的值就可以被删除
		*  -->
		<el-select v-model="selected" clearable placeholder="请选择">
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
