<template>
  <div class="skill-add-form">
    <div class="skill-add-form__inner">
      <div class="skill-add-form__diagram">
        <progress-bar :circle="circle" :process="setProcess"></progress-bar>
      </div>
      <div class="skill-add-form__content">
        <skill-name :skill="{name: 'Java Script', src: 'icon-js-36.svg'}">Java Script</skill-name>
        <input-form v-focus type="text" v-model="process" placeholder="Process"/>
        <button-with-icon style="align-self: flex-end"><slot name="icon"><img src="@/assets/images/icons/icon-add-24.svg" alt=""></slot>Add</button-with-icon>
      </div>
    </div>
  </div>
</template>

<script>
import SkillName from "@/components/SkillName";
export default {
  name: "AddSkillForm",
  components: {
    SkillName
  },
  data() {
    return {
      circle: {
        diameter: 100,
        stroke: 8,
      },
      selectedOption: {},
      process: ''
    }
  },
  computed: {
    setProcess() {
      const regPattern = '^[0-9]+$';

      let regExp = new RegExp(regPattern, 'i');

      if (!regExp.test(this.process) || this.process < 0 || this.process > 100) {
        return 0;
      }

      return +this.process;
    }
  },
}
</script>

<style scoped lang="scss">
  .skill-add-form {
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