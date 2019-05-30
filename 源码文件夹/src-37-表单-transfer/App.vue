<template>
	<div id="app">
		<!-- titles 属性接收一个长度为2的字符串数组，可以设置两边的标题
		*    button-texts 属性接收一个长度为2的字符串数组，可以设置中间两个按钮文字 
		*    我们还可以在 el-transfer 标签体内部添加两个 slot ，slot 名为 left-footer / right-footer
		*    一般我们都是添加操作按钮。
		*  -->
		<el-transfer ref="testTransfer"
					 v-model="value" 
		             :data="data" 
					 filterable
					 :titles="titles"  
					 :button-texts="buttonTexts"
					 @left-check-change="updateLeftCheck"
					 @right-check-change="updateRightCheck"
					 >
			<template slot="left-footer">
				<el-button type="primary" size="mini" @click="disableLeftChecked">禁用</el-button>
				<el-button type="danger" size="mini" >删除</el-button>
			</template>
			<template slot="right-footer">
				<el-button type="primary" size="mini" @click="disableRightChecked">禁用</el-button>
				<el-button type="danger" size="mini">删除</el-button>
			</template>
		</el-transfer>
	</div>
</template>

<script>
	export default{
		name: "App",
		data(){
			return {
				value: [1],
				data: [],
				titles: ['待办任务', '接受事项'],
				buttonTexts: ['取消', '接受'],
				leftChecked: [],
				rightChecked: []
			}
		},
		methods:{
			// 当我们选中或者取消选中某个选项的时候，el-transfer 就会触发 
			// left-check-change 或者  right-check-change 自定义事件 
			// 这两个事件，会传递两个参数，第一个参数是当前被选中的选项的 key 数组【重要】
			// 第二个参数是本次操作修改的选项的 key 数组
			// 一般我们都是使用第一个参数多一些
			
			// 这里我们是把选项的选中情况，保存到外部的变量中来
			updateLeftCheck(leftChecked, target){
				this.leftChecked = leftChecked;
			},
			updateRightCheck(rightChecked, target){
				this.rightChecked = rightChecked;
			},
			disableLeftChecked(){
				if(this.leftChecked.length > 0){
					this.leftChecked.forEach((key)=>{
						// 我们根据 leftChecked 里面的 key 去 data 里面找对应的元素索引
						let index = this.data.findIndex((element)=>{
							return element.key == key;
						});
						
						// 根据索引拿到对应的元素对象，修改其值
						// 但是注意： 这样的修改，vue 无法响应变化
						let newElement = this.data[index];
						newElement.disabled = true;
						
						// 我们再使用 splice() 函数，去替换原数组中的元素,这样vue 才能响应变化
						this.data.splice(index, 1, newElement);
					})
				}
				
				// 我们禁用了一个选项以后，这个选项还是选中状态，我们还是可以点击
				// 向左或者向右操作，这肯定不合理。所以我们应该取消选中状态。
				// 其实在 el-transfer 内部，同样维护着 leftChecked 和 rightChecked
				// 当我们点击禁用以后，我们应该把这两个数组替换成空数组，这样就取消选中状态了
				// this.$refs.testTransfer.leftChecked = [];
				
				// 因为 el-transfer 的 leftChecked 本身的数据来源于其子组件，所以我们如果
				// 直接把这个数组替换成空数组，并不能在页面上看到效果，虚拟dom 下次一刷新，选中状态没有改变
				// 我们应该再去看 el-transfer 的子组件  leftPanel 的 checked 数组
				this.$refs.testTransfer.$refs.leftPanel.checked = [];
				
				// 当然，外部的 leftChecked 也应该同步
				this.leftChecked = [];
			},
			disableRightChecked(){
				if(this.rightChecked.length > 0){
					this.rightChecked.forEach((key)=>{
						let index = this.data.findIndex((element)=>{
							return element.key == key;
						});
						let newElement = this.data[index];
						newElement.disabled = true;
						this.data.splice(index, 1, newElement);
					})
				}
				this.$refs.testTransfer.$refs.rightPanel.checked = [];
				this.rightChecked = [];
			}
		},
		// 生成一些 data 数据用来演示
		mounted(){
			let data = [];
			for (let i = 1; i < 6; i++) {
				let obj = {
					key: i,
					label: `选项${i}`,
				}
				data.push(obj);
			}
			this.data = data;
		}
	}
</script>

<style>
</style>
