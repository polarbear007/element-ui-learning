<template>
	<div id="newsCategory">
		<div id="newsCategoryList">
			<router-link v-for="category in newsCategories" 
						 :key='category.cid'
						 :to="category.path">
				{{category.categoryName}}<br>
			</router-link>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex';
export default{
	name: 'Home',
	computed:{
		...mapState(['newsCategories']),
	}
}
</script>

<style>
</style>
