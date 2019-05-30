<template>
	<div id="app">
		<!-- element-ui 的绑定方式 -->
		<el-radio v-model="fruit" label="apple">苹果</el-radio>
		<el-radio v-model="fruit" label="banana">香蕉</el-radio>
		<el-radio v-model="fruit" label="orange">橘子</el-radio>
		<br>
		<!-- 原来的绑定方式 -->
		<input type="radio" v-model="fruit" value="apple">苹果
		<input type="radio" v-model="fruit" value="banana">香蕉
		<input type="radio" v-model="fruit" value="orange">橘子
	</div>
</template>

<script>
	export default{
		name: 'App',
		data(){
			return {
				fruit: ''
			}
		}
	}
</script>

<style>
</style>
