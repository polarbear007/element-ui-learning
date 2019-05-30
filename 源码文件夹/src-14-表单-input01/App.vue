<template>
	<div id="app">
		<!-- 把带有图标的 i 标签作为子元素包裹起来 -->
		<el-input placeholder="请选择日期" v-model="input1">
			 <i slot="suffix" class="el-input__icon el-icon-date"></i> 
		</el-input>
		<el-input placeholder="请输入内容" v-model="input2">
			 <i slot="prefix" class="el-input__icon el-icon-search"></i>
		</el-input>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			input1: '',
			input2: ''
		};
	}
};
</script>

<style></style>
