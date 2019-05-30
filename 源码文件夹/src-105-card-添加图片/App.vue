<template>
	<div id="app">
		<el-row>
			<el-col :span="8">
				<!-- 这次我们直接不要标题了，只保留 body 部分
				* 	【注意】 这个 el-card 的body 部分默认会有一个 20px 的padding 
				*           我们可以通过  body-style 取消, 这个属性接收一个对象参数
				*  -->
				<el-card :body-style="{padding: '0px'}">
					<img src="./hamburger.png" alt="汉堡">
					<div id="card-foot">
						<p id="card-desc">好吃的汉堡</p>
						<p id="updateTime">
							{{currentDate | dateFilter }}
							<el-button type="text">操作按钮</el-button>
						</p>
					</div>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import moment from 'moment';
export default {
	data() {
		return {
			currentDate: new Date()
		};
	},
	filters:{
		dateFilter: function(date){
			return moment(date).format('YYYY-MM-DD HH:mm:ss');
		}
	}
};
</script>

<style></style>
