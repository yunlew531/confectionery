<template>
  <section
    class="banner-image bg-cover bg-center bg-no-repeat max-w-full h-screen"
  >
    <h2
      class="text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      原料新鮮﹑ 品質優良
    </h2>
  </section>
  <AboutHegozePanel />
  <IntroduceMake />
  <RawMaterial />
  <ProductPanel />
  <StoreInfoPanel />
</template>

<script>
import AboutHegozePanel from "@/components/AboutHegozePanel.vue";
import IntroduceMake from "@/components/IntroduceMake.vue";
import RawMaterial from "@/components/RawMaterial.vue";
import ProductPanel from "@/components/ProductPanel.vue";
import StoreInfoPanel from "@/components/StoreInfoPanel.vue";
import { inject, onMounted } from "vue";

export default {
  components: {
    AboutHegozePanel,
    IntroduceMake,
    RawMaterial,
    ProductPanel,
    StoreInfoPanel,
  },
  setup() {
    const emitter = inject("emitter");
    function setHeaderColor() {
      const color = "white";
      emitter.emit("setColor", color);
    }
    onMounted(() => {
      setHeaderColor();
    });
  },
};
</script>

<style>
.banner-image {
  background-image: url(~@/assets/photo-banner.png);
}
</style>
