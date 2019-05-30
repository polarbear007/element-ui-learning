<template>
	<div id="app">
		<el-time-select v-model="startTime" 
		                :picker-options="pickerOptions1"  
						 placeholder="起始时间">
		</el-time-select>
		<el-time-select v-model="endTime" 
		                :picker-options="pickerOptions2"  
						 placeholder="起始时间">
		</el-time-select>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			startTime: '',
			endTime: '',
			pickerOptions1: {
				start: '8:00',
				end: '17:00',
				step: '00:30'
			}
		};
	},
	computed:{
		pickerOptions2(){
			return {
				start: '8:00',
				end: '17:00',
				step: '00:30',
				minTime: this.startTime
			}
		}
	}
};
</script>

<style></style>
