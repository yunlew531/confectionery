<template>
  <header class="px-24 pt-8 absolute w-full">
    <Header :headerColor="headerColor"></Header>
  </header>
  <main>
    <router-view />
  </main>
</template>

<script>
import Header from "@/components/Header.vue";
import { ref } from "vue";

export default {
  components: {
    Header,
  },
  setup() {
    const headerColor = ref("white"); // 切換Header主色調 black or white

    return {
      headerColor,
    };
  },
};
</script>

<style>
@import "~@/main.css";
</style>
