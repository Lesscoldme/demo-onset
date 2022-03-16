<template>
  <div class="container">
    <el-button color="#1890ff" style="color: white" @click="newProject">新建</el-button>
    <div class="search">
      <el-link type="primary">高级搜索</el-link>
      <el-button>筛选</el-button>
    </div>
  </div>
  <Table />
</template>

<script setup lang='ts'>
import Table from '@/components/TablePaging/index.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const newProject = () => {
  router.push({
    path: '/client_project/new_project/name=x',
  });
};
</script>

<style lang="less" scoped>
@sapce: space-between;
.container {
  display: flex;
  justify-content: @sapce;
  margin-bottom: 20px;
}
.search {
  display: flex;
  justify-content: @sapce;
  > a {
    padding-right: 10px;
  }
}
</style>
