<template>
	<div id="app">
		<!-- 使用 v-model 绑定一个activeName 变量，这个变量对应下面的  el-tab-pane 标签的 name 属性
		*    当 activeName = user 的时候，那么显示的内容就会切换到 user 对应的 el-tab-pane 标签
		*  -->
		<el-tabs v-model="activeName">
			<!-- label 就是标签的名字
			*    name 就是指定 el-tab-pane 的标识
			*    标签内部分可以写任意的 html 元素
			*  -->
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
