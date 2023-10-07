<template>
    <div>
        <el-progress type="circle" :percentage="0" style="top: 7.5vh;right:12.5%; position: relative;"></el-progress>
    <el-progress type="circle" :percentage="25" style="top: 7.5vh;right:6.25%; position: relative;"></el-progress>
    <el-progress type="circle" :percentage="100" status="success" style="top: 7.5vh; position: relative;"></el-progress>
    <el-progress type="circle" :percentage="70" status="warning" style="top: 7.5vh;left:6.25%; position: relative;"></el-progress>
    <el-progress type="circle" :percentage="50" status="exception" style="top: 7.5vh;left:12.5%; position: relative;"></el-progress>
<div style="top: 15vh; position: relative;">
<el-row :gutter="20">
<el-col :span="6">
<div>
<el-statistic :value = "temperature" title="室内温度">

</el-statistic>
</div>
</el-col>
<el-col :span="6">
<div>
<el-statistic title="今日入馆人数">
<template slot="formatter"> 13 </template>
</el-statistic>
</div>
</el-col>
<el-col :span="6">
<div>
<el-statistic :value = "humidity" title="当前湿度">

</el-statistic>
</div>
</el-col>
<el-col :span="6">
<div>
<el-statistic
ref="statistic"
format="YYYY-MM-DD HH:mm:ss"
:value="timestamps"
title="当前时间"
>
</el-statistic>
</div>
</el-col>
</el-row>
</div>
    </div>
   
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
import chartjs from 'chart.js'
import * as echarts from 'echarts';

export default {
  data() {

      return {

      		temperature: 0,
      		humidity: 0,
      		timestamps: 0

      }

    },
	mounted() {
		
	},
	computed: {
    	
  	},
	watch: {
    	
    
  },
	methods:{
		requestSensorData(){
			const url = 'http://192.168.31.104/sensor/data';
			this.sendToServer(url);
			
		},
		toggleSetting() {
		  this.settingEnabled = !this.settingEnabled;
		
		  const url = this.settingEnabled ? 'http://192.168.31.104/led/on' : 'http://192.168.31.104/led/off';
		  this.sendToServer(url);
		},
		GetServer() {
			this.timer = setInterval(this.requestSensorData, 1000);
		},
		sendToServer(url) {
			  fetch(url)
				.then(response => response.json())
				.then(data => {
					this.temperature = data.temperature;
					this.humidity = data.humidity;
					const numbers = data.timestamp.match(/\d+/g);
					const value = numbers ? Number(numbers.join("")) : 0;
					 // 输出：123456
					this.timestamps = value;
					console.log(this.timestamps);
					// 绘制折线图
						/* new Chart(ctx, {
					    type: 'line',
					    data: {
					        labels: labels,
					        datasets: [
								{
					                label: '温度',
					                data: temperatures,
					                borderColor: 'red',
					                backgroundColor: 'transparent',
					            },
					            {
					                label: '湿度',
					                data: humidities,
					                borderColor: 'blue',
					                backgroundColor: 'transparent',
					            }
					        ]
					    },
					    options: {
					              // 可以设置一些图表的选项，如标题、尺寸等
					    }
					}) */;
					
					// 处理响应
				})
				.catch(error => {
					console.log(error);
					
					// 处理错误
				});
		}
	}
}
</script>

<style>
  .el-header {
    background-color: #7fd3ce;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
	background-color: #7cc5ba;
    color: #7cc5ba;
  }
</style>