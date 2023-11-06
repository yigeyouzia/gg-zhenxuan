<script setup lang="ts">
// import { onMounted } from 'vue';
import useUserStore from '@/store/modules/user'

const userSotre = useUserStore()

// onMounted(() => {
//   userSotre.userInfo()
// })
</script>

<template>
  <div>我是二级路由home</div>
  <div>{{ userSotre }}</div>
</template>

<style scoped lang="scss"></style>
