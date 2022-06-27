<template>
  <div class="skill-name">
    <div class="skill-name__img"><img :src="formPathImage(skill.src)" alt=""></div>
    <div class="skill-name__text">{{ skill.name }}</div>
  </div>
</template>

<script>
export default {
  name: "SkillName",
  props: {
    skill: {
      type: Object,
      require: true
    }
  },
  methods: {
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
  .skill-name {
    display: flex;
    column-gap: 10px;
    align-items: center;

    &__text {
      font-weight: 600;
      font-size: 24px;
      color: #2E4052;
    }

    &__img {
      min-height: 64px;
      img {
        display: flex;
        width: 64px;
      }
    }


  }
</style>