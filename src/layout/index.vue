<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <Logo></Logo>
      <!-- 菜单滚动条 -->
      <el-scrollbar height="400px" class="scrollbar">
        <!-- 菜单组件  #001529-->
        <el-menu background-color="#001529" text-color="white">
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar">顶部导航</div>
    <!-- 内容展示区 -->
    <div class="layout_main">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
// logo组件
import Logo from './logo/index.vue'
// munu组件
import Menu from './menu/index.vue'
// Main组件二级路由
import Main from './main/index.vue'
// 获取用户相关小仓库
import useUserSotre from '@/store/modules/user'
let userStore = useUserSotre()
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  background-color: red;

  // 左侧导航栏
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
    // background-color: rgb(200, 98, 115);

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);

      .el-menu {
        border-right: none;
      }
    }
  }

  // 顶部
  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background-color: cyan;
    top: 0;
    left: $base-menu-width;
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
  }
}
</style>
