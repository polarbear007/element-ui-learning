<template>
	<div id="app">
		<el-popover content="popover 最基本使用1" title="标题">
			<!-- 使用这种方式引入的话，我们需要把按钮写在  el-popover 标签内部 -->
			<el-button class="btn" slot="reference">popover最基本使用1</el-button>
		</el-popover>
		
		<el-popover ref="popover" content="popover 最基本使用2" title="标题"></el-popover>
		<!-- 使用这种方式引用的话，我们需要把按钮写在 el-popover 标签外部 -->
		<el-button class="btn" v-popover:popover>popover最基本使用2</el-button>
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
