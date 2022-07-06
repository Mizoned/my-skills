<template>
  <div class="skill-editing-form">
    <div class="skill-editing-form__inner">
      <div class="skill-editing-form__diagram">
        <progress-bar :circle="circle" :process="setProcess"></progress-bar>
      </div>
      <div class="skill-editing-form__content">
          <skill-name :skill="skill"></skill-name>
          <input-form v-focus type="text" v-model="process" placeholder="Process"/>
          <button-with-icon @click="saveSkill" style="align-self: flex-end"><slot name="icon"><img src="@/assets/images/icons/icon-save-24.svg" alt=""></slot>Save</button-with-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditSkillForm",
  components: {},
  props: {
    skill: {
      type: Object,
      require: true
    }
  },
  data() {
    return {
      circle: {
        diameter: 140,
        stroke: 10,
      },
      process: 0,
      errors: []
    }
  },
  computed: {
    setProcess() {
      const regPattern = '^[0-9]+$';

      let regExp = new RegExp(regPattern, 'i');

      if (!regExp.test(this.process) || this.process < 0 || this.process > 100) {
        return this.skill.process;
      }

      return +this.process;
    }
  },
  methods: {
    saveSkill() {
      this.skill.process = this.setProcess;
      this.$emit('save', this.skill);
    }
  },
  mounted() {
    this.process = this.skill.process;
  }
}
</script>

<style scoped lang="scss">
  .skill-editing-form {

    &__inner {
      border-radius: 5px;
      padding: 40px 20px;
      background: #FFFFFF;
      display: flex;
      column-gap: 16px;
    }

    &__content {
      display: flex;
      flex-direction: column;
      row-gap: 16px;
    }
  }
</style>