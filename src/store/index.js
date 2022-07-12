import { createStore } from 'vuex'
import router from '../router';
import { auth } from '@/firebase';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";

export default createStore({
  state: {
    user: null
  },
  getters: {
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER(state) {
      state.user = null;
    }
  },
  actions: {
    async login({ commit }, details) {
      const { email, password } = details;

      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            console.error(error.code);
            break;
          case 'auth/wrong-password':
            console.error(error.code);
            break;
          default:
            console.error(error.message);
        }
        return;
      }

      commit('SET_USER', auth.currentUser);
      router.push('/');
    },
    async register({ commit }, details) {
      const { email, password, name } = details;

      try {
        await createUserWithEmailAndPassword(getAuth(), email, password);
        await updateProfile(auth.currentUser, { displayName: name })
            .then(() => auth.updateCurrentUser(auth.currentUser));
      } catch (e) {
        throw e;
      }
      commit('SET_USER', auth.currentUser);
      router.push('/');
    },
    async logout({ commit }) {
      await signOut(auth);

      commit('CLEAR_USER');

      router.push('/login')
    },

    fetchUsers({ commit }) {
      auth.onAuthStateChanged( async (user) => {
        if (user) {
          commit('SET_USER', user);

          if (router.isReady() && router.currentRoute.value.path === '/login') {
            router.push('/');
          }
        } else {
          commit('CLEAR_USER');
        }
      });
    }
  },
  modules: {
  }
})
