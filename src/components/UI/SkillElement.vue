<template>
  <div class="skill">
    <div class="skill__inner">
      <div class="skill__content">
        <skill-name :skill="skill"></skill-name>
      </div>
      <div class="skill__control">
        <div class="skill__diagram">
          <progress-bar :circle="circle" :process="skill.process"></progress-bar>
        </div>
        <div class="skill__buttons">
          <button-with-icon @click="editSkill(skill)"><slot name="icon"><img src="@/assets/images/icons/icon-edit-24.svg" alt=""></slot></button-with-icon>
          <button-with-icon @click="removeSkill(skill)"><slot name="icon"><img src="@/assets/images/icons/icon-remove-24.svg" alt=""></slot></button-with-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonWithIcon from "@/components/UI/ButtonWithIcon";

export default {
  name: "SkillElement",
  components: { ButtonWithIcon },
  props: {
    skill: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      circle: {
        diameter: 100,
        stroke: 8,
      }
    }
  },
  methods: {
    editSkill(skill) {
      this.$emit('edit', skill);
    },
    removeSkill(skill) {
      this.$emit('remove', skill)
    }
  }
}
</script>

<style scoped lang="scss">
  .skill {
    padding: 10px 20px;
    background: #D3E8FF;
    border-radius: 5px;

    &__diagram {
      display: flex;
      align-items: center;
    }

    &__control {
      display: flex;
      column-gap: 16px;
      align-items: center;
    }

    &__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__buttons {
      display: flex;
      flex-direction: column;
      row-gap: 6px;
    }
  }
</style>