<template>
	<div id="app">
		<el-button @click="testAlert">test-alert</el-button>
		<el-button @click="testAlert2">test-alert2</el-button>
	</div>
</template>

<script>

export default {
	data() {
		return {};
	},
	methods:{
		testAlert(){
			this.$alert('This is message!', "This is title")
		},
		testAlert2() {
			this.$alert('This is message!', 'This is title', {
				// 这是配置确认按钮上面的文字的
				confirmButtonText: 'ok!',
				// 这是关闭弹窗以后的回调函数，不管你是如何关闭弹窗的
				// 都会回调此函数
				// 如果你是点击确认按钮关闭的，那么 action 的值为 confirm
				// 如果你是点击右上角的关闭按钮关闭的，那么action 的值为 cancel
				callback: action => {
					this.$message({
						type: 'info',
						message: '操作成功！closed by ' + action,
						showClose: true,
						duration: 1000
					})
				}
			})
		}
	}
};
</script>

<style>
</style>
