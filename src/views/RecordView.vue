<template>
    <div>
      <div style="padding: 10px 0;">
                  <el-input style="width: 200px; margin-left: 5px" placeholder="请输入id" suffix-icon="el-icon-search" v-model="id"></el-input>
                   <el-button type="primary" style="margin-left: 5px" @click="load">搜索</el-button>
              </div>
              <div>
                  <el-button type="primary" style="margin-left: 5px">导入</el-button>
                  <el-button type="primary" style="margin-left: 5px">导出</el-button>
              </div>
              <el-table :data="tableData" border stripe: header-cell-class-name="headerBg">
                  <el-table-column prop="id" label="id" >
                  </el-table-column>
                  <el-table-column prop="phone" label="手机号" >
                  </el-table-column>
                  <el-table-column prop="email" label="邮箱">
                  </el-table-column>
                  <el-table-column prop="identity" label="用户类别">
                  </el-table-column>
                  <el-table-column>
                      <template slot-scope="scope">
                          <el-button type="warning">编辑</el-button>
                          <el-button type="danger">删除</el-button>
                      </template>
                  </el-table-column>
              </el-table>
              <div style="padding: 10px 0;"> 
                  <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page="pageNum"
                      :page-sizes="[5, 10, 15, 20]"
                      :page-size="pageSize"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="total">
                  </el-pagination>
              </div>
    </div>
    
  </template>
  
  <script>
  export default {
      name: "User",
    data() {
      return {
          tableData: [],
          id:0,
          total: 0,
          pageNum: 1,
          pageSize: 5
        }
    },
    
    methods: {
      load() {
              fetch("http://localhost:8082/jat/api/userpageid?pageNum="+this.pageNum+"&pageSize="+this.pageSize+"&id="+this.id).then(res => res.json()).then(res => {
              console.log(res)
              this.tableData = res.data
              this.total = res.total
          })
          },
          handleSizeChange(pageSize) {
              this.pageSize = pageSize
              this.load()
          },
          handleCurrentChange(pageNum) {
              this.pageNum = pageNum;
              this.load()
          },
    }
  }
  </script>
  
  <style>
  .headerBg{
    background-color: rgb(222, 245, 237) !important;
  }
  </style>