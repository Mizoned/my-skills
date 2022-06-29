<template>
  <div v-if="show" class="dialog-window" @click="hideDialog">
    <div @click.stop class="dialog-window__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "DialogWindow",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:show', false);
    }
  }
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