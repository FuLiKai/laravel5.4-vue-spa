<template>
    <div class="container">
         <el-row class="tac">
            <el-col>
                <el-menu :default-active="defaultRoute" class="el-menu-vertical-demo" :router="flag">
                  <el-submenu index="1">
                     <template slot="title"><i class="el-icon-menu"></i>公司管理</template> 
                     <el-menu-item index="/company">公司管理</el-menu-item>
                  </el-submenu>
                  <el-submenu index="2">
                     <template slot="title"><i class="el-icon-menu"></i>期权管理</template> 
                     <el-menu-item index="/option">期权管理</el-menu-item>
                     <el-menu-item index="/exercise">行权列表</el-menu-item>
                  </el-submenu>
                  <el-submenu index="3">
                     <template slot="title"><i class="el-icon-menu"></i>用户管理</template> 
                     <el-menu-item index="/userInfo">用户信息</el-menu-item>
                     <el-menu-item index="/userData">认证资料</el-menu-item>
                     <el-menu-item index="/bankCard">银行卡绑定</el-menu-item>
                  </el-submenu>
                  <el-submenu index="4">
                     <template slot="title"><i class="el-icon-menu"></i>资产管理</template> 
                     <el-menu-item index="/rmbWithDraw">人民币提现管理</el-menu-item>
                     <el-menu-item index="/digitalWithDraw">数字资产提币列表</el-menu-item>
                  </el-submenu>
                  <el-submenu index="5">
                     <template slot="title"><i class="el-icon-menu"></i>资产流水</template> 
                     <el-menu-item index="/rmbRecharge">人民币充值列表</el-menu-item>
                     <el-menu-item index="/rmbStatistics">人民币统计流水</el-menu-item>
                     <el-menu-item index="/digitalRecharge">数字货币充值列表</el-menu-item>
                     <el-menu-item index="/digitalStatistics">数字货币统计流水</el-menu-item>
                     <el-menu-item index="/stockList">股权列表</el-menu-item>
                     <el-menu-item index="/stockStatistics">股权统计</el-menu-item>
                  </el-submenu>
                  <el-submenu index="6">
                     <template slot="title"><i class="el-icon-menu"></i>账户权限管理</template> 
                     <el-menu-item index="/roles">角色管理</el-menu-item>
                     <el-menu-item index="/accounts">账户管理</el-menu-item>
                  </el-submenu>
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