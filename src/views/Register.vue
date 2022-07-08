<template>
  <div class="sign-up">
    <div class="sign-up__inner">
      <div class="sign-up__title">SIGN UP</div>
      <div class="sign-up__inputs">
        <input-form class="sign-up__input" v-model="register_form.email" type="email" placeholder="Enter email"/>
        <input-form class="sign-up__input" v-model="register_form.password" type="password" placeholder="Enter password"/>
      </div>
      <button-component class="sign-up__button" @click="register">Sign Up</button-component>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "Register",
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
}
</style>