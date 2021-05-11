<template>
  <header class="px-24 pt-8 absolute w-full">
    <Header :headerColor="headerColor"></Header>
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";

export default {
  components: {
    Header,
    Footer,
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
