<template>
	<div id="app">
		<el-table :data="datas" 
				   border 
				   height="400px"
				   :row-class-name="tableRowClassName">
			<el-table-column label="编号" prop="id" width="150px"></el-table-column>
			<el-table-column label="姓名" prop="name" width="150px"></el-table-column>
			<el-table-column label="年龄" prop="age" width="150px"></el-table-column>
			<el-table-column label="性别" prop="gender" width="150px"></el-table-column>
			<el-table-column label="操作" fixed="right" width="200px">
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
					age: 13,
					gender: '男',
				},
				{
					id: '004',
					name: 'tom',
					age: 13,
					gender: '男',
				},
				{
					id: '005',
					name: 'jerry',
					age: 13,
					gender: '男',
				},
				{
					id: '006',
					name: 'mary',
					age: 13,
					gender: '女',
				}
			]
		};
	},
	methods:{
		// 回调函数执行时会传入一个行对象，这个对象包含一个 row 属性，里面其实是一行数据
		// 还包含一个 rowIndex 属性，这个属性其实是 行索引
		// 这里我们使用解构赋值，直接把这两个属性赋值给两个对应的变量
		tableRowClassName({row, rowIndex}){
			// 这里我们演示为了简单，只根据性别来指定特定的 class
			// if(row.gender === '女'){
			// 	return 'lucky'
			// }else{
			// 	return '';
			// }
		}
	}
};
</script>

<style>
	.el-table .lucky{
		background-color: pink;
	}
</style>
