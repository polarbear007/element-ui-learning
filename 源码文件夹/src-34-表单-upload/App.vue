<template>
	<div id="app">
		<!-- list-type 为 picture 的时候，展示的方式是使用缩略图
		*    list-type 为 picture-card 的时候，展示的方式是 -->
		<el-upload accept="image/x-ms-bmp, image/jpeg, image/png"
				   list-type="picture-card"
				   action="http://localhost:8081/upload">
			<el-button type="primary">上传文件</el-button>
		</el-upload>
	</div>
</template>

<script>
	export default{
		name: "App"
	}
</script>

<style>
</style>
