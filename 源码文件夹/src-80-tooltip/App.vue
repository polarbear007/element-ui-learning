<template>
	<div id="app">
		<br>
		<el-tooltip content="tooltip 最基本使用">
			<el-button class="btn">tooltip 最基本使用</el-button>
		</el-tooltip>
		<el-tooltip content="上面" placement="top">
			<el-button class="btn">上面</el-button>
		</el-tooltip>
		<el-tooltip content="下面" placement="bottom">
			<el-button class="btn">下面</el-button>
		</el-tooltip>
		<el-tooltip content="左边" placement="left">
			<el-button class="btn">左边</el-button>
		</el-tooltip>
		<el-tooltip content="右边" placement="right">
			<el-button class="btn">右边</el-button>
		</el-tooltip>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods:{
	}
};
</script>

<style>
	.btn{
		margin: 40px;
	}
</style>
