<template>
	<div id="app">
		<el-table  ref="testTable"
				   :data="datas" 
				   border 
				   height="400px"
				   @selection-change="selectionChange">
			<el-table-column type="selection"></el-table-column>
			<el-table-column label="编号" prop="id" width="150px"></el-table-column>
			<el-table-column label="姓名" prop="name" width="150px"></el-table-column>
			<el-table-column label="年龄" prop="age" width="150px"></el-table-column>
			<el-table-column label="性别" prop="gender" width="150px"></el-table-column>
			<el-table-column label="操作" width="200px">
				<el-button type="primary" size="mini">修改</el-button>
				<el-button type="danger" size="mini">删除</el-button>
			</el-table-column>
		</el-table>
		<el-button type="primary" @click="select">选中前三行</el-button>
		<el-button type="primary" @click="cancel">取消选中第二行</el-button>
		<el-button type="primary" @click="toggleAllSelection">全选/反选</el-button>
		<el-button type="primary" @click="showSelectedNames">弹窗选中的姓名</el-button>
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
			],
			selecteds: []
		};
	},
	methods:{
		select(){
			// 选中第一行
			this.$refs.testTable.toggleRowSelection(this.datas[0], true);
			// 选中第二行
			this.$refs.testTable.toggleRowSelection(this.datas[1], true);
			// 选中第三行
			this.$refs.testTable.toggleRowSelection(this.datas[2], true);
		},
		cancel(){
			// 取消选中第二行
			this.$refs.testTable.toggleRowSelection(this.datas[1], false);
		},
		toggleAllSelection(){
			this.$refs.testTable.toggleAllSelection();
		},
		selectionChange(selecteds){
			this.selecteds = selecteds;
		},
		showSelectedNames(){
			let result = '';
			if(this.selecteds.length === 0){
				alert("你没有选中任何行人");
			}else{
				for (let row of this.selecteds) {
					result = result + " " + row.name;
				}
				alert(result)
			}
		}
	}
};
</script>

<style></style>
