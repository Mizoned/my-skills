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


  <skills-list v-if="!isSkillLoading" :skills="sortedAndSearchedSkills" @edit="editSkill" @remove="removeSkill"></skills-list>
  <v-loader class="loading" v-else></v-loader>

  <dialog-window v-model:show="editDialogVisible">
    <edit-skill-form @save="updateSkill" :skill="tmpSkill"></edit-skill-form>
  </dialog-window>

  <dialog-window v-model:show="addDialogVisible">
    <add-skill-form :options="allowedSkillOptionsToAdd" @add="addSkill"></add-skill-form>
  </dialog-window>
</template>

<script>
import AddSkillForm from "@/components/AddSkillForm";
import SkillsList from "@/components/SkillsList";
import EditSkillForm from "@/components/EditSkillForm";
import VLoader from "@/components/UI/VLoader";
import { child, get, getDatabase, ref, push, update, set, remove } from "firebase/database";
import { getAuth } from "firebase/auth";
import { auth } from "@/firebase";

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
      allowedSkillOptionsToAdd: [],
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
      this.tmpSkill = { ...this.skills[index] };
      this.showEditDialog();
    },
    updateSkill(skill) {
      const database = getDatabase();
      const refUserSkill = ref(database, '/users/'+ auth.currentUser.uid + '/skills/' + skill.id);

      update(refUserSkill, skill).then(() => {
        let index = this.skills.findIndex(item => item.id === skill.id);
        this.skills[index] = { ...skill };
        this.tmpSkill = {};
      }).catch((error) => {
        console.error(error)
      }).finally(() => {
        this.editDialogVisible = false;
      });
    },
    async removeSkill(skill) {
      const database = getDatabase();
      const refUserSkill = ref(database, '/users/'+ auth.currentUser.uid + '/skills/' + skill.id);

      remove(refUserSkill).then((res) => {
        this.skills = [...this.skills.filter(s => s.id !== skill.id)];
      }).catch((error) => {
        console.error(error);
      });
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
    async fetchSkillOptionsFromFirebase() {
      const databaseRef = ref(getDatabase());
      get(child(databaseRef, `skills`)).then((snapshot) => {
        if (snapshot.exists()) {
          this.optionSkills = snapshot.val();
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
        const skillListRef = ref(db, '/users/' + auth.currentUser.uid + '/skills/');
        const newSkillRef = push(skillListRef);
        data.id = newSkillRef.key;
        await set(newSkillRef, data);
        this.skills.push(data);
      } catch (e) {
        throw e;
      } finally {
        this.addDialogVisible = false;
      }
    },
    setAllowedSkillOptionsToAdd() {
      let array = [...this.optionSkills];
      this.skills.forEach(userSkill => {
        array = [...array].filter(optSkill => optSkill.name !== userSkill.name);
      });
      return array;
    }
  },
  mounted() {
    this.fetchUserSkills();
    this.fetchSkillOptionsFromFirebase();
  },
  watch: {
    addDialogVisible(newValue) {
      if (newValue === false) return;

      this.allowedSkillOptionsToAdd = this.setAllowedSkillOptionsToAdd();
    }
  },
  computed: {
    sortedSkills() {
      return [...this.skills].sort((skill1, skill2) => String(skill1[this.selectedOptionFilter.value])?.localeCompare(String(skill2[this.selectedOptionFilter.value])))
    },
    sortedAndSearchedSkills() {
      return this.sortedSkills.filter(skill => skill.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
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