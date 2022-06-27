import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ProfileView from "@/views/ProfileView";

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/profile',
    component: ProfileView
  },
  {
    path: '/404',
    component: NotFoundView,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
