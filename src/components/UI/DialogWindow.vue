<template>
  <div class="dialog-window">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "DialogWindow"
}
</script>

<style scoped>
  .dialog-window {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
  }
</style>