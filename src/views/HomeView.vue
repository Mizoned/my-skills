<template>
  <skills-list :skills="skills" @edit="editSkill" @remove="removeSkill"></skills-list>
  <dialog-window>
    <edit-skill-form :skill="skills[1]"></edit-skill-form>
  </dialog-window>
</template>

<script>
import SkillsList from "@/components/SkillsList";
import EditSkillForm from "@/components/EditSkillForm";
export default {
  name: "HomeView",
  components: { SkillsList, EditSkillForm },
  data() {
    return {
      skills: [
        {
          id: 1,
          name: 'Vue Js',
          process: 56,
          src: 'icon-vue-36.svg'
        },
        {
          id: 2,
          name: 'Java Script',
          process: 76,
          src: 'icon-js-36.svg'
        },
        {
          id: 3,
          name: 'PHP',
          process: 66,
          src: 'icon-php-36.svg'
        },
        {
          id: 4,
          name: 'HTML 5',
          process: 88,
          src: 'icon-html-36.svg'
        },
        {
          id: 5,
          name: 'CSS 3',
          process: 69,
          src: 'icon-css-36.svg'
        },
        {
          id: 6,
          name: 'Sass',
          process: 38,
          src: 'icon-sass-36.svg'
        },
        {
          id: 7,
          name: 'Gulp',
          process: 41,
          src: 'icon-gulp-36.svg'
        },
        {
          id: 8,
          name: 'Git',
          process: 38,
          src: 'icon-git-36.svg'
        }
      ]
    }
  },
  methods: {
    editSkill(skill) {
      let index = this.skills.findIndex(item => item.id === skill.id);

    },
    removeSkill(skill) {
      this.skills = [...this.skills.filter(s => s.id !== skill.id)];
    }
  }
}
</script>
<style scoped>
</style>