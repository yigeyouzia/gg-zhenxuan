<!-- 顶部导航栏右侧内容 -->
<script setup lang="ts">
// 获取骨架的小仓库
import { useRoute, useRouter } from 'vue-router'
import useUserStore from '@/store/modules/user'
import useLayOutSettingStore from '@/store/modules/setting'

// 使用仓库
const LayOutSettingStore = useLayOutSettingStore()
const userSotre = useUserStore()

// 路由器对象
const $router = useRouter()
// 路由对象
const $route = useRoute()

// 刷新按钮回调
function updateRefsh() {
  LayOutSettingStore.refsh = !LayOutSettingStore.refsh
}

// 全屏按钮
function fullScreen() {
  // DoM对象的一个属性：可以用来判断当前是不是全屏模式[全屏：true,不是全屏：false]
  const full = document.fullscreenElement
  // 切换为全屏模式
  if (!full) {
    // 文档根节点的方法requestFullscreen,实现全屏模式
    document.documentElement.requestFullscreen()
  }
  else {
    // 变为不是全屏模式->退出全屏模式
    document.exitFullscreen()
  }
}

// 退出登录
async function logout() {
  // 1.退出登录请求接口
  // 2.清除pina仓库相关数据
  await userSotre.userLogout()
  // 3.跳转页面
  $router.push({ path: '/login', query: { redirect: $route.path } })
}
</script>

<script lang="ts">
export default {
  name: 'Setting',
}
</script>

<template>
  <!-- 1刷新按钮 -->
  <el-button
    size="small"
    icon="Refresh"
    circle
    @click="updateRefsh"
  />
  <!-- 2全屏按钮 -->
  <el-button
    size="small"
    icon="FullScreen"
    circle
    @click="fullScreen"
  />
  <!-- 3设置按钮 -->
  <el-button size="small" icon="Setting" circle />
  <!-- 4头像 -->
  <img
    :src="userSotre.avatar"
    alt="avatar"
    style="width: 24px; height: 24px; margin: 0px 10px; border-radius: 50%"
  >
  <!-- 5下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userSotre.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <!-- 具名插槽 -->
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss"></style>
