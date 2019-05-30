<template>
	<div id="app">
		<el-tag v-for="(tag, index) in tags" 
				:key="index"
				:closable="tag.closable"
				:type="tag.type"
				@close="handleCloseTag(index)">
			{{tag.msg}}
		</el-tag>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tags: [
				{type: 'success', msg: '成功标签', closable: true},
				{type: 'info', msg: '信息标签', closable: true},
				{type: 'warning', msg: '警告标签', closable: true},
				{type: 'danger', msg: '危险标签', closable: true},
				{type: 'default', msg: '默认标签', closable: true},
			]
		};
	},
	methods: {
		handleCloseTag(index){
			if(confirm('你确定要删除此标签吗？')){
				this.tags.splice(0, 1);
			}
		}
	}
};
</script>

<style></style>