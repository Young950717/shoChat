import { createApp } from 'vue'
import App from './App.vue'
import routes from '@/router/index'
import '@/assets/style/index.less'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  window.scrollTo(0,0);
  next()
})
const app = createApp(App)
app.use(router)
app.mount('#app')

