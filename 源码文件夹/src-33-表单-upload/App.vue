<template>
	<div id="app">
		<!-- 使用 accept 属性，可以限制只上传特定类型的文件 -->
		<el-upload action="http://localhost:8081/upload"
		           :before-upload="checkBeforeUpload">
			<el-button type="primary">上传文件</el-button>
		</el-upload>
	</div>
</template>

<script>
	export default{
		name: "App",
		methods:{
			checkBeforeUpload(file){
				// 文件大小是否小于 2 M
				let fileSizeCheck = file.size / 1024 / 1024 < 2;
				if(!fileSizeCheck){
					alert(file.name + ': 文件不能超过2M! ');
					return false;
				}
				// 是否是指定类型
				let fileTypeCheck = ['image/x-ms-bmp', 'image/jpeg', 'image/png'].includes(file.type);
				if(!fileTypeCheck){
					alert(file.name + ": 文件类型不符合要求！");
					return false;
				}
				// 文件名是否规范
				let fileNameCheck = /\.\w+$/.test(file.name);
				if(!fileNameCheck){
					alert(file.name + ": 文件名不符合要求！");
					return false;
				}
				
				return true;
			}
		}
	}
</script>

<style>
</style>
