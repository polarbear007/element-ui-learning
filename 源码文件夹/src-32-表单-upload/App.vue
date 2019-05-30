<template>
	<div id="app">
		<el-upload accept="image/x-ms-bmp, image/jpeg, image/png"
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
