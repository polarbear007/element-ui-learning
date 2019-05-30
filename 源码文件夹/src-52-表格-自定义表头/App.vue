<template>
	<div id="app">
		<el-table  ref="testTable"
				   :data="datas" 
				   border 
				   height="400px">
			<el-table-column type="index"></el-table-column>
			<el-table-column label="姓名" prop="name"></el-table-column>
			<el-table-column label="年龄" prop="age" sortable></el-table-column>
			<el-table-column label="性别">
				<template v-slot="scope">
					<span v-if="scope.row.gender == '男'" class="el-icon-male">
						男
					</span>
					<span v-if="scope.row.gender == '女'" class="el-icon-female">
						女
					</span>
				</template>
			</el-table-column>
			<el-table-column  width="200px">
				<!-- 表头模板一定要指定插槽名为 header 
				*    如果我们想要自定义表头，那么就不需要在 el-table-column 上面指定 label 属性
				*  -->
				<template v-slot:header="scope">
					<el-input placeholder="请输入搜索的内容"></el-input>
				</template>
				<template v-slot="scope">
					<el-button type="primary" size="mini" @click="updateRow(scope)">修改</el-button>
					<el-button type="danger" size="mini" @click="deleteRow(scope)">删除</el-button>
				</template>
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
		};
	},
	methods:{
		// 按理说，这里应该弹出一个表单页面，然后修改数据
		// 再然后发送 ajax 到后台，后台再返回更新以后的数据
		// 最后把后台数据替换原来的数据
		// 这里就直接随便改下前台数据就好了
		updateRow(scope){
			let index = this.datas.findIndex(function(element){
				return element.id === scope.row.id;
			});
			// 随便给现在的名字后面拼接一个 哈哈字符串
			scope.row.name += "哈哈";
			this.datas.splice(index, 1, scope.row);
		},
		// 按理说，这里应该发送 ajax 去后台执行删除操作，这里就直接在前台删除就好了
		deleteRow(scope){
			let flag = confirm('你真的要删除此条数据吗？');
			if(flag){
				let index = this.datas.findIndex(function(element){
					return element.id === scope.row.id;
				});
				this.datas.splice(index, 1);
			}
		}
	}
};
</script>

<style></style>
