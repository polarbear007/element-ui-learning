<template>
	<div id="app">
		<el-row>
			<el-col :xs="8" :sm="7" :md="6" :lg="5" :xl="4"><div style="background: greenyellow;">xs超小，占用4个单位</div></el-col>
		</el-row>
		
		<div class="hidden-sm-and-down" style="background: pink;">
			只在窗口宽度大于768 px 才会显示
		</div>
	</div>
</template>

<script>
	import  '../node_modules/element-ui/lib/theme-chalk/display.css';
	export default{
		name: 'App'
	}
</script>

<style>
</style>