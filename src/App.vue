<template>
  <div>
    <p>我是app</p>
  </div>
  <SvgIcon name="phone" color="pink" width="130px" height="130px"></SvgIcon>
</template>

<script setup lang="ts">
import { reqLogin } from '@/api/user'
import { onMounted } from 'vue'

let f = async () => {
  let res = await reqLogin({
    username: 'admin',
    password: '111111',
  })
  console.log(res)
}
onMounted(() => {
  f()
})
</script>

<style scoped lang="scss">
div {
  height: 1111px;

  p {
    color: red;
  }
}
</style>
