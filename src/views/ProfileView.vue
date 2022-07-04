<template>
  <div class="profile">
    <div class="profile__search">
      <input-form v-focus type="text" v-model="searchQuery" placeholder="Search..."/>
      <v-select :options="options" :selected="selectedOptionObject.name" @select="selectedOption"></v-select>
    </div>
    <div class="profile__buttons">
      <button-component @click="showDialog">Add Skill</button-component>
    </div>
  </div>
  <dialog-window v-model:show="dialogVisible">
      <add-skill-form ></add-skill-form>
  </dialog-window>
</template>

<script>
import AddSkillForm from "@/components/AddSkillForm";
export default {
  name: "ProfileView",
  components: { AddSkillForm },
  data() {
    return {
      options: [
        { id: 1, name: 'Name', value: 'name' },
        { id: 2, name: 'Process', value: 'process' },
      ],
      selectedOptionObject: {},
      dialogVisible: false,
      searchQuery: ''
    }
  },
  methods: {
    selectedOption(option) {
      this.selectedOptionObject = option;
    },
    showDialog() {
      this.dialogVisible = true;
    }
  }

}
</script>

<style scoped lang="scss">
  .profile {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &__search {
      display: flex;
      justify-content: space-between;
    }

    &__buttons {
      display: flex;
      justify-content: flex-end;
    }
  }

</style>