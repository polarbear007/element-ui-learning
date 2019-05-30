<template>
	<div id="app">
		<el-alert title="默认可以关闭的提示消息" type="success" ></el-alert>
		<el-alert title="无法关闭的提示消息" type="success" :closable="false"></el-alert>
		<hr>
		<el-alert title="默认无图标" type="success" ></el-alert>
		<el-alert title="带有图标的提示信息" type="success" show-icon></el-alert>
		<hr>
		<el-alert title="默认主题是 light" type="success" effect="light"></el-alert>
		<el-alert title="使用dark主题" type="success" effect="dark"></el-alert>
		<hr>
		<el-alert title="默认靠左对齐" type="success"></el-alert>
		<el-alert title="居中对齐" type="success" :center="true"></el-alert>
		<hr>
		<el-alert title="默认关闭按钮是一个x" type="success"></el-alert>
		<el-alert title="设置关闭按钮为特定的文字" type="success" close-text="知道了"></el-alert>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style></style>
