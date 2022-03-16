<template>
    <el-container class="container">
        <el-header>header</el-header>
        <el-container>
            <el-aside width="200px" class="aside">
                <Meun />
            </el-aside>
            <el-main>
                <Page-header :title="title" :back="back"></Page-header>
                <div class="main">
                    <router-view />
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang='ts'>
import Meun from '@/components/Meun/index.vue';
import PageHeader from '@/components/pageHeader/index.vue';
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const title = ref<string>('');
const back = ref<boolean>(false);


watch(() => route.meta, (newValue) => {
  title.value = newValue.text as string;
  back.value = !!newValue.hide;
}, {
  immediate: true,
});


</script>

<style lang="less" scoped>
.container {
    height: 100%;
}
.aside {
    background-color: #f2f2f2;
}
.main{
    padding-left: 20px;
}
</style>

