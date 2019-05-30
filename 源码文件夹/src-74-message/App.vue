<template>
	<div id="app">
		<el-button class="btn" type="primary" @click="test1">message-test</el-button>
		<el-button class="btn" type="primary" @click="test2">message-test</el-button>
	</div>
</template>

<script>

export default {
	data() {
		return {};
	},
	methods:{
		test1(){
			this.$message({
				message: '这是一条带关闭按钮的消息',
				showClose: true,
				type: 'success'
			});
		},
		test2(){
			// 默认情况下，消息会在3秒内自动关闭，我们可以通过  duration 
			// 属性来设置自动关闭的时间
			this.$message({
				message: '这条消息会在800毫秒后自动关闭',
				duration: 800,
				showClose: true,
				type: 'success'
			});
		},
	}
};
</script>

<style>
	#app{
		margin-top: 100px;
	}
	.btn{
		margin-top: 30px;
	}
</style>
