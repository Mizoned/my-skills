<template>
  <header-component></header-component>
  <router-view/>
</template>

<script>
  import HeaderComponent from "@/components/UI/HeaderComponent";
  import SkillElement from "@/components/SkillElement";
  import SkillsList from "@/components/SkillsList";

  export default {
    components: {
      HeaderComponent,
      SkillElement,
      SkillsList
    }
  }
</script>
<style>

</style>
