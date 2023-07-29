import { createApp } from 'vue'
import App from '@/App.vue'

// 1element ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs' // 国际化

// 2获取应用实例对象
const app = createApp(App)

// 3安装ele
app.use(ElementPlus, {
  locale: zhCn,
})

// 4svg 插件
import 'virtual:svg-icons-register'
// 5引入自定义插件对象，注册全局组件
import globalComponent from '@/components'
// 安装自定义插件
app.use(globalComponent)

//6.引入全局样式
import '@/styles/index.scss'

app.mount('#app')
