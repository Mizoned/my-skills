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
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    line-height: 24px;
    column-gap: 10px;
    min-height: 24px;
    background: #2E4052;
    border: none;
    border-radius: 5px;
    padding: 8px;
    transition: background 0.3s linear;
    font-weight: 600;
    font-size: 16px;
    color: #EEF6FF;

    &:hover {
      background: #3d556c;
    }

    img {
      width: 24px;
      height: 24px;
      display: block;
    }
  }
</style>