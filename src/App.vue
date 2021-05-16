<template>
  <header class="px-24 pt-8 absolute w-full">
    <Header></Header>
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

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    return {};
  },
};
</script>

<style>
@import "~@/main.css";
</style>
