<template>
  <el-header>
    <div class="navbar">
      <div class="logo">Your Logo</div>
      <el-menu :modelValue="activeMenu" class="nav-menu" mode="horizontal" @update:modelValue="handleMenuSelect">
        <el-menu-item index="home">Home</el-menu-item>
        <el-submenu index="products">
          <template #title>Products</template>
          <el-menu-item index="product1">Product 1</el-menu-item>
          <el-menu-item index="product2">Product 2</el-menu-item>
        </el-submenu>
        <el-menu-item index="about">About Us</el-menu-item>
        <el-menu-item index="contact">Contact Us</el-menu-item>
      </el-menu>
    </div>
  </el-header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeMenu = ref('home');

const handleMenuSelect = (index: any) => {
  activeMenu.value = index;
  // 处理导航菜单的点击事件，可以在这里跳转到不同的页面或执行其他操作
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: #fff;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

.nav-menu {
  background-color: #333;
  border: none;
  color: #fff;
}
</style>