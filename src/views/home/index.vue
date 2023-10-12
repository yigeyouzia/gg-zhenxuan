<template>
  <div>我是二级路由home</div>
  <div>{{ userSotre }}</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import useUserStore from '@/store/modules/user'

let userSotre = useUserStore();

onMounted(() => {
  userSotre.userInfo()
})
</script>

<style scoped lang="scss"></style>
