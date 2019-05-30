<template>
	<div id="app">
		<!-- indeterminate 是h5新添加的属性，表示checkbox 的一种中间状态，
		* 不是 checked = true, 也不是checked=false.
		* 一般是全选的时候，表示既没有全选，也没有全不选的那种中间状态 -->
		<el-checkbox :indeterminate="isIndeterminate" v-model="isCheckAll" @change="checkAllChange">全选</el-checkbox>
		<el-checkbox-group v-model="selectedFruits" @change="checkboxChange">
			<el-checkbox label="apple">苹果</el-checkbox>
			<el-checkbox label="banana">香蕉</el-checkbox>
			<el-checkbox label="orange">橘子</el-checkbox>
		</el-checkbox-group>
	</div>
</template>

<script>
	export default{
		name: 'App',
		data(){
			return {
				isIndeterminate: false,
				isCheckAll: false,
				selectedFruits: [],
				fruits: ['apple', 'banana', 'orange']
			}
		},
		methods:{
			// 点击 checkbox 选项触发 change 事件 
			checkboxChange(newValue){
				// 当选中项数组与原数组长度一样，说明选中全部了，我们要修改 isCheckAll 值为true
				// 因为确定为全选状态，所以 isIndeterminate = false
				if(this.selectedFruits.length === this.fruits.length){
					this.isCheckAll = true;
					this.isIndeterminate = false;
				// 当选中项数组长度为 0， 说明没有选中任何选项，我们要修改 isCheckAll = false
				// 因为确定全选状态为false ， 所以 isIndeterminate = false
				}else if(this.selectedFruits.length === 0){
					this.isCheckAll = false;
					this.isIndeterminate = false;
				// 其他的情况下，都无法确认是全选还是全不选状态
				// isIndeterminate = true
				}else{
					this.isIndeterminate = true;
				}
			},
			checkAllChange(newValue){
				if(this.isCheckAll){
					this.selectedFruits = this.fruits;
				}else{
					this.selectedFruits = [];
				}
				this.isIndeterminate = false;
			}
		}
	}
</script>

<style></style>
