
<template>
	<div id="app">
		<!-- 最基本的进度条，只需要指定百分比 -->
		<el-progress :percentage="20"></el-progress>
		<!-- 通过 color 设置进行条的颜色 -->
		<el-progress :percentage="10" color="red"></el-progress>
		<!-- 通过  stroke-width 设置 进度条 的粗细 -->
		<el-progress :percentage="80" color="yellowgreen" :stroke-width="12"></el-progress>
		<!-- 通过  status 设置进度条的状态，默认就 success / exception 两种。会有不同的样式 -->
		<el-progress :percentage="100" status="success" :stroke-width="12"></el-progress>
		<el-progress :percentage="100" status="exception" :stroke-width="12"></el-progress>
		
		<!-- 通过 type 设置进度条的类型，默认是条形的进度条；  还可以设置为环形的进度条。 -->
		<el-progress :percentage="65" color="pink" type="circle"></el-progress>
	</div>
</template>

<script>
export default {
	data() {
		return {
		};
	},
	methods: {
	}
};
</script>

<style></style>
