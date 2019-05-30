<template>
	<div id="app">
		<Home></Home>
		<NewsList></NewsList>
	</div>
</template>	

<script>
import Home from './views/Home.vue';
import NewsList from './views/NewsList.vue';
export default {
	components:{Home, NewsList},
	template: '<Home/>, <NewsList>',
	data(){
		return {
			
		}
	},
	methods:{
		
	}
}
</script>

<style></style>
