import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

export default {
    actions: {
        async signIn({ dispatch, commit }, { email, password }) {
            try {
                await signInWithEmailAndPassword(getAuth(), email, password);
            } catch (e) {
                throw e;
            }
        },
        async signOut() {
            await signOut(getAuth());
        },
        async signUp({ dispatch, commit }, { email, password }) {
            try {
                await createUserWithEmailAndPassword(getAuth(), email, password);
            } catch (e) {
                throw e;
            }
        }
    },
}