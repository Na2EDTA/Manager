<template>
    <el-header style="text-align: right; font-size: 18px; line-height: 60px; height: 8.5vh;">
        <span style="height: 70px; line-height: 70px;text-align: center;">
          <b style="color: #eee; font-size:30px;font-weight:300; text-align: center; position: relative;right: 49vw; bottom: 0.15vh;">KEEP SECURITY & SPORT</b>
        </span>
        <span style="position: relative; right: 83.6vw; top: 1.15vh;">
                  <img src="../../logo.png" style="height: 6.5vh;width: 6vw;"> 
        </span>
        
        <el-dropdown style="width: 70px; cursor: pointer;">
          <span style="font-size: 15px; color: #eee; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;">管理员</span><i class="el-icon-arrow-down" style="margin-right: 10px"></i>
          <el-dropdown-menu slot="dropdown" style="margin-left: 5px;">
            <el-dropdown-item>账号信息</el-dropdown-item>
            <el-dropdown-item>新增操作</el-dropdown-item >
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header> 
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
</style>