<template>
	<div id="app">
		<!-- 以前我们上传文件一般都需要在一个表单内部
		*    但是使用 el-upload 组件，我们可以直接设置 action 属性，单独提交
		*  -->
		<el-upload class="upload-demo" action="http://localhost:8081/upload">
			<!-- 一般来说，el-upload 标签体内部都需要一个 el-button 按钮来提交上传文件 -->
			<el-button size="small" type="primary">上传文件</el-button>
		</el-upload>
	</div>
</template>

<script>
export default {
    data() {
      return {
      };
    }
    }
  }
</script>

<style></style>
