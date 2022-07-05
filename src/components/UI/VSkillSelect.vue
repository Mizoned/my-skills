<template>
  <div class="v-select">
    <div @click="showOptions" class="v-select__content">
      <div class="v-select__skill">
        <div class="v-select__option-img">
          <img v-if="selected.name" :src="formPathImage(selected.src)" :title="selected.name" alt="">
          <img v-else src="@/assets/images/icons/icon-tech-24.svg" title="Select skill" alt="">
        </div>
        <p v-if="selected.name">{{ selected.name }}</p>
        <p v-else class="v-select--no-active">Select...</p>
      </div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id=" Outline / menu-2">
          <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M3.9355 6H20.0645C20.5795 6 21.0005 6.421 21.0005 6.936V7.064C21.0005 7.579 20.5795 8 20.0645 8H3.9355C3.4205 8 3.0005 7.579 3.0005 7.064V6.936C3.0005 6.421 3.4205 6 3.9355 6ZM5 12C5 12.553 4.552 13 4 13C3.448 13 3 12.553 3 12C3 11.447 3.448 11 4 11C4.552 11 5 11.447 5 12ZM7.9355 11H20.0645C20.5795 11 21.0005 11.421 21.0005 11.936V12.064C21.0005 12.579 20.5795 13 20.0645 13H7.9355C7.4205 13 7.0005 12.579 7.0005 12.064V11.936C7.0005 11.421 7.4205 11 7.9355 11ZM20.0645 16H3.9355C3.4205 16 3.0005 16.421 3.0005 16.936V17.064C3.0005 17.579 3.4205 18 3.9355 18H20.0645C20.5795 18 21.0005 17.579 21.0005 17.064V16.936C21.0005 16.421 20.5795 16 20.0645 16Z" fill="#2E4052"/>
        </g>
      </svg>
    </div>
    <div v-if="isOptionsVisible && options.length" class="v-select__options">
      <div @click="selectedOption(option)" class="v-select__option" :key="option.id" v-for="option in options">
        <div class="v-select__option-img">
          <img :src="formPathImage(option.src)" :title="option.name" alt="">
        </div>
        <div class="v-select__option-name">{{ option.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VSkillSelect",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    selected: {
      type: Object,
      default: ''
    }
  },
  data() {
    return {
      isOptionsVisible: false,
    }
  },
  methods: {
    showOptions() {
      this.isOptionsVisible = !this.isOptionsVisible
    },
    selectedOption(option) {
      this.$emit('select', option);
      this.isOptionsVisible = false;
    },
    formPathImage(fileName) {
      if (!fileName) {
        return require('@/assets/images/icons/icon-error-loading-36.svg')
      }

      return require(`@/assets/images/icons/${fileName.toLowerCase()}`);
    },
  }
}
</script>

<style scoped lang="scss">
  .v-select {
    min-width: 250px;
    position: relative;
    border-radius: 5px;
    color: #2E4052;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;

    &--no-active {
      color: #9EB8D6;
    }

    &__content {
      display: flex;
      column-gap: 10px;
      align-items: center;
      justify-content: space-between;
    }

    &__skill {
      display: flex;
      column-gap: 10px;
      align-items: center;
    }
    &__options {
      position: absolute;
      border: 1px solid #2E4052;
      width: 100%;
      margin: 12px 0 0 0;
      background-color: #FFFFFF;
      left: 0;
      right: 0;
      max-height: 118px;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        width: 10px;
        box-sizing: border-box;
      }

      &::-webkit-scrollbar-track {
        background: #9EB8D6;
      }

      &::-webkit-scrollbar-thumb {
        background: #2E4052;
        border-radius: 2px;
      }
    }

    &__option {
      cursor: pointer;
      padding: 10px 20px;
      display: flex;
      align-items: center;
      column-gap: 10px;
      font-weight: 600;
      font-size: 14px;
      color: #2E4052;
      transition: background-color 0.3s linear;
      overflow: hidden;

      &:hover {
        background-color: #D3E8FF;
      }
    }

    &__option-img {
      width: 36px;

      & img {
        width: 36px;
      }
    }
  }
</style>