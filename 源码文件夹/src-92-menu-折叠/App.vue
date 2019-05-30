<template>
	<div id="app">
		<el-row>
			<el-col :span="7">
				<el-radio-group v-model="isCollapse" size="mini">
					<el-radio-button :label="true" >关闭</el-radio-button>
					<el-radio-button :label="false">开启</el-radio-button>
				</el-radio-group>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="7">
				<el-menu mode="horizontal"
				         background-color="#ffffff"
						 text-color="#303133"
						 active-text-color="#409EFF"
						 :collapse="isCollapse">
					<el-submenu index="1">
						<template v-slot:title>
							<i class="el-icon-user-solid"></i>
							<span>用户管理</span>
						</template>
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
					<el-menu-item index="2">
						<i class="el-icon-s-shop"></i>
						<span>商户管理</span>
					</el-menu-item>
					<el-menu-item index="3">
						<i class="el-icon-s-order"></i>
						<span>订单管理</span>
					</el-menu-item>
					<el-menu-item index="5">
						<i class="el-icon-s-check"></i>
						<span>权限管理</span>
					</el-menu-item>
				</el-menu>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	data(){
		return {
			isCollapse: true
		}
	}
}
</script>

<style></style>
