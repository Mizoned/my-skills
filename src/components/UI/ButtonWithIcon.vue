<template>
  <button class="btn-w-i">
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonWithIcon"
}
</script>

<style lang="scss">
  .btn-w-i {
    background: #2E4052;
    border: none;
    border-radius: 5px;
    padding: 8px;
    transition: background 0.3s linear;

    &:hover {
      background: #3d556c;
    }

    img {
      width: 25px;
      display: block;
    }
  }
</style>