<template>
<!--  <div>-->
<!--    <button-component @click="showDialog">Add Skill</button-component>-->
<!--  </div>-->
  <skills-list :skills="skills" @edit="editSkill" @remove="removeSkill"></skills-list>
  <dialog-window v-model:show="dialogVisible">
    <edit-skill-form @save="saveSkill" @cancel="dialogVisible = false" :skill="tmpSkill"></edit-skill-form>
  </dialog-window>
</template>

<script>
import SkillsList from "@/components/SkillsList";
import EditSkillForm from "@/components/EditSkillForm";
import axios from 'axios';
export default {
  name: "HomeView",
  components: { SkillsList, EditSkillForm },
  data() {
    return {
      skills: [],
      dialogVisible: false,
      tmpSkill: {}
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
        const response = await axios.get('/static/skillList.json');
        this.skills = response.data;
      } catch (e) {
        console.log(e);
      }
    }
  },
  mounted() {
    this.fetchSkills();
  }
}
</script>
<style scoped>
</style>