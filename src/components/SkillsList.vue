<template>
  <div class="container">
    <div class="skills">
      <h1 class="skills__title title">Skills</h1>
      <div class="skills__list">
        <skill-element v-for="skill in skills" :skill="skill" @edit="editSkill" @remove="removeSkill"></skill-element>
      </div>
    </div>
  </div>
</template>

<script>
import SkillElement from "@/components/SkillElement";
export default {
  name: "SkillsList",
  props: {
    skills: {
      type: Array,
      default: () => []
    }
  },
  components: {
    SkillElement
  },
  methods: {
    editSkill(skill) {
      console.log(skill);
    },
    removeSkill(skill) {
      console.log(skill);
    }
  }

}
</script>

<style scoped lang="scss">
  .skills {
    padding: 40px 0;

    &__title {
      padding-bottom: 40px;
    }

    &__list {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      margin: 0 auto;
    }
  }
</style>