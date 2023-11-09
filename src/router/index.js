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
      { path: 'media1', name: "Media1", component: () => import("../views/Media1View.vue")},
      { path: 'charts', name: "Charts", component: () => import("../views/ChartsView.vue")},
      { path: 'terminal', name: "Terminal", component: () => import("../views/TerminalView.vue")},
      { path: 'enter', name: "Enter", component: () => import("../views/EnterSerView.vue")},
      { path: 'gym', name: "Gym", component: () => import("../views/GymView.vue")},
      { path: 'record', name: "Record", component: () => import("../views/RecordView.vue")},
      { path: 'light', name: "Light", component: () => import("../views/LightView.vue")}

    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
