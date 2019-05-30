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
import axios from 'axios';
export default {
	data() {
		// 这里我们可以把校验的函数定义在 data() 函数内部，然后在返回值 里面引用
		// 如果我们想要定义在 methods 里面的话，那么就需要通过   this.xxxx 调用
		
		// 这个校验函数，如果校验通过，那么我们就执行 callback 函数
		// 如果校验失败的话，那么我们还是执行 callback 函数，但是要在里面放进一个 Error 对象
		
		// rule 就是校验规则对象
		// value 就是表单输入的值
		
		// 这种自定义的校验，不仅可以异步校验，也可以进行前面有试过的，长度校验、非空校验、正则校验等。
		 function validateUsernameExist(rule, value, callback) {
			 // 懒得写接口了，这里随便写个 setTimeout 模拟一下异步校验
			setTimeout(function(){
				// 只要用户名不是 eric ，我们就认为没有重复，校验成功
				if(value != 'jerry'){
					callback();
				}else{
					callback(new Error('用户名已经存在'));
				}
			}, 1000);
		}
		return {
			data: {
				username: '',
				password: ''
			},
			rules: {
				username: [
					{ required: true, message: '用户名不能为空', trigger: 'blur' },
					{ min: 5, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur' },
					{ pattern: /^\w+$/, message: '只能使用大小写字母、数字和下划线' },
					{ validator: validateUsernameExist, trigger: 'blur'}
				],
				password: [
					{ required: true, message: '密码不能为空', trigger: 'blur' }, 
					{ min: 5, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur' },
				],
				email: [
					{ required: true, message: '邮箱不能为空', trigger: 'blur' }, 
					{ type: 'email', message: '输入的邮箱格式不合法', trigger: 'blur' },
				]
			}
		};
	}
};
</script>

<style></style>
