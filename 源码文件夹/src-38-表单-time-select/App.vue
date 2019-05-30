<template>
	<div id="app">
		<el-time-select
			v-model="value1"
			:picker-options="pickerOptions"
			placeholder="选择时间">
	    </el-time-select>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			value1: '',
			pickerOptions: {
				start : '9:00',
				step: '00:10',
				end: '24:00'
			}
		};
	}
};
</script>

<style></style>
