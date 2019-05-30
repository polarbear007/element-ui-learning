<template>
	<div id="app">
		<el-row>
			<el-col :span="7">
				<el-menu background-color="#ffffff"
						 text-color="#303133"
						 active-text-color="#409EFF">
					<el-submenu index="1">
						<template v-slot:title>用户管理</template>
						<!-- 我们可以使用 el-menu-item-group 标签对同一级的菜单进行分组
						*    同样，我们可以使用 具名插槽  slot = title 设置每一组菜单的名字
						*  -->
						<el-menu-item-group>
							<template v-slot:title>普通管理员权限</template>
							<el-menu-item index="1-1">添加用户</el-menu-item>
							<el-menu-item index="1-2">查询用户</el-menu-item>
							<el-menu-item index="1-3">修改用户</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group>
							<template v-slot:title >超级管理员权限</template>
							<el-menu-item index="1-4">删除用户</el-menu-item>
						</el-menu-item-group>
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
