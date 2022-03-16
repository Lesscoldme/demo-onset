<template>
    <el-menu v-for="items in list " :key="items.path" background-color="#f2f2f2" router>
        <el-menu-item v-if="!items.childrenToMain" :index="items.path">{{ items.meta.text }}</el-menu-item>
        <el-sub-menu v-else :index="items.path" @click='skipRoute'>
            <template #title>{{ items.meta.text }}</template>
            <el-menu-item
                v-for="item in items.childrenToMain"
                :index="item.path"
                :key="item.name"
            >{{ item.meta.text }}</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script  lang='ts'>
import { defineComponent } from 'vue';
import store from '@/store';
export default defineComponent({
  name: 'MeunAside',
  setup() {
    const skipRoute = () => {
    //   console.log(1);
    };
    const list = store.getters.getList;
    return {
      list,
      skipRoute,
    };
  },
});
</script>

<style lang="less" scoped>
</style>
