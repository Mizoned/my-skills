import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ProfileView from "@/views/ProfileView";
import Login from "@/views/Login";
import Register from "@/views/Register";
import ProfileSettingsView from "@/views/ProfileSettingsView";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";

const routes = [
  {
    path: '/',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    component: ProfileView,
    meta: { requiresAuth: true },
  },
  {
    path: '/profile/settings',
    component: ProfileSettingsView,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    component: Login
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

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(auth, (user) => {
      removeListener();
      resolve(user);
    }, reject);
  });
}


router.beforeEach(async (to, from, next) => {
  const currentUser = await getCurrentUser();
  if (to.matched.some(record => record.meta.requiresAuth) && !currentUser) {
    next('/login');
    return;
  }

  next();
});

export default router
