<template>
	<div id="app">
		<el-tabs v-model="activeName">
			<el-tab-pane name="user">
				<template v-slot:label>
					<i class="el-icon-user"></i>
					用户管理
				</template>
				用户管理页面
			</el-tab-pane>
			<el-tab-pane label="店铺管理" name="shop">店铺管理页面</el-tab-pane>
			<el-tab-pane label="订单管理" name="order">订单管理页面</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
export default {
	data(){
		return {
			activeName: 'user'
		}
	}
}
</script>

<style></style>
