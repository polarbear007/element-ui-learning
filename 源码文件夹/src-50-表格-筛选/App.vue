<template>
	<div id="app">
		<el-table  ref="testTable"
				   :data="datas" 
				   border 
				   height="400px">
			<el-table-column type="selection"></el-table-column>
			<el-table-column label="编号" prop="id"  ></el-table-column>
			<el-table-column label="姓名" prop="name" sortable></el-table-column>
			<el-table-column label="年龄" prop="age" sortable></el-table-column>
			<el-table-column label="性别" 
							 prop="gender" 
							 :filters="genderFilters"
							 :filter-method="genderFilterMethod"
							 :filter-multiple="false">
			</el-table-column>
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
			genderFilters: [
				{text: '男', value: '男'},
				{text: '女', value: '女'}
			]
		};
	},
	methods:{
		// value 参数表示我们选中 filters 里面的某个对象的 value
		// row 表示每一行的数据，当我们选中一个过滤的值时，会遍历所有行数据，一行回调一次
		//  column 表示一个  el-table-column 对象，有时候我们需要用到这个对象的自定义的函数或属性
		
		// 我们需要在方法本身里面判断是否显示本行的数据
		// 返回 true 则显示，返回 false 不显示 
		genderFilterMethod(value, row, column){
			return value === row.gender;
		}
	}
};
</script>

<style></style>
