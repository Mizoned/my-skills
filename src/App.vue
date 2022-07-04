<template>
  <header-component></header-component>
<!--  <v-select-->
<!--      :options="options"-->
<!--      :selected="selectedOptionObject.name"-->
<!--      @select="selectedOption"-->
<!--  />-->
  <div class="container">
    <div class="container__wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import HeaderComponent from "@/components/UI/HeaderComponent";
  import { getDatabase, ref, child, get } from "firebase/database";

  export default {
    components: {
      HeaderComponent
    },
    data() {
      return {
        options: [],
        selectedOptionObject: {}
      }
    },
    methods: {
      selectedOption(option) {
        this.selectedOptionObject = option;
      }
    },
    mounted() {
      const databaseRef = ref(getDatabase());
      get(child(databaseRef, `Skills`)).then((snapshot) => {
          if (snapshot.exists()) {
              this.options = snapshot.val().filter(s => s !== undefined);
          } else {
              console.log("No data available");
          }
      }).catch((error) => {
          console.error(error);
      });
    }
  }
</script>
<style>

</style>
