<template>
  <div class="sign-in">
    <div class="sign-in__inner">
      <div class="sign-in__title">SIGN IN</div>
      <div class="sign-in__inputs">
        <input-form class="sign-in__input" v-model="login_form.email" type="email" placeholder="Enter email"/>
        <div class="input-password-wrapper">
          <input-form class="sign-in__input" v-model="login_form.password" :type="!isTogglePassword ? 'password' : 'text'" placeholder="Enter password"/>
          <toggle-password v-model:isTogglePassword="isTogglePassword"/>
        </div>
      </div>
      <button-component class="sign-in__button" @click="login">Sign In</button-component>
      <span class="sign-in__register">Don’t have an account? <router-link to="/register">Sign up</router-link></span>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "SignIn",
  components: {},
  data() {
    return {
      isTogglePassword: false
    }
  },
  setup() {
    const login_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch('login', login_form.value);
    }
    return {
      login_form,
      login
    }
  },
  methods: {
    togglePassword(toggle) {
      console.log('test')
      this.isTogglePassword = toggle;
    }
  }
}
</script>

<style scoped lang="scss">
  .sign-in {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    &__inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 16px;
      padding: 40px 20px;
    }

    &__title {
      text-align: center;
      font-weight: 700;
      font-size: 36px;
      color: #2E4052;
    }

    &__inputs {
      display: flex;
      flex-direction: column;
      row-gap: 16px;
    }

    &__button {
      max-width: 130px;
    }

    &__register {
      font-size: 14px;
      color: #2E4052;
      font-weight: 700;
      a {
        text-decoration: none;
        color: #49a074;
      }
    }
  }

  .input-password-wrapper {
    position: relative;
  }
</style>