<template>
    <div class="tabbar">
        <!-- 顶部左侧静态 -->
        <div class="tabbar-left">
            <Breadcrumb></Breadcrumb>
        </div>
        <!-- 顶部右侧静态 -->
        <div class="tabbar-right">
            <Setting></Setting>
        </div>
    </div>
</template>

<script setup lang="ts">
// 左侧
import Breadcrumb from "./breadcrumb/index.vue"
// 右侧
import Setting from "./setting/index.vue"


</script>

<script lang="ts">
export default {
    name: "Tabbar"
}
</script>

<style scoped lang="scss">
.tabbar {
    width: 100%;
    height: 100%;
    // flex布局 一左一右
    display: flex;
    justify-content: space-between;
    // 渐变色
    background-image: linear-gradient(to right, rgb(232, 223, 223), rgb(201, 178, 178), rgb(194, 173, 173));

    .tabbar-left {
        display: flex;
        justify-content: space-around;
        // 侧轴居中
        align-items: center;
        margin-left: 20px;
    }

    .tabbar-right {
        display: flex;
        justify-content: space-around;
        // 侧轴居中
        align-items: center;
    }
}
</style>
