<template>
  <div class="sign-up">
    <div class="sign-up__inner">
      <div class="sign-up__title">SIGN UP</div>
      <div class="sign-up__inputs">
        <input-form class="sign-up__input" v-model="email" type="email" placeholder="Enter email"/>
        <input-form class="sign-up__input" v-model="password" type="password" placeholder="Enter password"/>
      </div>
      <button-component class="sign-up__button" @click="submitHandler">Sign Up</button-component>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async submitHandler() {
      console.log('hi')
      const formData = {
        email: this.email,
        password: this.password
      }

      try {
        await this.$store.dispatch('signUp', formData)
        await this.$router.push('/');
      } catch (e) {}
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