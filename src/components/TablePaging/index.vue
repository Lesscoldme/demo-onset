<template>
  <el-table :data="tableData" >
    <el-table-column label="项目名称" width="100%">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <span style="margin-left: 10px">{{ scope.row.project }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="客户名称" prop="name" ></el-table-column>
    <el-table-column label="产品名称" prop="projecetName"></el-table-column>
    <el-table-column label="产品版本" prop="version"></el-table-column>
    <el-table-column label="底座版本" prop="pedestal"></el-table-column>
    <el-table-column label="项目状态" prop="status"></el-table-column>
    <el-table-column label="维保授权" prop="authorizedMaintenance"></el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="small" type="text" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
        <el-button size="small" type="text" @click="handleDelete(scope.$index, scope.row)">授权更新</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="paging">
    <el-pagination
      v-model:currentPage="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[5, 15, 20, 25]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, prev, pager, next, sizes, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, ref } from 'vue';

// 分页类型
type Value = {
  small: boolean
  disabled: boolean
  background: boolean
  total: number
};
// 默认页码
const currentPage = ref<number>(1);
const pageSize = ref<number>(10);
// 分页默认值
withDefaults(defineProps<Value>(), {
  small: false,
  disabled: false,
  background: true,
  total: 250,
});

interface User {
  project: string,
  name: string,
  projecetName: string,
  version: string,
  pedestal: string,
  status: string,
  authorizedMaintenance: string,
  operation: string,
}

// 详情按钮
const handleEdit = (index: number, row: User) => {
  console.log(index, row);
};
// 删除按钮
const handleDelete = (index: number, row: User) => {
  console.log(index, row);
};

// 下拉页码选项
const handleSizeChange = (page: number) => {
  console.log(page);
};
// 点击页码
const handleCurrentChange = (page: number) => {
  console.log(page);
};

const tableData: User[] = [
  {
    project: '项目A',
    name: 'Tom',
    projecetName: 'Angeles',
    version: '1.1',
    pedestal: '2.2',
    status: 'good',
    authorizedMaintenance: 'yes',
    operation: '11',
  },
  {
    project: '项目A',
    name: 'Tom',
    projecetName: 'Angeles',
    version: '1.1',
    pedestal: '2.2',
    status: 'good',
    authorizedMaintenance: 'yes',
    operation: '11',
  },
];
</script>

<style lang="less" scoped>
.paging {
  padding: 40px 20px;
}
/deep/.el-pagination__sizes {
  margin-left: 20px;
}
/deep/.el-pagination__total + button.btn-prev[type="button"] {
  margin-left: 70vh;
}
</style>
