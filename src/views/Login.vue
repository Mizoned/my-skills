<template>
  <div class="sign-in">
    <div class="sign-in__inner">
      <div class="sign-in__title">SIGN IN</div>
      <div class="sign-in__inputs">
        <input-form class="sign-in__input" v-model="login_form.email" type="email" placeholder="Enter email"/>
        <input-form class="sign-in__input" v-model="login_form.password" type="password" placeholder="Enter password"/>
      </div>
      <button-component class="sign-in__button" @click="login">Sign In</button-component>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "SignIn",
  components: {},

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
  }
</style>