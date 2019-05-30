<template>
	<div id="app">
		<el-pagination :total="pageInfo.total" 
		               :page-size="pageInfo.pageSize" 
					   :current-page="pageInfo.currentPage"
					   layout="prev,pager,next,sizes"
					   background
					   @size-change="handleSizeChange"
					   @current-change="handleCurrentChange"
					   @prev-click="handlePreClick"
					   @next-click="handleNextClick">
		</el-pagination>
	</div>
</template>

<script>
export default {
	data() {
		return {
			pageInfo:{
				total: 200,
				pageSize: 5,
				currentPage: 3
			}
		};
	},
	methods:{
		// 当我们修改每页展示数量的时候，会回调此函数
		// 传入最新的 pageSize 值
		handleSizeChange(pageSize){
			console.log('size-change');
			console.log(pageSize);
		},
		// 当我们点击分页按钮 / 输入跳转页码 / 点击上一页或者下一页
		// 都会回调此函数，传入最新的 currentPage 值
		handleCurrentChange(currentPage){
			console.log('current-change');
			console.log(currentPage);
		},
		// 当我们点击上一页按钮时会回调此函数
		// 并传入最新的 currentPage
		handlePreClick(currentPage){
			console.log('pre-click');
			console.log(currentPage);
		},
		// 当我们点击下一页按钮时会回调此函数
		// 并传入最新的 currentPage
		handleNextClick(currentPage){
			console.log('next-click');
			console.log(currentPage);
		}
	}
};
</script>

<style></style>
