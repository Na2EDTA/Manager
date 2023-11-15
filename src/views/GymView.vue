<template>
    <div>
        <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>羽毛球与排球馆</span>
      <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{ o + ' 馆区已开放'}}
    </div>
  </el-card>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>篮球馆</span>
      <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{ o + ' 馆区已开放'}}
    </div>
  </el-card>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>游泳馆</span>
      <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{ o + ' 馆区已开放'}}
    </div>
  </el-card>
    </div>
</template>


<style>
    .text {
      font-size: 14px;
    }
  
    .item {
      margin-bottom: 18px;
    }
  
    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both
    }
  
    .box-card {
      width: 480px;
    }
  </style>