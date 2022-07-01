import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ProfileView from "@/views/ProfileView";
import SignIn from "@/views/SignIn";
import Register from "@/views/Register";
import { getAuth } from "firebase/auth";

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/profile',
    component: ProfileView,
    meta: { authentication: true },
  },
  {
    path: '/login',
    component: SignIn
  },
  {
    path: '/register',
    component: Register
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
});

router.beforeEach(async (to, from, next) => {
  const currentUser = getAuth().currentUser;
  const requireAuth = to.matched.some(record => record.meta.authentication);

  if (requireAuth && !currentUser) {
    next('/login');
  } else {
    next();
  }

});

export default router
