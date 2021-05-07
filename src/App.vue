<template>
  <header class=" px-24 pt-8 absolute w-full">
    <HeaderWhite></HeaderWhite>
  </header>
  <main>
    <router-view />
  </main>
</template>

<script>
import HeaderWhite from '@/components/HeaderWhite.vue';

export default {
  components: {
    HeaderWhite,
  },
  setup() {
  },
};
</script>

<style>
@import '~@/main.css';
</style>
