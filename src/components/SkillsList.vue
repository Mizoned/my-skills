<template>
  <div class="skills">
    <h1 class="skills__title title">Skills</h1>
    <div class="skills__list">
      <skill-element v-if="skills.length" v-for="skill in skills" :key="skill.id" :skill="skill" @edit="editSkill" @remove="removeSkill"></skill-element>
      <div v-else class="skills__empty">Список пуст</div>
    </div>
  </div>
</template>

<script>
import SkillElement from "@/components/UI/SkillElement";
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
      this.$emit('edit', skill);
    },
    removeSkill(skill) {
      this.$emit('remove', skill);
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
    &__empty {
      padding: 25px 0;
      font-size: 24px;
      background: #D3E8FF;
      color: #2E4052;
      border-radius: 5px;
      text-align: center;
      font-weight: 600;
    }
  }
</style>