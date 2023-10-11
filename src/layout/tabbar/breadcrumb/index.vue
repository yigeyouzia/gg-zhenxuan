<!-- 顶部导航栏左侧内容 -->
<template>
    <!-- 1折叠图标 -->
    <el-icon style="margin-right: 10px;" @click="changeIcon">
        <component :is="LayOutSettingStore.fold ? 'Fold' : 'Expand'"></component>
    </el-icon>
    <!-- 2面包屑 -->
    <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item>权限管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
// 控制图标切换  控制菜单折叠开关
import useLayOutSettingStore from "@/store/modules/setting";

let LayOutSettingStore = useLayOutSettingStore()

// 点击图标伸缩
const changeIcon = () => {
    LayOutSettingStore.fold = !LayOutSettingStore.fold
}

</script>

<script lang="ts">
export default {
    name: "Breadcrumb"
}
</script>

<style scoped lang="scss"></style>
