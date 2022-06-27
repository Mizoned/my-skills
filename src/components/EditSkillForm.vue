<template>
  <div class="skill-editing-form">
    <div class="skill-editing-form__inner">
      <div class="skill-editing-form__diagram">
        <progress-bar :circle="circle" :process="process"></progress-bar>
      </div>
      <div class="skill-editing-form__content">
          <skill-name :skill="skill"></skill-name>
          <input class="input" v-model="process" placeholder="Process"/>
          <button-with-icon style="align-self: flex-end"><slot name="icon"><img src="@/assets/images/icons/icon-save-24.svg" alt=""></slot>Save</button-with-icon>
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
  .input {
    padding: 10px 20px;
    font-weight: 600;
    font-size: 16px;
    color: #2E4052;
    border: 1px solid #2E4052;
    border-radius: 5px;

    &::-webkit-input-placeholder {
      color: #9EB8D6;
    }
  }
</style>