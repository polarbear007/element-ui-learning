<template>
	<div id="app">
		<!-- el-dropdown 标签主要包含两个部分：
		*    1、 标题部分（一直显示）===> 对应默认插槽
		*    2、 下拉菜单部分（触发才会显示）===> 对应 dropdown 插槽 
		*          下拉菜单部分由 el-dropdown-menu 标签 和 el-dropdown-item 标签组成 -->
		<el-dropdown>
			<span class="el-dropdown-link">
				学科
				<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
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
	methods: {}
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
