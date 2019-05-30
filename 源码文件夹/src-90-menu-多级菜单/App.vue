<template>
	<div id="app">
		<el-row>
			<el-col :span="20">
				<el-menu mode="horizontal"
						 background-color="#ffffff"
						 text-color="#303133"
						 active-text-color="#409EFF">
					<!-- 使用 el-submenu 标签来替换原来的 el-menu-item 标签
					*    然后原来写在标签体里面的菜单名，可以使用具名插槽   slot=title 设置
					*  -->
					<el-submenu index="1">
						<template v-slot:title>用户管理</template>
						<el-menu-item index="1-1">添加用户</el-menu-item>
						<el-menu-item index="1-2">查询用户</el-menu-item>
						<el-menu-item index="1-3">修改用户</el-menu-item>
						<el-menu-item index="1-4">删除用户</el-menu-item>
					</el-submenu>
					<el-menu-item index="2">商户管理</el-menu-item>
					<el-menu-item index="3">订单管理</el-menu-item>
					<el-menu-item index="4">注册管理</el-menu-item>
					<el-menu-item index="5">权限管理</el-menu-item>
				</el-menu>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	
}
</script>

<style></style>
