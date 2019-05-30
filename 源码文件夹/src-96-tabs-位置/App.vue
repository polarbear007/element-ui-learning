<template>
	<div id="app">
		<!-- 我们可以通过 tab-position 指定位置 -->
		<el-tabs v-model="activeName" tab-position="left">
			<el-tab-pane label="用户管理" name="user">用户管理页面</el-tab-pane>
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
	},
	methods:{
		
	}
}
</script>

<style></style>
