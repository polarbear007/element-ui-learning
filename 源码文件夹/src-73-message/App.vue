<template>
	<div id="app">
		<el-button class="btn" @click="test1">message-test1</el-button>
		<el-button class="btn" @click="test2" type="success">message-test2</el-button>
		<el-button class="btn" @click="test3" type="info">message-test3</el-button>
		<el-button class="btn" @click="test4" type="warning">message-test4</el-button>
		<el-button class="btn" @click="test5" type="danger">message-test5</el-button>
	</div>
</template>

<script>

export default {
	data() {
		return {};
	},
	methods:{
		test1(){
			this.$message('这是一条最普通的消息');
		},
		test2(){
			this.$message({
				message: '这是一条成功的消息',
				type: 'success'
			})
		},
		test3(){
			this.$message({
				message: '这是一条普通的消息',
				type: 'info'
			})
		},
		test4(){
			this.$message({
				message: '这是一条警告的消息',
				type: 'warning'
			})
		},
		test5(){
			// 这里不太一样， type 不是 danger ，而是 error 
			// 我们也可以这样发送错误消息：   
			this.$message.error('这是一条错误消息');
			// this.$message({
			// 	message: '这是一条错误的消息',
			// 	type: 'error'
			// });
		}
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
