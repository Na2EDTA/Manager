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
					<span slot="title">查询</span>
				</template>
				<el-menu-item-group>
				  <template slot="title">用户相关</template>
				  <el-menu-item index="2-1">查询用户</el-menu-item>
				  <el-menu-item index="2-2">查询准入记录</el-menu-item>
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
