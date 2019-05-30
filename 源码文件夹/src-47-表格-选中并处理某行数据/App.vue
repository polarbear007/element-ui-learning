<template>
	<div id="app">
		<el-table  ref="testTable"
				   :data="datas" 
				   border 
				   height="400px"
				   highlight-current-row
				   @current-change="handleCurrentChange">
			<el-table-column label="编号" prop="id" width="150px"></el-table-column>
			<el-table-column label="姓名" prop="name" width="150px"></el-table-column>
			<el-table-column label="年龄" prop="age" width="150px"></el-table-column>
			<el-table-column label="性别" prop="gender" width="150px"></el-table-column>
			<el-table-column label="操作" width="200px">
				<el-button type="primary" size="mini">修改</el-button>
				<el-button type="danger" size="mini">删除</el-button>
			</el-table-column>
		</el-table>
		<el-button type="primary" @click="setCurrent">选中第2行</el-button>
		<el-button type="primary" @click="cancelCurrent">取消选中</el-button>
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
		handleCurrentChange(currentRow){
			if(currentRow !== undefined){
				alert("你选中了" + currentRow.name);
			}
		},
		setCurrent(){
			// 设置第二行为选中行，需要传入一个行的数据
			this.$refs.testTable.setCurrentRow(this.datas[1]);
		},
		cancelCurrent(){
			// 如果我们什么行的数据都不传入的话，那么就相当于取消当前的选中行
			this.$refs.testTable.setCurrentRow();
		}
	}
};
</script>

<style></style>
