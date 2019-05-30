<template>
	<div id="app">
		<el-upload class="avatar-uploader" 
		           action="http://localhost:8081/upload" 
							 :show-file-list="false" 
							 :before-upload="beforeAvatarUpload">
			<img v-if="imageUrl" :src="imageUrl" class="avatar" />
			<i v-else class="el-icon-plus avatar-uploader-icon"></i>
		</el-upload>
	</div>
</template>

<script>
export default {
	data() {
		return {
			imageUrl: ''
		};
	},
	methods: {
		// 这个回调函数会返回一个 file 对象，这个 file 对象是js 原生的file 对象
		// 里面包含着文件名、文件大小、文件类型、最后修改时间等信息
		// 【注意】 因为安全原因，我们无法拿到文件对应的绝对路径。
		beforeAvatarUpload(file) {
			const isJPG = file.type === 'image/jpeg';
			const isLt2M = file.size / 1024 / 1024 < 2;

			if (!isJPG) {
				alert('上传头像图片只能是 JPG 格式!');
			}
			if (!isLt2M) {
				alert('上传头像图片大小不能超过 2MB!');
			}
			// 如果这个回调函数返回 false 的话，那么上传操作会被阻止
			return isJPG && isLt2M;
		}
	}
};
</script>

<style>
.avatar-uploader .el-upload {
	border: 1px dashed #d9d9d9;
	border-radius: 6px;
	cursor: pointer;
	position: relative;
	overflow: hidden;
}
.avatar-uploader .el-upload:hover {
	border-color: #409eff;
}
.avatar-uploader-icon {
	font-size: 28px;
	color: #8c939d;
	width: 178px;
	height: 178px;
	line-height: 178px;
	text-align: center;
}
.avatar {
	width: 178px;
	height: 178px;
	display: block;
}
</style>
