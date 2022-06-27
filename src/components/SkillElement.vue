<template>
  <div class="skill">
    <div class="skill__inner">
      <div class="skill__content">
        <div class="skill__img"><img src="@/assets/images/icons/icon-vue-36.svg" alt=""></div>
        <div class="skill__name">Vue JS</div>
      </div>
      <div class="skill__control">
        <div class="skill__diagram"></div>
        <div class="skill__buttons">
          <button class="btn"><img src="@/assets/images/icons/icon-edit-24.svg" alt=""></button>
          <button class="btn"><img src="@/assets/images/icons/icon-remove-24.svg" alt=""></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillElement"
}
</script>

<style scoped lang="scss">
  .skill {
    padding: 10px 20px;
    background: #D3E8FF;
    border-radius: 5px;

    &__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__content {
      display: flex;
      column-gap: 10px;
      align-items: center;
    }

    &__name {
      font-weight: 600;
      font-size: 24px;
      color: #2E4052;
    }

    &__img {
      img {
        display: flex;
        width: 64px;
      }
    }

    &__buttons {
      display: flex;
      flex-direction: column;
      row-gap: 6px;
    }
  }

  .btn {
    background: #2E4052;
    border: none;
    border-radius: 5px;
    padding: 8px;

    img {
      width: 25px;
      display: block;
    }
  }
</style>