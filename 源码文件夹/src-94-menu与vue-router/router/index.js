import Vue from 'vue';
import VueRouter from 'vue-router';
import User from '../views/User.vue';
import AddUser from '../views/AddUser.vue';
import SearchUser from '../views/SearchUser.vue';
import UpdateUser from '../views/UpdateUser.vue';
import DeleteUser from '../views/DeleteUser.vue';
import Shop from '../views/Shop.vue';
import Order from '../views/Order.vue';
import Authorization from '../views/Authorization.vue';


Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: '/user',
			component:  User,
			children: [
				{
					path: '/user/addUser',
					component: AddUser
				},
				{
					path: '/user/searchUser',
					component: SearchUser
				},
				{
					path: '/user/updateUser',
					component: UpdateUser
				},
				{
					path: '/user/deleteUser',
					component: DeleteUser
				},
			]
		},
		{
			path: '/shop',
			component: Shop
		},
		{
			path: '/order',
			component: Order
		},
		{
			path: '/authorization',
			component: Authorization
		}
	]
})