<template>
	<div id="app">
		<el-button type="primary" @click="addTab">添加一个 tab</el-button>
		<el-tabs v-model="activeName" 
		         closable
				 @tab-remove="handleTabRemove"
				 @tab-add="handleTabAdd"
				 @tab-click="handleClick"
				 @edit="handleEdit">
			<el-tab-pane v-for="tab in tabDatas" 
						 :key="tab.name"
			             :name="tab.name"
						 :label="tab.label">
				{{tab.content}}
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
export default {
	data(){
		return {
			activeName: 'user',
			tabDatas: [
				{name: 'user', label: '用户管理', content: '用户管理页面'},
				{name: 'shop', label: '店铺管理', content: '店铺管理页面'},
				{name: 'order', label: '订单管理', content: '订单管理页面'}
			],
			count: 1
		}
	},
	methods:{
		handleTabRemove(name){
			// 根据 name 去删除数组里面对应的对象
			let index = this.tabDatas.findIndex((element)=>{
				return element.name === name;
			});
			this.tabDatas.splice(index, 1);
			
			// 如果删除以后， tabDatas 长度为 0 ，那么我们把 activeName 设置为 ''
			if(this.tabDatas.length === 0){
				this.activeName = '';
			}else{
				// 如果我们删除的是当前激活的 tab ，那么我们最好修改一下 activeName数组最后一个元素的name
				if(this.activeName === name){
					this.activeName = this.tabDatas[this.tabDatas.length - 1].name;
				}
			}
		},
		addTab(){
			let count = this.count++;
			let name = 'newtab' + count;
			this.tabDatas.push({
				name,
				label: 'NewTab' + count,
				content: 'This is a new tab!!!'
			});
			this.activeName = name;
		},
		// 测试没有触发  tab-add 事件 
		handleTabAdd(){
			console.log('tab-add');
			console.log(arguments);
		},
		// 点击tab 标签以后，触发 tab-click 事件，传入那个 el-tab-pane 标签对象
		handleClick(target){
			console.log('tab-click');
			console.log(arguments);
		},
		// 添加或者删除 tab 都会触发 edit 事件
		// 第一个参数是目标标签的 name 
		// 第二个参数是对目标标签的操作，可能是 add 可能是  remove
		// [问题] 添加标签的时候没有触发
		handleEdit(tagetName, action){
			console.log('edit');
			console.log(arguments);
		}
	}
}
</script>

<style></style>
