<template>
  <div class="container">
    <div class="not-found">
      <h1 class="not-found__title">404</h1>
      <p class="not-found__text">Not Found</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundView"
}
</script>

<style scoped lang="scss">
  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 180px 0 0 0;
    color: #D3E8FF;

    &__title {
      font-weight: 600;
      font-size: 250px;
      line-height: 250px;
    }

    &__text {
      font-weight: 600;
      font-size: 60px;
      line-height: 100px;
    }
  }
</style>