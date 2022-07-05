<template>
  <div class="profile">
    <div class="profile__search">
      <input-form v-focus type="text" v-model="searchQuery" placeholder="Search..."/>
      <v-select :options="options" :selected="selectedOptionFilter.name" @select="selectedOption"></v-select>
    </div>
    <div class="profile__buttons">
      <button-component @click="showAddDialog">Add Skill</button-component>
    </div>
  </div>

  <h1 class="profile__title title">Skills</h1>


  <skills-list v-if="!isSkillLoading" :skills="skills" @edit="editSkill" @remove="removeSkill"></skills-list>
  <v-loader class="loading" v-else></v-loader>

  <dialog-window v-model:show="editDialogVisible">
    <edit-skill-form @save="saveSkill" @cancel="editDialogVisible = false" :skill="tmpSkill"></edit-skill-form>
  </dialog-window>

  <dialog-window v-model:show="addDialogVisible">
      <add-skill-form :options="optionSkills" @add="addSkill"></add-skill-form>
  </dialog-window>
</template>

<script>
import AddSkillForm from "@/components/AddSkillForm";
import SkillsList from "@/components/SkillsList";
import EditSkillForm from "@/components/EditSkillForm";
import VLoader from "@/components/UI/VLoader";
import { child, get, getDatabase, ref, push, update, set } from "firebase/database";
import { getAuth } from "firebase/auth";

export default {
  name: "ProfileView",
  components: { AddSkillForm, SkillsList, EditSkillForm, VLoader },
  data() {
    return {
      options: [
        { id: 1, name: 'Name', value: 'name' },
        { id: 2, name: 'Process', value: 'process' },
      ],
      optionSkills: [],
      selectedOptionFilter: {},
      editDialogVisible: false,
      addDialogVisible: false,
      searchQuery: '',
      tmpSkill: {},
      isSkillLoading: false,
      skills: []
    }
  },
  methods: {
    editSkill(skill) {
      let index = this.skills.findIndex(item => item.id === skill.id);
      this.tmpSkill = skill;
      this.tmpSkill.index = index;
      this.showEditDialog();
    },
    saveSkill(process) {
      this.skills[this.tmpSkill.index].process = +process;
      this.dialogVisible = false;
      this.tmpSkill = {};
    },
    removeSkill(skill) {
      this.skills = [...this.skills.filter(s => s.id !== skill.id)];
    },
    selectedOption(option) {
      this.selectedOptionFilter = option;
    },
    showEditDialog() {
      this.editDialogVisible = true;
    },
    showAddDialog() {
      this.addDialogVisible = true;
    },
    async fetchAllSkillsFromFirebase() {
      const databaseRef = ref(getDatabase());
      get(child(databaseRef, `skills`)).then((snapshot) => {
        if (snapshot.exists()) {
          this.optionSkills = snapshot.val().filter(s => s !== undefined);
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    },
    async fetchUserSkills() {
      this.isSkillLoading = true;
      const databaseRef = ref(getDatabase());
      get(child(databaseRef, `/users/`+ getAuth().currentUser.uid +`/skills`)).then((snapshot) => {
        if (snapshot.exists()) {
          this.skills = Object.values(snapshot.val());
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      }).finally(() => {
        this.isSkillLoading = false;
      });
    },
    async addSkill(data) {
      try {
        const db = getDatabase();
        data.id = push(child(ref(db), '/users/' + getAuth().currentUser.uid + '/skills/')).key;
        const postListRef = ref(db, '/users/' + getAuth().currentUser.uid + '/skills/');
        const newPostRef = push(postListRef);
        await set(newPostRef, data);
      } catch (e) {
        throw e;
      }

      await this.fetchUserSkills();
    }
  },
  mounted() {
    this.fetchUserSkills();
    this.fetchAllSkillsFromFirebase();
  }

}
</script>

<style scoped lang="scss">
  .profile {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &__title {
      font-weight: 600;
      font-size: 48px;
      color: #2E4052;
    }

    &__search {
      display: flex;
      justify-content: space-between;
    }

    &__buttons {
      display: flex;
      justify-content: flex-end;
    }
  }

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 0;
    font-size: 24px;
    border-radius: 5px;
    text-align: center;
    font-weight: 600;
  }
</style>