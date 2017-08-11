<template>
  <div class="container">
    <div class="top">
      <div class="">
        <h2>期权列表</h2>
      </div>
      <button>新增</button>
    </div>
    <div class="content">
      <el-table :data="tableData2" style="width: 100%">
        <el-table-column prop="id" label="id" width="50"></el-table-column>
        <el-table-column prop="company" label="公司名称" width="150"></el-table-column>
        <el-table-column prop="name" label="名称" width="100"></el-table-column>
        <el-table-column prop="sum" label="总数" width="100"></el-table-column>
        <el-table-column prop="num" label="发行期数" width="100"></el-table-column>
        <el-table-column prop="time" label="创建时间" width="100"></el-table-column>
        <el-table-column prop="status" label="状态" width="100"></el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button type="text" size="small" v-if="scope.row.status==='未发行'" @click="handclick(scope)">编辑</el-button>
            <el-button type="text" size="small" v-if="scope.row.status==='未发行'" @click="handclick(scope)">发行</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    width: 100%;

    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>

<script>
export default {
  methods: {
    tableRowClassName(row, index) {
      if (this.tableData2[index].status === '已发行') {
        return '';
      }
      return 'info-row';
    },
    handclick(scope) {
      console.log(scope);
    }
  },
  data() {
    return {
      tableData2: [{
        id: 1,
        company: '浙江数秦科技',
        name: '期权1号',
        sum: '1000',
        num: '2',
        time: '2017.6.21',
        status: '已发行'
      }, {
        id: 1,
        company: '浙江数秦科技',
        name: '期权1号',
        sum: '1000',
        num: '2',
        time: '2017.6.21',
        status: '未发行'
      }, {
        id: 1,
        company: '浙江数秦科技',
        name: '期权1号',
        sum: '1000',
        num: '2',
        time: '2017.6.21',
        status: '已发行'
      }, {
        id: 1,
        company: '浙江数秦科技',
        name: '期权1号',
        sum: '1000',
        num: '2',
        time: '2017.6.21',
        status: '已发行'
      }]
    }
  }
}
</script>