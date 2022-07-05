<template>
  <header-component></header-component>
  <div class="container">
    <div class="container__wrapper">
      <router-view/>
    </div>
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
