import Home from '../views/home.vue'
import App from '../App.vue'
const routes =  [
  {
    path: '/',
    redirect: '/index',
    children: [
      {
        path: 'index',
        component: Home,
      }
    ]
  }
]
export default routes