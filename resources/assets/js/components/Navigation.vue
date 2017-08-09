<template>
    <div class="container">
         <el-row class="tac">
            <el-col>
                <el-menu :default-active="defaultRoute" class="el-menu-vertical-demo" theme="dark" :router="flag">
                  <el-submenu index="1">
                      <template slot="title"><i class="el-icon-message"></i>导航一</template>
                      <el-menu-item-group>
                      <template slot="title">分组一</template>
                      <el-menu-item index="/option">选项1</el-menu-item>
                      <el-menu-item index="/compony">选项2</el-menu-item>
                      </el-menu-item-group>
                      <el-menu-item-group title="分组2">
                      <el-menu-item index="1-3">选项3</el-menu-item>
                      </el-menu-item-group>
                      <el-submenu index="1-4">
                      <template slot="title">选项4</template>
                      <el-menu-item index="1-4-1">选项1</el-menu-item>
                      </el-submenu>
                  </el-submenu>
                  <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
                  <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
                </el-menu>
            </el-col>
        </el-row> 
    </div>
</template>

<style lang="scss" scoped>
    .container {
      width: 200px;
    }
    .tac {
      width: 200px;
    }
</style>

<script>
  export default {
    data() {
      return {
        flag: true,
        defaultRoute: ''
      }
    },
    mounted() {
        this.defaultRoute = this.$route.fullPath;
    }
  }
</script>