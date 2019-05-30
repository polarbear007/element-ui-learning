<template>
	<div id="app">
		<el-pagination :total="pageInfo.total" 
		               :page-size="pageInfo.pageSize" 
					   :current-page="pageInfo.currentPage"
					   :pager-count="7"
					   background>
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
};
</script>

<style></style>
