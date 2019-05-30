<template>
	<div id="app">
		<el-badge :value="12" class="item">
			<el-button>评论</el-button>
		</el-badge>
		
		<el-badge :value="12" class="item" type="success">
			<el-button>评论</el-button>
		</el-badge>
		
		<el-badge :value="12" class="item" type="info">
			<el-button>评论</el-button>
		</el-badge>
		
		<el-badge :value="12" class="item" type="warning">
			<el-button>评论</el-button>
		</el-badge>
		
		<el-badge :value="12" class="item" type="danger">
			<el-button>评论</el-button>
		</el-badge>
	</div>
</template>

<script>
export default {
	data() {
	},
};
</script>

<style>
	.item{
		margin-right: 40px;
	}
</style>
