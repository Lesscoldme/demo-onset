<template>
    <div class="header" >
        <span class="icon" v-if="back"><el-icon><arrow-left-bold /></el-icon></span>
        <el-breadcrumb-item :to="{ path: '/' }">{{title}}</el-breadcrumb-item>
    </div>
</template>

<script lang='ts' setup>
import { defineProps } from 'vue';

type Title = {
  title: string,
  back: boolean
};

defineProps<Title>();


</script>

<style lang="less" scoped>
.header {
    display: flex;
    align-items: center;
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
    padding-left: 20px;
    margin-bottom: 50px;
    >.icon{
        margin-right: 10px;
        margin-top: 5px;
    }
}
</style>
