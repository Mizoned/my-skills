<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonComponent"
}
</script>

<style scoped lang="scss">
  .btn {
    background: #2E4052;
    border: none;
    border-radius: 5px;
    text-align: center;
    padding: 15px 30px;
    transition: background 0.3s linear;
    font-weight: 600;
    font-size: 16px;
    color: #EEF6FF;

    &:hover {
      background: #3d556c;
    }
  }
</style>