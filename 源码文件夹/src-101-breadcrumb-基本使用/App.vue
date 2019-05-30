<template>
	<div id="app">
		<!-- 使用 separator 指定分隔符 -->
		<el-breadcrumb separator="/">
			<!-- 可以直接使用 to 属性指定路由地址 -->
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<!-- 可以使用a 标签指定地址 -->
			<el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
			<!-- 也可以不指定地址 -->
			<el-breadcrumb-item>活动列表</el-breadcrumb-item>
			<el-breadcrumb-item>活动详情</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style></style>
