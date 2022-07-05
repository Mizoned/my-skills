<template>
  <skills-list v-if="!isSkillLoading" :skills="skills" @edit="editSkill" @remove="removeSkill"></skills-list>
  <v-loader class="loading" v-else></v-loader>
  <dialog-window v-model:show="dialogVisible">
    <edit-skill-form @save="saveSkill" @cancel="dialogVisible = false" :skill="tmpSkill"></edit-skill-form>
  </dialog-window>
</template>

<script>
import SkillsList from "@/components/SkillsList";
import EditSkillForm from "@/components/EditSkillForm";
import axios from 'axios';
import VLoader from "@/components/UI/VLoader";
export default {
  name: "HomeView",
  components: {VLoader, SkillsList, EditSkillForm },
  data() {
    return {
      skills: [],
      dialogVisible: false,
      tmpSkill: {},
      isSkillLoading: false
    }
  },
  methods: {
    editSkill(skill) {
      let index = this.skills.findIndex(item => item.id === skill.id);
      this.tmpSkill = skill;
      this.tmpSkill.index = index;
      this.showDialog();
    },
    saveSkill(process) {
      this.skills[this.tmpSkill.index].process = +process;
      this.dialogVisible = false;
      this.tmpSkill = {};
    },
    removeSkill(skill) {
      this.skills = [...this.skills.filter(s => s.id !== skill.id)];
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchSkills() {
      try {
        this.isSkillLoading = true;
        const response = await axios.get('/static/skillList.json');
        setTimeout(() => {
          this.skills = response.data;
          this.isSkillLoading = false;
        }, 2000);
      } catch (e) {
        console.log(e);
      } finally {

      }
    }
  },
  mounted() {
    this.fetchSkills();
  }
}
</script>
<style scoped>
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