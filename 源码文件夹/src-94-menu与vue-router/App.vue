<template>
	<div id="app">
		<el-row>
			<el-col :span="7">
				<!-- 使用 router=true 开启vue-router 支持模式  -->
				<el-menu background-color="#ffffff"
						 text-color="#303133"
						 active-text-color="#409EFF"
						 router>
					<el-submenu index="1">
						<template v-slot:title>
							<i class="el-icon-user-solid"></i>
							<span>用户管理</span>
						</template>
						<el-menu-item-group>
							<template v-slot:title>普通管理员权限</template>
							<el-menu-item index="1-1" route="/user/addUser">添加用户</el-menu-item>
							<el-menu-item index="1-2" route="/user/searchUser">查询用户</el-menu-item>
							<el-menu-item index="1-3" route="/user/updateUser">修改用户</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group>
							<template v-slot:title >超级管理员权限</template>
							<el-menu-item index="1-4" route="/user/deleteUser">删除用户</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-menu-item index="2" route="/shop">
						<i class="el-icon-s-shop"></i>
						<span>商户管理</span>
					</el-menu-item>
					<el-menu-item index="3" route="/order">
						<i class="el-icon-s-order"></i>
						<span>订单管理</span>
					</el-menu-item>
					<el-menu-item index="5" route="/authorization">
						<i class="el-icon-s-check"></i>
						<span>权限管理</span>
					</el-menu-item>
				</el-menu>
			</el-col>
			<!-- 导航栏剩余部分作为显示页面的主体部分 -->
			<el-col :span="17">
				<router-view></router-view>
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
	},
	methods:{
		
	}
}
</script>

<style></style>
