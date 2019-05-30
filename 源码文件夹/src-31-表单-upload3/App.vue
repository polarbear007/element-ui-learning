<template>
	<div id="app">
		<el-upload class="avatar-uploader" 
				   ref="avatarUpload"
		           action="http://localhost:8081/upload" 
							 :show-file-list="true"
							 :on-change="onChange"
							 :on-progress="onProgress"
							 :on-exceed="onExceed"
							 :on-success="onSuccess"
							 :on-error="onError"
							 :on-preview="onPreview"
							 :on-remove="onRemove"
							 :before-remove="beforeRemove"
							 :before-upload="beforeUpload"
							 :auto-upload="false"
							 :limit="3"
							 >
			<img v-if="imageUrl" :src="imageUrl" class="avatar" />
			<i v-else class="el-icon-plus avatar-uploader-icon"></i>
		</el-upload>
		<el-button @click="uploadAvatar" type="primary">确认上传</el-button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			imageUrl: '',
		};
	},
	methods: {
		onChange(file, fileList){
			// 添加文件到文件列表，文件状态变为 ready 时会回调
			// 上传文件成功时，文件状态变为 success 时也会回调
			// 上传文件失败，文件被删除时，也会回调
			console.log('onChange');
		},
		onProgress(){
			console.log('onProgress');
			// 我们可以在上传的过程中，调用 abort() 函数中止上传。
			//this.$refs.avatarUpload.abort();
		},
		onExceed(){
			// 当文件列表的长度大于 limit 属性设置的值时，就会回调
			// 此函数。 不管文件列表中的文件是已经上传，还是未上传，
			// 都会回调此函数
			console.log('onExceed');
		},
		onSuccess(){
			// 文件上传成功时回调
			console.log('onSuccess');
		},
		onError(){
			// 文件上传失败时，回调
			console.log('onError');
		},
		onPreview(){
			// 点击文件列表中的文件时，回调
			console.log('onPreview');
		},
		onRemove(){
			// 点击删除文件列表中的文件以后，回调
			console.log('onRemove');
		},
		beforeRemove(){
			// 删除文件列表中的文件之前回调
			return false;
		},
		beforeUpload(){
			// 文件上传之前回调
			console.log('beforeUpload');
		},
		uploadAvatar(){
			console.log('uploadAvatar');
			this.$refs.avatarUpload.submit();
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
