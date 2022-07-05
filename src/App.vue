<template>
  <header-component></header-component>
  <div class="container">
    <div class="container__wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import HeaderComponent from "@/components/UI/HeaderComponent";
  export default {
    components: {
      HeaderComponent
    }
  }
</script>
<style>

</style>
