<template>
  <input :value="modelValue" class="input" @input="updateInput"/>
</template>

<script>
export default {
  name: "InputForm",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped lang="scss">
  .input {
    padding: 10px 20px;
    font-weight: 600;
    font-size: 14px;
    color: #2E4052;
    border: 1px solid #2E4052;
    border-radius: 5px;

    &::-webkit-input-placeholder {
      color: #9EB8D6;
    }
  }
</style>