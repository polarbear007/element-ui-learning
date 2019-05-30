<template>
	<div id="app">
		<!-- 可以绑定一个布尔值， true 表示开启， false 表示关闭
		*   我们还可以通过 active-color 和 inactive-color 来区别开启和关闭的颜色样式
		*  -->
		<el-switch v-model="value" active-color="#13ce66" inactive-color="grey"></el-switch> 开启会员
	</div>
</template>

<script>
	export default{
		name: "App",
		data(){
			return {
				value: true
			}
		}
	}
</script>

<style></style>
