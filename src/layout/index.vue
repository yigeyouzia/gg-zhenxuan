<template>
    <div class="layout_container">
        <!-- 左侧菜单  动态类名-->
        <div class="layout_slider">
            <Logo></Logo>
            <!-- 菜单滚动条 -->
            <el-scrollbar height=" 400px" class="scrollbar">
                <!-- 菜单组件  #001529  collapse-->
                <el-menu :default-active="$route.path" background-color="#001529" text-color="white"
                    active-text-color="#2d78be" :collapse="LayOutSettingStore.fold ? true : false">
                    <Menu :menuList="userStore.menuRoutes"></Menu>
                </el-menu>
            </el-scrollbar>
        </div>
        <!-- 顶部导航 -->
        <div class="layout_tabbar" :class="{ fold: LayOutSettingStore.fold ? true : false }">
            <Tabbar></Tabbar>
        </div>
        <!-- 内容展示区 -->
        <div class="layout_main" :class="{ fold: LayOutSettingStore.fold ? true : false }">
            <Main></Main>
        </div>
    </div>
</template>

<script setup lang="ts">
// 获取路由
import { useRoute } from 'vue-router'
// logo组件
import Logo from './logo/index.vue'
// munu组件
import Menu from './menu/index.vue'
// Main组件二级路由
import Main from './main/index.vue'
// 获取用户相关小仓库
import useUserSotre from '@/store/modules/user'
import useLayOutSettingStore from "@/store/modules/setting";
// 引入顶部tab组件
import Tabbar from "./tabbar/index.vue"


// 获取小仓库
let userStore = useUserSotre()
let LayOutSettingStore = useLayOutSettingStore()

// 获取路由对象
let $route = useRoute()

</script>

<script lang="ts">
export default {
    name: "Layout"
}
</script>

<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;
    // color: #2d78be;

    // 左侧导航栏
    .layout_slider {
        color: white;
        width: $base-menu-width;
        height: 100vh;
        background-color: $base-menu-background;
        transition: all 0.3s;
        // background-color: rgb(200, 98, 115);

        .scrollbar {
            width: 100%;
            height: calc(100vh - $base-menu-logo-height);

            .el-menu {
                border-right: none;
            }
        }

        // 折叠动画 父类选择器
        &.fold {
            width: $base-menu-min-width;
        }
    }

    // 顶部
    .layout_tabbar {
        position: fixed;
        width: calc(100% - $base-menu-width);
        height: $base-tabbar-height;
        // background-color: cyan;
        top: 0;
        left: $base-menu-width;
        transition: all 0.3s;

        &.fold {
            width: calc(100vw - $base-menu-min-width);
            left: $base-menu-min-width;
        }
    }

    // 内容展示区
    .layout_main {
        position: absolute;
        width: calc(100% - $base-menu-width);
        height: calc(100vh - $base-tabbar-height);
        background-color: forestgreen;
        left: $base-menu-width;
        top: $base-tabbar-height;
        padding: 20px;
        overflow: auto;
        transition: all 0.3s;


        &.fold {
            width: calc(100vw - $base-menu-min-width);
            left: $base-menu-min-width;
        }
    }
}
</style>
