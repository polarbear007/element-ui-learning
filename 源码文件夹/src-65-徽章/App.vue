<template>
	<div id="app">
		<!-- value 可以绑定数字 -->
		<el-badge :value="12" class="item">
			<el-button>评论</el-button>
		</el-badge>
		<!-- value 也可以绑定自定义的字符串 -->
		<el-badge :value="'new'" class="item">
			<el-button>评论</el-button>
		</el-badge>
		<!-- value 可以设置一个最大值，当value 值大于最大值时，显示最大值+ -->
		<el-badge :value="200" :max="99" class="item">
			<el-button>评论</el-button>
		</el-badge>
		<!-- 我们也可以添加 is-dot=true ，启用点的样式 -->
		<el-badge :is-dot="true" class="item">
			<el-button>评论</el-button>
		</el-badge>
		<!-- 我们也可以使用  hidden=true 来设置隐藏 badge -->
		<el-badge :is-dot="true" :hidden="true"  class="item">
			<el-button>评论</el-button>
		</el-badge>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
};
</script>

<style>
	.item{
		margin-right: 40px;
	}
</style>
