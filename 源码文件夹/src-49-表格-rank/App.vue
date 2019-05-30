<template>
	<div id="app">
		<el-table  ref="testTable"
				   :data="datas" 
				   border 
				   :default-sort="defaultSort"
				   height="400px">
			<el-table-column type="selection"></el-table-column>
			<!-- 注意： 使用 sort-method ，还需要通过 sortable 开启排序，不然不会有效果 -->
			<el-table-column label="编号" prop="id" sortable :sort-method="sortById" ></el-table-column>
			<el-table-column label="姓名" prop="name" sortable></el-table-column>
			<el-table-column label="年龄" prop="age" sortable></el-table-column>
			<el-table-column label="性别" prop="gender" ></el-table-column>
			<el-table-column label="操作" width="200px">
				<el-button type="primary" size="mini">修改</el-button>
				<el-button type="danger" size="mini">删除</el-button>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
export default {
	data() {
		return {
			datas:[
				{
					id: '001',
					name: 'eric',
					age: 12,
					gender: '男',
				},
				{
					id: '002',
					name: 'rose',
					age: 13,
					gender: '女',
				},
				{
					id: '003',
					name: 'jack',
					age: 14,
					gender: '男',
				},
				{
					id: '004',
					name: 'tom',
					age: 15,
					gender: '男',
				},
				{
					id: '005',
					name: 'jerry',
					age: 16,
					gender: '男',
				},
				{
					id: '006',
					name: 'mary',
					age: 17,
					gender: '女',
				}
			],
			selecteds: [],
			defaultSort: {prop: 'name', order: 'descending'}
		};
	},
	methods:{
		// 表格排序函数跟数组排序函数很像
		// 都是传入两个元素， a 和 b 都是行数据
		// 然后我们可以比较元素值，决定返回正数还是负数
		sortById(a, b){
			return a.id - b.id;
		}
	}
};
</script>

<style></style>
