<template>
	<div id="app">
		<!-- 我们可以直接添加 split-button 属性，这样就会使用默认的按钮样式
		*    省得我们自己去添加图标什么的
		*  -->
		<el-dropdown split-button>
			学科
			<el-dropdown-menu slot='dropdown'>
				<el-dropdown-item>语文</el-dropdown-item>
				<el-dropdown-item>数学</el-dropdown-item>
				<el-dropdown-item>英语</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		
	}
};
</script>

<style>
.el-dropdown-link {
	cursor: pointer;
	color: #409eff;
}
.el-icon-arrow-down {
	font-size: 12px;
}
</style>
