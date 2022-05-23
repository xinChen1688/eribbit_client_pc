import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
   
]
// vue 2.0 new vuerouter
// vue 3 createrouter
const router = createRouter({
  //使用hash的路由模式
  history: createWebHashHistory(),
  routes
})

export default router
