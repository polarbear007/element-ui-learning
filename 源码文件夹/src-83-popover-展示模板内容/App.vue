<template>
	<div id="app">
		<el-popover content="使用点击触发" title="学生信息表" trigger="click">
			<!-- 如果我们不指定 slot 名称，那么使用默认的 slot 分发内容 -->
			<el-table :data="tableDatas">
				<el-table-column prop="id" label="编号"></el-table-column>
				<el-table-column prop="name" label="姓名"></el-table-column>
				<el-table-column prop="age" label="年龄"></el-table-column>
				<el-table-column prop="gender" label="性别"></el-table-column>
			</el-table>
			<el-button class="btn" slot="reference">使用点击触发</el-button>
		</el-popover>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tableDatas:[
				{id: '001', name: 'eric', age: 12, gender: 'male'},
				{id: '002', name: 'rose', age: 13, gender: 'female'},
				{id: '003', name: 'jack', age: 14, gender: 'male'},
				{id: '004', name: 'tom', age: 15, gender: 'male'},
			]
		};
	},
};
</script>

<style>
	.btn{
		margin: 40px;
	}
</style>
