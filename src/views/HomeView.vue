<template>

</template>

<script>
import axios from 'axios';

export default {
  name: "HomeView",
  data() {
    return {
      skills: [],
    }
  },
  methods: {
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

</style>