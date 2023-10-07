import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  

  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/SearchView.vue')
  },
  {
    path: 'media1',
    name: 'Media1',
    component: () => import('../views/Media1View.vue')
  },
  {
    path: '/',
    name: 'Manager',
    component: () => import('../views/ManagerView.vue'),
    redirect: "/home",
    children: [
      { path: 'user', name: "User", component: () => import("../views/SearchView.vue")},
      { path: 'home', name: "Home", component: () => import("../views/HomeView.vue")},
      { path: 'watch', name: "Watch", component: () => import("../views/WatchView.vue")},
      { path: 'media1', name: "Media1", component: () => import("../views/Media1View.vue")}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
