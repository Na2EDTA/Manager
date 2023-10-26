<template>
<el-aside width="200px" style="background-color: #eee; height: 100%; overflow: hidden; text-align: left; font-size: 30px;">
              <el-menu 
              :lt-openeds="['1']"
              background-color="#7cc5ba"
              
              text-color="rgb(249, 249, 249)"
              active-text-color="#00aaff"
              style="height: 91.2vh;min-height: 100%;"
              :unique-opened = "true"
              router>
              <el-menu-item index="/" >
                      <template slot="title">
                          <i class="el-icon-s-home" style="color: #eee;"></i>
                          <span slot="title">主页</span>
                      </template>
              </el-menu-item>
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
                        <el-menu-item index="/watch">
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
                    <el-menu-item index="/user" >查询用户</el-menu-item>
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
                      <i class="el-icon-camera-solid" style="color: #eee;"></i>
                      <span slot="title">监控</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">媒体</template>
                    <el-menu-item index="/media1">视频监控1</el-menu-item>
                    <el-menu-item index="3-2">视频监控2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="3-3">数据</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="3-4">
                    <template slot="title">可视化图表</template>
                    <el-menu-item index="/charts">选项4-1</el-menu-item>
                  </el-submenu>
                </el-submenu>
              </el-menu>
          </el-aside>
</template>

<script>
export default {
    name: "Aside"
}
</script>
<style scoped>
</style>