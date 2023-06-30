import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Homeview.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "About" */ '@/views/AboutView.vue')
  },

  {
    path: '/projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "Projects" */ '@/views/ClientsPage.vue')
  },

  {
    path: '/:catchAll(.*)',
    name: '404Page',
    component: () => import(/* webpackChunkName: "404" */ '@/views/404Page.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return {
        top: 0,
        behavior: 'smooth'
      }
    }
  }
})

export default router
