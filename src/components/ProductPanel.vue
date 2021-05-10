<template>
  <section class="bg-my-white-deep py-28">
    <div class="w-52 mx-auto text-center">
      <p class="subtitle text-lg">product</p>
      <h3 class="mt-2.5">產品介紹</h3>
    </div>
    <ul class="flex mt-12 overflow-hidden">
      <li class="product-card" v-for="item in productData" :key="item.name">
        <a
          class="block photo mb-2 group relative"
          :class="item.src"
          href="javascript:;"
        >
          <span
            class="block bg-black duration-300 opacity-0 group-hover:opacity-60 w-full h-full"
          ></span>
          <span
            class="duration-300 text-lg absolute top-1/2 left-1/2 transform scale-150 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:scale-100 text-gray-200"
            >點擊查看更多</span
          >
        </a>
        <a class="group flex" href="javascript:;">
          <div class="flex-grow">
            <span
              class="subtitle text-gray-900 duration-300 group-hover:text-red-600"
              >{{ item.engName }}</span
            >
            <h4 class="duration-300 text-lg font-bold group-hover:text-red-600">
              {{ item.name }}
            </h4>
            <span class="text-sm text-gray-500">{{ item.materials }}</span>
            <p class="duration-300 group-hover:text-red-600">
              {{ item.price.toLocaleString() }} 元
            </p>
          </div>
          <span
            class="border border-red-600 self-start px-1.5 text-sm text-red-600"
            >熱銷商品</span
          >
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const productData = reactive([
      {
        name: "蛋糕",
        engName: "cake",
        materials: "紅酒, 草莓, 葡萄",
        price: 2000,
        src: "photo-1",
      },
      {
        name: "鬆餅",
        engName: "pancake",
        materials: "白酒, 桃子, 奇異果",
        price: 3000,
        src: "photo-2",
      },
      {
        name: "蘋果可頌",
        engName: "apple croissant",
        materials: "蘋果, 草莓",
        price: 1500,
        src: "photo-3",
      },
    ]);
    return {
      productData,
    };
  },
};
</script>

<style>
.product-card {
  width: 520px;
  margin-right: 10px;
  flex-shrink: 0;
}
.photo {
  width: 100%;
  height: 520px;
  background: no-repeat center;
  background-size: cover;
}
.photo-1 {
  background-image: url(~@/assets/photo-product-1.jpg);
  background-position: bottom;
}
.photo-2 {
  background-image: url(~@/assets/photo-product-2.jpg);
}
.photo-3 {
  background-image: url(~@/assets/photo-product-3.jpg);
}
</style>