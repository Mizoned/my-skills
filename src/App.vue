<template>
  <header-component></header-component>
  <div class="content container">
      <router-view/>
  </div>
</template>

<script>
  import HeaderComponent from "@/components/UI/HeaderComponent";
  import { onBeforeMount } from "vue";
  import { useStore } from "vuex";

  export default {
    components: {
      HeaderComponent
    },
    setup() {
      const store = useStore();

      onBeforeMount(async () => {
        await store.dispatch('fetchUsers');
      });
    },
  }
</script>
<style>

</style>
