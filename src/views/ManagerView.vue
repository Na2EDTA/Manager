<template>
    <div style="height: 100%;">
      <Header />
      <el-container style="height: 100%; border-top: 1.5px solid rgb(237, 249, 248)">
        <Aside :unique-opened="true" />
          <el-main>
            
            <router-view />
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
import router from '@/router';
  import axios from 'axios'
  import chartjs from 'chart.js'
  import * as echarts from 'echarts';
  import  Aside  from '@/components/Aside.vue';
  import Header from '@/components/Header.vue';
  
  export default {
    data() {
  
        return {
                
                temperature: 0, 
                humidity: 0,
                timestamps: 0
  
        }
  
      },
      
      components: {Aside, Header},
      methods:{
        
          requestSensorData(){
              const url = 'http://192.168.31.104/sensor/data'
              this.sendToServer(url)
              
          },
          toggleSetting() {
            this.settingEnabled = !this.settingEnabled
          
            const url = this.settingEnabled ? 'http://192.168.31.104/led/on' : 'http://192.168.31.104/led/off';
            this.sendToServer(url)
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
  .headerBg{
    background-color: rgb(222, 245, 237) !important;
  }
</style>