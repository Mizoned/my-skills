<template>
  <div class="skill-add-form">
    <div class="skill-add-form__inner">
      <div class="skill-add-form__diagram">
        <progress-bar :circle="circle" :process="0"></progress-bar>
      </div>
      <div class="skill-add-form__content">
        <skill-name :skill="'Java Script'"></skill-name>
        <input-form v-focus type="text" v-model="process" placeholder="Process"/>
        <button-with-icon style="align-self: flex-end"><slot name="icon"><img src="@/assets/images/icons/icon-add-24.svg" alt=""></slot>Add</button-with-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddSkillForm",
  data() {
    return {
      circle: {
        diameter: 100,
        stroke: 8,
      },
      process: 0
    }
  }
}
</script>

<style scoped>

</style>