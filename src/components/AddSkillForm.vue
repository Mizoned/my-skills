<template>
  <div class="skill-add-form">
    <div class="skill-add-form__inner">
      <div class="skill-add-form__diagram">
        <progress-bar :circle="circle" :process="setProcess"></progress-bar>
      </div>
      <div class="skill-add-form__content">
          <v-skill-select
              :options="options"
              :selected="selectedOption"
              @select="selectOption"
          />
        <input-form v-focus type="text" v-model="process" placeholder="Process"/>
        <button-with-icon class="skill-add-form__btn" @click="addSkill" style="align-self: flex-end">Send</button-with-icon>
      </div>
    </div>
  </div>
</template>

<script>
import VSkillSelect from "@/components/UI/VSkillSelect";
export default {
  name: "AddSkillForm",
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  components: { VSkillSelect },
  data() {
    return {
      circle: {
        diameter: 100,
        stroke: 8,
      },
      selectedOption: {},
      process: '',
    }
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
    },
    addSkill() {
      this.$emit('add', this.formDate);
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
    },
    formDate() {
      return {
        name: this.selectedOption.name,
        process: this.setProcess,
        src: this.selectedOption.src
      }
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

    &__btn {
      min-width: 100px;
    }
  }
</style>