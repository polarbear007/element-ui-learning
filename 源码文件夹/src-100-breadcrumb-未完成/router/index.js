import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import NewsList from '../views/NewsList.vue';
import ErrorPage from '../views/ErrorPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			component: Home
		},
		{
			path: '/newsList/:type',
			component: NewsList
		},
		{
			path: '/error',
			component: ErrorPage
		}
	]
});