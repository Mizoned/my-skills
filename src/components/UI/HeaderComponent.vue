<template>
  <header class="header">
    <div class="container">
      <nav class="header__menu menu">
        <div class="header__logo logo" @click="$router.push('/')">
          <img class="logo__img" src="@/assets/images/logo.svg" alt="">
          <div class="logo__text">Vue JS</div>
        </div>
        <div class="header__profile-wrapper" v-if="$store.state.user && $store.state.user.displayName">
          <div class="header__profile profile" @click="$router.push('/profile')">
            <div class="header__profile-username">{{ $store.state.user.displayName }}</div>
            <img class="header__profile-img" src="@/assets/images/profile.png" alt="">
          </div>
          <div class="header__profile-btns">
            <button-with-icon class="header__profile-logout" @click="$store.dispatch('logout')"><img src="@/assets/images/icons/icon-logout-24.svg"></button-with-icon>
            <button-with-icon class="header__profile-settings"><img src="@/assets/images/icons/icon-settigns-24.svg"></button-with-icon>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    name: "HeaderComponent"
  }
</script>

<style scoped lang="scss">
  .header {
    padding: 25px 0;
    background: #D3E8FF;

    &__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__profile {
      display: flex;
      align-items: center;
      column-gap: 16px;

      &-wrapper {
        display: flex;
        gap: 16px;
      }

      &-username {
        font-weight: 600;
        font-size: 24px;
        line-height: 54px;
        color: #2E4052;

        @media screen and (max-width: 512px) {
          display: none;
        }
      }

      &-img {
        max-width: 64px;
        display: block;
      }

      &-logout {
        align-self: flex-end;
      }

      &-settings {
        align-self: flex-end;
      }

      &-btns {
        display: flex;
        flex-direction: column;
        gap: 4px;

        img {
          width: 18px;
          height: 18px;
        }
      }
    }
  }

  .menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    display: flex;
    align-items: center;
    column-gap: 16px;
    cursor: pointer;

    &__text {
      font-weight: 600;
      font-size: 40px;
      line-height: 54px;
      color: #2E4052;

      @media screen and (max-width: 512px) {
        font-size: 28px;
      }
    }
  }

  .profile {
    cursor: pointer;
  }
</style>