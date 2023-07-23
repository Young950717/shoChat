import Page1 from '../views/index/page1/index.vue'
import Page2 from '../views/index/page2/index.vue'
const routes =  [
  {
    path: '/',
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: Page1,
      },
      {
        path: 'member',
        component: Page2,
      }
    ]
  }
]
export default routes