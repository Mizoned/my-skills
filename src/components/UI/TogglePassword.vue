<template>
  <div class="toggle-password" @click="togglePassword">
    <img v-if="!isTogglePassword" src="@/assets/images/icons/icon-shield-24.svg">
    <img v-else src="@/assets/images/icons/icon-shield-off-24.svg">
  </div>
</template>

<script>
export default {
  name: "TogglePassword",
  props: {
    isTogglePassword: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    togglePassword() {
      this.$emit('update:isTogglePassword', !this.isTogglePassword)
    }
  }
}
</script>

<style scoped lang="scss">
.toggle-password {
  position: absolute;
  display: flex;
  align-items: center;
  width: 24px;
  cursor: pointer;
  top: 0;
  right: 10px;
  bottom: 0;

  & img {
    width: 100%;
  }
}
</style>