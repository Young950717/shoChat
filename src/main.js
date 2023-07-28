import { createApp } from 'vue'
import App from './App.vue'
import routes from '@/router/index'
import '@/assets/style/index.less'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  window.scrollTo(0,0);
  next()
})
const app = createApp(App)
app.use(router)
app.mount('#app')

