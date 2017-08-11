<template>
    <div class="container">
        <ul class="nav">
          <li>联系我们</li>
          <li>法律说明</li>
          <li>隐私条款</li>
          <li>浙公网安备 33010402000402号　©浙ICP备15042144号-1</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .container {
        background: black;
        height: 75px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        display: flex;
        justify-content: center;

        .nav {
          display: flex;
          list-style: none;

          li {
              margin-right: 80px;
          }
        }
    }
</style>

<script>
    export default {
        
    }
</script>