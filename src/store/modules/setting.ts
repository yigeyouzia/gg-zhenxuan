// 关于layout组件配置小仓库
import { defineStore } from 'pinia'

let useLayOutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      fold: false, // 控制菜单折叠或者收起
      refsh: false, // 控制刷新按钮
    }
  },
})

export default useLayOutSettingStore
