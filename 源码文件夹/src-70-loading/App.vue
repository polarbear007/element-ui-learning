<template>
	<div id="app">
		<el-table v-loading="loading"
		          :data="tableData">
			<el-table-column label="编号" prop="id"></el-table-column>
			<el-table-column label="姓名" prop="name"></el-table-column>
			<el-table-column label="年龄" prop="age"></el-table-column>
			<el-table-column label="性别" prop="gender"></el-table-column>
		</el-table>
		<el-button @click="loadTableData">加载内容</el-button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			loading: false,
			tableData: []
		};
	},
	methods:{
		loadTableData(){
			// 加载之前，我们先把 loading 的值设置成 true 
			// 这样表格就会显示正在加载
			this.loading = true;
			// 这里我们懒得去写 ajax 请求，直接使用 setTimeout 模拟一下就好了
			setTimeout(()=>{
				this.tableData = [
					{id: '001', name: 'eric', age: 12, gender: 'male'},
					{id: '002', name: 'rose', age: 13 , gender: 'female'},
					{id: '003', name: 'jack', age: 14, gender: 'male'},
					{id: '004', name: 'jerry', age: 15, gender: 'male'},
				];
				// 【注意】 这里一定要在异步函数内部去修改 loading 的值为 false
				// 如果在外面修改的话，就会出现 loading 刚被改成 true ，马上又改成false
				// 看不到任何效果
				this.loading = false;
			}, 3000);
		}
	}
};
</script>

<style></style>
