import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
const modules = import.meta.globEager('./modules/**/*.ts')
console.log(modules)

const routes: RouteRecordRaw[] = []

Object.keys(modules).forEach((key) => {
  const mode = modules[key].default || {}
  routes.push(...mode)
})

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
