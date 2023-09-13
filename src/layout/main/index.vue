<template>
    <!-- 二级路由出口 -->
    <router-view v-slot="{ Component }">
        <transition name="fade">
            <component :is="Component"></component>
        </transition>
    </router-view>
</template>

<script setup lang="ts"></script>
<script lang="ts">
export default {
    name: 'Main',
}
</script>

<style style scoped lang="scss">
.fade-enter-from {
    /* 透明度 */
    opacity: 0;
    transform: scale(0);
}

.fade-enter-active {
    transition: all 0.3s;
}

.fade-enter-to {
    opacity: 1;
    transform: scale(1);
}
</style>
