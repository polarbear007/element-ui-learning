<template>
	<div id="app">
		<el-form :model="data" :rules="rules" label-position="right" label-width="100px" :inline="true">
			<el-form-item label="用户名" prop="username">
				<el-input clearable v-model="data.username" placeholder="请输入用户名"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input clearable show-password v-model="data.password" placeholder="请输入密码"></el-input>
			</el-form-item>
			<el-form-item label="邮箱" prop="email">
				<el-input clearable v-model="data.email" placeholder="请输入邮箱"></el-input>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			data: {
				username: '',
				password: ''
			},
			rules: {
				username: [
					{ required: true, message: '用户名不能为空', trigger: 'blur' }, 
					{ min: 5, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur' },
					{ pattern: /^\w+$/, message: '只能使用大小写字母、数字和下划线'}
				],
				password:[
					{ required: true, message: '密码不能为空', trigger: 'blur'},
					{ min: 5, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur' }
				],
				email: [
					{ required: true, message: '邮箱不能为空', trigger: 'blur'},
					{ type: 'email', message: '输入的邮箱格式不合法', trigger: 'blur'},
				]
			}
		};
	},
	methods: {}
};
</script>

<style></style>
