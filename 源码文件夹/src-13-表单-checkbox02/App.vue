<template>
	<div id="app">
		<!-- min 可以限制至少选中 min 项
		* 	 max 可以限制最多选中 max 项
		*  -->
		<el-checkbox-group v-model="selectedFruits" :min="1" :max="2">
			<el-checkbox label="apple">苹果</el-checkbox>
			<el-checkbox label="banana">香蕉</el-checkbox>
			<el-checkbox label="orange">橘子</el-checkbox>
		</el-checkbox-group>
	</div>
</template>

<script>
	export default{
		name: 'App',
		data(){
			return {
				selectedFruits: [],
			}
		},
	}
</script>

<style></style>
