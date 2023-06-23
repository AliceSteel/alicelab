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
  //dynamic routing:__________________________________________________
  {
    path: '/projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "About" */ '@/views/ClientsPage.vue')
  },
  {
    path: '/projects/:id',
    name: 'ProjectN',
    component: () => import(/* webpackChunkName: "About" */ '@/views/projects/ProjectN.vue')
  },
  //___________________________________________________________________

  {
    path: '/:catchAll(.*)',
    name: '404Page',
    component: () => import(/* webpackChunkName: "404" */ '@/views/404Page.vue')
  },
  //redirect:
  {
    path: '/projects/05',
    redirect: '/projects'
  }
]

const router = createRouter({
  history: createWebHistory(),
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
