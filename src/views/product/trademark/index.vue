<!-- 品牌管理 -->
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import type { UploadProps } from 'element-plus'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import type { Records, TradeMark, TradeMarkResponseData } from '@/api/product/type'
import { reqAddOrUpdateTrademark, reqHasTrademark } from '@/api/product/trademark.ts'

// 1.分页器
// 1.1分页器当前页面
const pageNo = ref<number>(1)
// 1.2每一页数据个数
const limit = ref<number>(3)
// 1.3:page-sizes 一页展示数据个数下拉选项
// 1.4small  是否小型  background 按钮是否有颜色

// 存储已有品牌总数
const total = ref<number>(0)
// 存储已有品牌数据
const trademarkArr = ref<Records>([])

// 2对话框显示
const dialogFormVisible = ref<boolean>(true)
// 3.收集增加物品数据
const trademarkParams = reactive<TradeMark>({
  tmName: '',
  logoUrl: '',
})

// 获取品牌函数
async function getHasTrademark() {
  const res: TradeMarkResponseData = await reqHasTrademark(pageNo.value, limit.value)
  if (res.code == 200) {
    total.value = res.data.total
    trademarkArr.value = res.data.records
  }
}

onMounted(() => {
  getHasTrademark()
})

// 一页个数
function pageNoChange() {
  // 页码变为1
  pageNo.value = 1
  getHasTrademark()
}

// 页码改变
function sizeChange() {
  getHasTrademark()
}

// 2.对话框
function addTradeMark() {
  // 打开前清空
  trademarkParams.tmName = ''
  trademarkParams.logoUrl = ''
  dialogFormVisible.value = true
}

function UpdateTradeMark(data: TradeMark) {
  trademarkParams.logoUrl = data.logoUrl
  trademarkParams.tmName = data.tmName
  dialogFormVisible.value = true
}

// 上传信息
async function confirm() {
  const res: any = await reqAddOrUpdateTrademark(trademarkParams)
  if (res.code === 200) {
    ElMessage.success('添加品牌成功🥰🥰')
    // 再次请求数据
    getHasTrademark()
  }
  else {
    ElMessage.error('添加品牌成功🥰🥰')
  }
  dialogFormVisible.value = false
}

// 对话框取消
function cancel() {
  dialogFormVisible.value = false
}

// 3.文件上传之前钩子
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type === 'image/jpeg' || rawFile.type === 'image/png' || rawFile.type === 'image/gif') {
    if (rawFile.size / 1024 / 1024 < 4) {
      return true
    }
    else {
      ElMessage.error('文件大于4MB!')
      return false
    }
  }
  else {
    ElMessage.error('上传文件必须是PNG | JPG | GIF格式')
    return false
  }
}

// 文件上传成功
const handleAvatarSuccess: UploadProps['onSuccess'] = (response) => {
  trademarkParams.logoUrl = response.data
}
</script>

<template>
  <div>
    <el-card class="box-card">
      <!-- 添加按钮 -->
      <el-button type="primary" size="default" icon="Plus" @click="addTradeMark">
        添加品牌
      </el-button>
      <!-- 表格组件 -->
      <el-table border style="{margin: 10px 0px;}" :data="trademarkArr">
        <el-table-column prop="id" label="序号" width="280px" align="center" type="index" />
        <el-table-column prop="tmName" label="品牌名称" />
        <el-table-column prop="tmName" label="品牌LOGO">
          <template #="{ row }">
            <img
              :src="row.logoUrl[0] != 'h' ? '/src/assets/images/avatar.jpg' : row.logoUrl" alt=""
              style="width: 100px; height: 100px;"
            >
          </template>
        </el-table-column>
        <el-table-column label="品牌操作">
          <template #="{ row }">
            <el-button type="primary" size="small" icon="Edit" @click="UpdateTradeMark(row)" />
            <el-button type="primary" size="small" icon="Delete" />
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页器组件 -->
      <el-pagination
        v-model:current-page="pageNo" v-model:page-size="limit" :page-sizes="[3, 5, 7, 9]" :small="false"
        :disabled="false" :background="true" layout="prev, pager, next,jumper,->,sizes,total" :total="total"
        @size-change="pageNoChange" @current-change="sizeChange"
      />
    </el-card>

    <!-- 对话框组件 -->
    <el-dialog v-model="dialogFormVisible" title="bb" width="30%" @close="">
      <el-form>
        <el-form-item label="品牌名称" label-width="80px">
          <el-input v-model="trademarkParams.tmName" placeholder="请输入品牌名称" />
        </el-form-item>
        <el-form-item label="品牌LOGO" label-width="80px">
          <!--
            action: 请求地址
            show-file-list:展示文件列表
            beforeAvatarUpload:上传文件之前钩子
           -->
          <el-upload
            class="avatar-uploader" action="/api/admin/product/fileUpload" :show-file-list="true"
            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload"
          >
            <img v-if="trademarkParams.logoUrl" :src="trademarkParams.logoUrl" class="avatar">
            <el-icon v-else class="avatar-uploader-icon">
              <Plus />
            </el-icon>
          </el-upload>
        </el-form-item>
      </el-form>

      <template #footer>
        <el-button @click="cancel">
          Cancel
        </el-button>
        <el-button type="primary" @click="confirm">
          OK
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss">
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
