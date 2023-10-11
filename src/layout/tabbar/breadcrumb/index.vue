<!-- 顶部导航栏左侧内容 -->
<template>
    <!-- 1折叠图标 -->
    <el-icon style="margin-right: 10px;" @click="changeIcon">
        <component :is="LayOutSettingStore.fold ? 'Fold' : 'Expand'"></component>
    </el-icon>
    <!-- 2面包屑 -->
    <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index" v-show="item.meta.title" :to="item.path">
            <!-- 面包屑图标 -->
            <el-icon style="vertical-align: middle;">
                <component :is="item.meta.icon"></component>
            </el-icon>
            <!-- 面包屑标题 -->
            <span style="margin: 0px 2px;">{{ item.meta.title }}</span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
// 控制图标切换  控制菜单折叠开关
import useLayOutSettingStore from "@/store/modules/setting";
import { useRoute } from "vue-router";

let LayOutSettingStore = useLayOutSettingStore()
// 获取路由对象
let $route = useRoute()

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
