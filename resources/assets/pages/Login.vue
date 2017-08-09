<template>
    <div class="container">
        <el-form ref="user" :model="user" label-width="80px">
            <el-form-item label="账号">
                <el-input v-model="user.account" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="user.password" placeholder="请输入密码" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
                <el-button>重置</el-button>
            </el-form-item>
        </el-form>  
    </div>  
</template>

<style lang="scss" scoped>
    .container {
        width: 300px;
        height: 200px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -100px 0 0 -150px;
    }   
</style>

<script>
  export default {
    data() {
      return {
        user: {
          account: '',
          password: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>