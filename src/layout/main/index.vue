<!-- 右侧Main 带过度动画写法 -->
<template>
    <!-- 二级路由出口 -->
    <router-view v-slot="{ Component }">
        <transition name="fade">
            <component :is="Component" v-if="flag"></component>
        </transition>
    </router-view>
</template>

<script setup lang="ts">
import { watch, ref, nextTick } from "vue"

// 获取骨架的小仓库
import useLayOutSettingStore from '@/store/modules/setting';
let LayOutSettingStore = useLayOutSettingStore()

// 控制当前组件是否销毁重建
let flag = ref(true)

// 监听仓库数据是否变化
watch(() => LayOutSettingStore.refsh, () => {
    // 点击刷新按钮： 路由组件销毁
    flag.value = false;
    nextTick(() => { // 保证响应式数据变化后 dom更新完毕
        flag.value = true;
    })
}, { immediate: true, deep: true });

</script>
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
