import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		newsCategories: [
			{
				cid: '001',
				categoryName: '国际新闻',
				path: '/newsList/internationalNewsList'
			},
			{
				cid: '002',
				categoryName: '社会新闻',
				path: '/newsList/socialNewsList'
			},
			{
				cid: '003',
				categoryName: '娱乐新闻',
				path: '/newsList/popNewsList'
			},
			{
				cid: '004',
				categoryName: '军事新闻',
				path: '/newsList/militaryNewsList'
			}
		],
		internationalNewsList: [
			{
				fromPaths: ['/home'],
				newsTitle: '国际新闻标题1',
				path: '/newsDetails/1',
				updateTime: '2019-5-24'
			},
			{
				fromPaths: ['/home'],
				newsTitle: '国际新闻标题2',
				path: '/newsDetails/2',
				updateTime: '2019-5-22'
			},
			{
				fromPaths: ['/home'],
				newsTitle: '国际新闻标题3',
				path: '/newsDetails/3',
				updateTime: '2019-5-21'
			},
		],
		socialNewsList: [
			{
				fromPaths: ['/home'],
				newsTitle: '社会新闻标题1',
				path: '/newsDetails/4',
				updateTime: '2019-5-24'
			},
			{
				fromPaths: ['/home'],
				newsTitle: '社会新闻标题2',
				path: '/newsDetails/5',
				updateTime: '2019-5-22'
			},
			{
				fromPaths: ['/home'],
				newsTitle: '社会新闻标题3',
				path: '/newsDetails/6',
				updateTime: '2019-5-21'
			},
		],
		popNewsList: [
			{
				fromPaths: ['/home'],
				newsTitle: '娱乐新闻标题1',
				path: '/newsDetails/7',
				updateTime: '2019-5-24'
			},
			{
				fromPaths: ['/home'],
				newsTitle: '娱乐新闻标题2',
				path: '/newsDetails/8',
				updateTime: '2019-5-22'
			},
			{
				fromPaths: ['/home'],
				newsTitle: '娱乐新闻标题3',
				path: '/newsDetails/9',
				updateTime: '2019-5-21'
			},
		],
		militaryNewsList: [
			{
				fromPaths: ['/home'],
				newsTitle: '军事新闻标题1',
				path: '/newsDetails/10',
				updateTime: '2019-5-24'
			},
			{
				fromPaths: ['/home'],
				newsTitle: '军事新闻标题2',
				path: '/newsDetails/11',
				updateTime: '2019-5-22'
			},
			{
				fromPaths: ['/home'],
				newsTitle: '军事新闻标题3',
				path: '/newsDetails/12',
				updateTime: '2019-5-21'
			},
		],
	},
	mutations:{
		
	}
})
