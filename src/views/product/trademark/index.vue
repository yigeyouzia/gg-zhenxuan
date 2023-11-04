<!-- 品牌管理 -->
<template>
  <el-card class="box-card">
    <!-- 添加按钮 -->
    <el-button type="primary" size="default" icon="Plus">添加品牌</el-button>
    <!-- 表格组件 -->
    <el-table border style="{margin: 10px 0px;}" :data="trademarkArr">
      <el-table-column prop="id" label="序号" width="280px" align="center" type="index"></el-table-column>
      <el-table-column prop="tmName" label="品牌名称"></el-table-column>
      <el-table-column prop="tmName" label="品牌LOGO">
        <template #="{ row }">
          <img :src="row.logoUrl[0] != 'h' ? '/src/assets/images/avatar.jpg' : row.logoUrl" alt=""
            style="width: 100px; height: 100px;">
        </template>
      </el-table-column>
      <el-table-column label="品牌操作">
        <template #="{ }">
          <el-button type="primary" size="small" icon="Edit"></el-button>
          <el-button type="primary" size="small" icon="Delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器组件 -->
    <el-pagination v-model:current-page="pageNo" v-model:page-size="limit" :page-sizes="[3, 5, 7, 9]" :small="false"
      :disabled="false" :background="true" layout="prev, pager, next,jumper,->,sizes,total" :total="total"
      @size-change="pageNoChange" @current-change="sizeChange" />
  </el-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { reqHasTrademark } from '@/api/product/trademark.ts'
import type { Records, TradeMarkResponseData } from "@/api/product/type"

// 1.分页器
// 1.1分页器当前页面
let pageNo = ref<number>(1)
// 1.2每一页数据个数
let limit = ref<number>(3)
// 1.3:page-sizes 一页展示数据个数下拉选项
// 1.4small  是否小型  background 按钮是否有颜色

// 存储已有品牌总数
let total = ref<number>(0)
// 存储已有品牌数据
let trademarkArr = ref<Records>([])

// 获取品牌函数
const getHasTrademark = async () => {
  let res: TradeMarkResponseData = await reqHasTrademark(pageNo.value, limit.value)
  if (res.code == 200) {
    total.value = res.data.total
    trademarkArr.value = res.data.records
  }
}

onMounted(() => {
  getHasTrademark()
})

// 一页个数
const pageNoChange = () => {
  // 页码变为1
  pageNo.value = 1
  getHasTrademark()
}

// 页码改变
const sizeChange = () => {
  getHasTrademark()
}
</script>

<style scoped lang="scss"></style>
