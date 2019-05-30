<template>
	<div id="app">
		<el-pagination :total="pageInfo.total" 
		               :page-size="pageInfo.pageSize" 
					   :current-page="pageInfo.currentPage">
		</el-pagination>
	</div>
</template>

<script>
export default {
	data() {
		return {
			pageInfo:{
				total: 20,
				pageSize: 5,
				currentPage: 3
			}
		};
	},
};
</script>

<style></style>
