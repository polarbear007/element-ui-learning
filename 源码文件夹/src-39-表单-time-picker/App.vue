<template>
	<div id="app">
		<el-time-picker v-model="value1" 
		                :picker-options="pickerOptions"  
						arrow-control>
		</el-time-picker>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			value1: '',
			pickerOptions: {
				selectableRange: '08:00:00 - 23:00:00'
			}
		};
	}
};
</script>

<style></style>
