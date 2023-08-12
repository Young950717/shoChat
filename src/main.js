import { createApp } from 'vue'
import App from './App.vue'
import routes from '@/router/index'
import '@/assets/style/index.less'
import { createRouter, createWebHashHistory } from 'vue-router'
import i18n from './locals'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next()
})
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(i18n)
app.mount('#app')

