import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ProfileView from "@/views/ProfileView";
import SignIn from "@/views/SignIn";
import Register from "@/views/Register";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
  {
    path: '/',
    redirect: '/profile',
    meta: { authentication: true }
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

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
        getAuth(),
        (user) => {
          removeListener();
          resolve(user)
        },
        reject
    );
  });
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.authentication)) {
    if (await getCurrentUser) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});

export default router
