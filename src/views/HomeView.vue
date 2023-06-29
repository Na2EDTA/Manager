<template>
  <div style="height: 100%;">
	<el-header style="text-align: right; font-size: 18px; line-height: 60px; height: 8.5vh;">
	  <span style="height: 70px; line-height: 70px;text-align: center;">
		<b style="color: #eee; font-size:30px;font-weight:300; text-align: center; position: relative;right: 49vw; bottom: 0.15vh;">KEEP SECURITY & SPORT</b>
	  </span>
	  <span style="position: relative; right: 83.6vw; top: 1.15vh;">
	  		  <img src="../../logo.png" style="height: 6.5vh;width: 6vw;"> </img>
	  </span>
	  
	  <el-dropdown>
		<i class="el-icon-setting" style="margin-right: 15px;color: #eee;font-size: 25px;position: relative; bottom: 5px;"></i>
		<el-dropdown-menu slot="dropdown">
		  <el-dropdown-item>账号信息</el-dropdown-item>
		  <el-dropdown-item>新增操作</el-dropdown-item >
		  <el-dropdown-item>删除操作</el-dropdown-item>
		</el-dropdown-menu>
	  </el-dropdown>
	  <span style="color: #eee; height: 0%;position: relative; bottom: 8px;">未登录</span>
	</el-header>  
	  
    <el-container style="height: 100%; border-top: 1.5px solid rgb(237, 249, 248)">
		<el-aside width="200px" style="background-color: #eee; height: 100%; overflow: hidden; text-align: left; font-size: 30px;">
			<el-menu 
			:lt-openeds="['1']"
			background-color="#7cc5ba"
			
			text-color="rgb(249, 249, 249)"
			active-text-color="#00aaff"
			style="height: 91.2vh;min-height: 100%;"
			unique-opened = "true">
				<el-submenu index="1" >
					<template slot="title">
						<i class="el-icon-setting" style="color: #eee;"></i>
						<span slot="title">树莓派功能</span>
					</template>
					<el-menu-item-group>
					  <template slot="title">
						  <span style="color: #777777; font-size: 10px;">调试</span>
						  </template>
					  <el-menu-item index="1-1">灯光调试</el-menu-item>
					  <el-menu-item index="1-2" @click="GetServer">
						  温湿度信息
					  </el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="分组2">
					  <el-menu-item index="1-3">选项3</el-menu-item>
					</el-menu-item-group>
					<el-submenu index="1-4">
					  <template slot="title">选项4</template>
					  <el-menu-item index="1-4-1">选项4-1</el-menu-item>
					</el-submenu>
				  </el-submenu>
			  <el-submenu index="2">
				<template slot="title">
					<i class="el-icon-menu" style="color: #eee;"></i>
					<span slot="title">导航二</span>
				</template>
				<el-menu-item-group>
				  <template slot="title">分组一</template>
				  <el-menu-item index="2-1">选项1</el-menu-item>
				  <el-menu-item index="2-2">选项2</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="分组2">
				  <el-menu-item index="2-3">选项3</el-menu-item>
				</el-menu-item-group>
				<el-submenu index="2-4">
				  <template slot="title">选项4</template>
				  <el-menu-item index="2-4-1">选项4-1</el-menu-item>
				</el-submenu>
			  </el-submenu>
			  <el-submenu index="3">
				<template slot="title">
					<i class="el-icon-message" style="color: #eee;"></i>
					<span slot="title">导航三</span>
				</template>
				<el-menu-item-group>
				  <template slot="title">分组一</template>
				  <el-menu-item index="3-1">选项1</el-menu-item>
				  <el-menu-item index="3-2">选项2</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="分组2">
				  <el-menu-item index="3-3">选项3</el-menu-item>
				</el-menu-item-group>
				<el-submenu index="3-4">
				  <template slot="title">选项4</template>
				  <el-menu-item index="3-4-1">选项4-1</el-menu-item>
				</el-submenu>
			  </el-submenu>
			</el-menu>
		</el-aside>
		
		<el-main>
			<template>
  				<div ref="chartContainer" style="width: 100%; height: 800px;"></div>
			</template>
			
		</el-main>
		
	
	</el-container>

  </div>
</template>

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

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
import chartjs from 'chart.js'
import * as echarts from 'echarts';

export default {
  data() {
	  var d = new Date();
	  var m = d.getMonth()+1
	  
      const item = {
        date: d.getFullYear() + "-" + m + "-" + d.getDate(),
        operation: '灯光闪烁',
        tips: '由亮转灭'
      };
      return {
		chart: null,
		dataObject: {
      		temperature: 0,
      		humidity: 0,
      		timestamp: null
    	},
		temperatures:[0, 0, 0, 0, 0, 0, 0]
      }
	  
	  const light = {
		  settingEnabled: false
	  };
	  return{
		  settingEnabled: false
	  }
	  const test = {
		  temperatures:40,
		  humidities:10,
		  labels:'114514'
	  };return{
		  testdata:Array(10).fill(test)
	  }
	  
	  
    },
	mounted() {
  		this.chart = echarts.init(this.$refs.chartContainer);
	},
	computed: {
    	async chartData() {
    		const response = await fetch('http://192.168.31.104/sensor/data');
    		const data = await response.json();
    		this.dataObject = data;
    		const { data1, data2, data3, data4, data5, data6, data7 } = this.temperatures;
   			 return {
      			xAxis: {
        		data: ['data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'data7']
      			},
      		series: [{
        		name: '数据',
        		type: 'line',
        		data: [data1, data2, data3, data4, data5, data6, data7]
      		}]
    };
  }
  	},
	watch: {
    	dataObject: {
      	handler() {
        	this.chart.setOption(this.chartData);
      	},
      	deep: true
    }
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
					this.dataObject.temperature = data.temperature;
					this.dataObject.humidity = data.humidity;
					this.dataObject.timestamp = data.timestamp;
					this.chart.setOption(this.chartData);
					console.log(this.chart);
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
