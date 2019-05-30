<template>
	<div id="app">
		<el-button @click="isShow = true">显示 dialog 标签</el-button>
		<el-dialog title="提示" :visible.sync="isShow" >
			<!-- 没有指定名字的，就是 dialog 的body 部分 -->
			<template>
				<el-form :model="formData">
					<el-form-item label="用户名">
						<el-input clearable v-model="formData.username" placeholder="请输入用户名"></el-input>
					</el-form-item>
					<el-form-item label="密码">
						<el-input show-password v-model="formData.password" placeholder="请输入密码"></el-input>
					</el-form-item>
				</el-form>
			</template>
			
			<!-- 这是 dialog 的 footer 部分 -->
			<template v-slot:footer>
				<el-button @click="isShow = false">取消</el-button>
				<el-button @click="isShow = false">确认</el-button>
			</template>
		</el-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isShow: false,
			formData: {
				username: '',
				password: ''
			}
		};
	}
};
</script>

<style>
</style>
