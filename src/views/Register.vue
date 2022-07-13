<template>
  <div class="sign-up">
    <div class="sign-up__inner">
      <div class="sign-up__title">SIGN UP</div>
      <div class="sign-up__inputs">
        <input-form class="sign-up__input" v-model="register_form.name" type="text" placeholder="Your name"/>
        <input-form class="sign-up__input" v-model="register_form.email" type="email" placeholder="Enter email"/>

        <div class="input-password-wrapper">
          <input-form class="sign-up__input" v-model="register_form.password" :type="!isTogglePassword ? 'password' : 'text'" placeholder="Enter password"/>
          <toggle-password v-model:isTogglePassword="isTogglePassword"/>
        </div>
      </div>
      <button-component class="sign-up__button" @click="register">Sign Up</button-component>
      <span class="sign-up__login">Already have an account? <router-link to="/login">Sign in</router-link></span>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      isTogglePassword: false
    }
  },
  setup() {
    const register_form = ref({});
    const store = useStore();

    const register = () => {
      store.dispatch('register', register_form.value);
    }
    return {
      register_form,
      register
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
  .sign-up {
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

    &__login {
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