<template>
	<div id="app">
		<!-- model 属性接收一个对象，这个对象应该包含整个表单的数据 -->
		<el-form :model="data">
			<!-- 一个 el-form 标签里面可以包含很多的表单标签，一般来说：
			*    一个表单子标签对应一个 el-form-item 标签。
			*  -->
			<el-form-item label="用户名">
				<el-input clearable v-model="data.username" placeholder="请输入用户名"></el-input>
			</el-form-item>
			<el-form-item label="密码">
				<el-input show-password v-model="data.password" placeholder="请输入密码"></el-input>
			</el-form-item>
			<el-form-item label="所在省份">
				<el-select filterable v-model="data.province">
					<el-option v-for="(province, index) in provinces" 
					           :key="index"
							   :label="province.label"
							   :value="province.value">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="性别">
				<el-radio v-model="data.gender" label="m" >男</el-radio>
				<el-radio v-model="data.gender" label="f" >女</el-radio>
			</el-form-item>
			<el-form-item label="兴趣爱好">
				<el-checkbox-group v-model="data.interests">
					<el-checkbox v-for="(interest, index) in interestsList"
						         :key="index"
								 :label="interest.label">
						{{interest.msg}}
					</el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="出生年月">
				<el-date-picker v-model="data.bornDate"></el-date-picker>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			data: {
				username: 'eric',
				password: '123456',
				province: '',
				gender: '',
				interests: [],
				bornDate: null
			},
			provinces: [
				{value: 'bj', label: '北京'},
				{value: 'sh', label: '上海'},
				{value: 'fj', label: '福建'},
				{value: 'gd', label: '广东'},
			],
			interestsList:[
				{label: 'reading', msg: '阅读'},
				{label: 'writing', msg: '写作'},
				{label: 'painting', msg: '画画'},
				{label: 'swimming', msg: '游泳'},
				{label: 'cooking', msg: '厨艺'},
			]
		};
	},
	methods: {
		
	}
};
</script>

<style></style>
