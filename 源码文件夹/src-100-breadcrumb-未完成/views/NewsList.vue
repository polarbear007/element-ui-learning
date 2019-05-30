<template>
	<div id="newList">
		<div id="path">
			
		</div>
		
		<div id="newsListContent">
			<router-link v-for="(news, index) in newsList" 
						 :key='index'
						 :to="news.path">
				{{news.newsTitle}} <br>
			</router-link>
		</div>
	</div>
</template>

<script>
export default{
	name: 'NewsList',
	data(){
		return {
			newsList: [],
		}
	},
	watch:{
		$route(newRoute){
			// 跳转以后，先清空一下新闻列表，防止读取到以前的数据
			this.newsList = [];
			// 然后判断路径参数，获取对应的数据
			if(newRoute.params.type.trim() === 'internationalNewsList'){
				this.newsList = this.$store.state.internationalNewsList;
			}else if(newRoute.params.type.trim() === 'socialNewsList'){
				this.newsList = this.$store.state.socialNewsList;
			}else if(newRoute.params.type.trim() === 'popNewsList'){
				this.newsList = this.$store.state.popNewsList;
			}else if(newRoute.params.type.trim() === 'militaryNewsList'){
				this.newsList = this.$store.state.militaryNewsList;
			}else{
				// 如果路径参数不对，这里直接跳转到 404 页面
				
			}
		}
	}
}
</script>

<style>
</style>
