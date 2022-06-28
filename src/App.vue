<template>
  <header-component></header-component>
  <router-view/>
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
