<template>
	<div id="app">
		<!-- 注意： 虽然我们没有加类名，但是显示到页面时，<el-container> 标签会自动添加 el-container 类名
		*           下面的其他标签也是一样的 -->
		<el-container>
			<el-header>Header</el-header>
			<el-container>
				<el-aside width="100px">Aside</el-aside>
				<el-main>Main</el-main>
			</el-container>
			<el-footer>Footer</el-footer>
		</el-container>
	</div>
</template>

<script>
export default {
	name: 'App'
};
</script>

<style>
.el-container {
	width: 500px;
}
.el-header {
	background-color: pink;
}
.el-main {
	background-color: greenyellow;
}
.el-footer {
	background-color: royalblue;
}
.el-aside {
	background-color: peachpuff;
}
</style>
