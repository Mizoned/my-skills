<template>

</template>

<script>
import skillElement from "@/components/SkillElement";
export default {
  name: "SkillsList",
  components: {
    skillElement
  }

}
</script>

<style scoped>
  .skills {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    /*max-width: 800px;*/
    margin: 0 auto;
  }
</style>