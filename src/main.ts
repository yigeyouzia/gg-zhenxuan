import { createApp } from 'vue'
import App from '@/App.vue'

// 1element ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs' // 国际化
import Verify from '@/utils/Verify'

// 4svg 插件
import 'virtual:svg-icons-register'
// 5引入自定义插件对象，注册全局组件
import globalComponent from '@/components'
// 7.路由
import router from './router'
const app = createApp(App)

// 8引入pinia
import pinia from './store'
// 安装自定义插件
app.use(globalComponent)
// 2获取应用实例对象

// 3安装ele
app.use(ElementPlus, {
  locale: zhCn,
})

//6.引入全局样式
import '@/styles/index.scss'

// 7注册路由
app.use(router)
// 8注册pinia
app.use(pinia)

app.config.globalProperties.Verify = Verify

app.mount('#app')
