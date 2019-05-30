<template>
	<div id="app">
		<el-button @click="testPrompt">test-prompt</el-button>
		<el-button @click="testPrompt2">test-prompt2</el-button>
		<el-button @click="testPrompt3">test-prompt3</el-button>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods:{
		testPrompt(){
			this.$prompt('请输入您的邮箱', '提示')
			// 按确认按钮后会调用 .then()
			// 按取消或者关闭按钮后会调用  .catch()
			.then((value)=>{
				this.$message({
					type: 'success',
					message: '你输入的邮箱是： ' + value
				});
			}).catch(()=>{
				this.$message({
					type: 'error',
					message: '取消输入'
				});
			})
		},
		testPrompt2(){
			// 使用 options 对象
			// 我们可以在配置对象里面添加  inputPattern 属性，接收一个正则对象
			// 然后设置 inputErrorMessage 属性，当输入的内容校验失败时，会自动显示错误提示，同时无法点击确认按钮
			this.$prompt('请输入您的邮箱', '提示', {
				confirmButtonText: '确认输入',
				cancelButtonText: '取消输入',
				inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
				inputErrorMessage: '邮箱格式不正确'
			}).then((value)=>{
				this.$message({
					type: 'success',
					message: '你输入的邮箱是： ' + value
				});
			}).catch(()=>{
				this.$message({
					type: 'error',
					message: '取消输入'
				});
			})
		},
		testPrompt3(){
			this.$prompt('请输入您的邮箱', '提示', {
				// 默认情况下， inputPattern 只能做正则校验，而且只能写一个正则表达式
				// 如果我们的需求比较复杂，就可以使用 inputValidator 来实现
				// 这个校验函数，返回 true 表示校验成功，返回false 表示校验失败
				// 如果返回一个新的字符串，则会使用这个字符串替换输入的字符串（一般不用）
				inputValidator: (input)=>{
					let reg = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
					return reg.test(input);
				},
				inputErrorMessage: '邮箱格式不正确'
			}).then((value)=>{
				this.$message({
					type: 'success',
					message: '你输入的邮箱是： ' + value
				});
			}).catch(()=>{
				this.$message({
					type: 'error',
					message: '取消输入'
				});
			})
		}
	}
};
</script>

<style>
</style>
