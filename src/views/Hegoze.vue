<template>
  <section>
    <router-view></router-view>
    <ShopInformationFooter />
  </section>
</template>

<script>
import ShopInformationFooter from "@/components/ShopInformationFooter.vue";

export default {
  components: {
    ShopInformationFooter,
  },
};
</script>

<style>
</style>
