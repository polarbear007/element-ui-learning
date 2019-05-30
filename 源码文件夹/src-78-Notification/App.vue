<template>
	<div id="app">
		<el-button @click="testNotify">test-notify</el-button>
		<el-button @click="testNotify2">test-notify2</el-button>
		<el-button @click="testNotify3">test-notify3</el-button>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods:{
		testNotify(){
			// 【注意】 这个 $notify(options) 只能接收一个 options 配置对象
			// 不像 $message(msg, options)  可以直接接收一个字符串
			// 所以以我们千万不要使用  $notify('hello world')
			this.$notify({
				type: 'success',
				message: 'hello world'
			});
		},
		testNotify2(){
			// 我们可以使用 duration 设置多少毫秒以后自动关闭
			this.$notify({
				type: 'warning',
				message: '这是一条2秒后自动关闭的消息',
				duration: 2000
			})
		},
		testNotify3(){
			// 如果 duration 值为0的话，表示永远不会自动关闭
			this.$notify({
				type: 'error',
				message: '这是一条永远不会自动关闭的消息',
				duration: 0
			})
		}
	}
};
</script>

<style>
</style>
