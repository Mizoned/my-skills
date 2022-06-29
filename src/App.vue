<template>
  <header-component></header-component>
  <div class="container">
    <router-view/>
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
