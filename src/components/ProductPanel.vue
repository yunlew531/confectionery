<template>
  <section class="bg-my-white-deep py-28">
    <div class="w-52 mx-auto text-center">
      <p class="subtitle text-lg">product</p>
      <h3 class="mt-2.5">產品介紹</h3>
    </div>
    <ul class="flex mt-12 overflow-hidden">
      <li class="product-card" v-for="item in productData.data" :key="item.id">
        <router-link
          :to="`/product/${item.id}`"
          class="block photo mb-2 group relative"
          :style="{ 'background-image': 'url(' + item.imageUrl + ')' }"
        >
          <span
            class="block bg-black duration-300 opacity-0 group-hover:opacity-60 w-full h-full"
          ></span>
          <span
            class="duration-300 text-lg absolute top-1/2 left-1/2 transform scale-150 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:scale-100 text-gray-200"
            >點擊查看更多</span
          >
        </router-link>
        <router-link :to="`/product/${item.id}`" class="group flex">
          <div class="flex-grow">
            <span
              class="subtitle text-gray-900 duration-300 group-hover:text-red-600"
              >{{ item.title }}</span
            >
            <h4 class="duration-300 text-lg font-bold group-hover:text-red-600">
              {{ item.title }}
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
        </router-link>
      </li>
    </ul>
    <div class="flex justify-center">
      <ul class="flex mx-auto mt-20">
        <li
          v-for="item in productData.data"
          :key="item.id"
          class="w-3 h-3 rounded-full bg-gray-300 border border-white ml-1 cursor-pointer"
        ></li>
      </ul>
    </div>
    <div class="flex justify-center mt-12">
      <a
        href="javascript:;"
        class="tracking-widest font-bold duration-300 border border-black mx-auto py-3 px-12 rounded bg-gray-900 text-white hover:bg-white hover:text-gray-900 flex items-center"
      >
        <span>查看全部商品</span>
        <span class="material-icons my-auto text-lg text-gray-500 ml-2">
          play_circle_outline
        </span>
      </a>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "axios";

export default {
  setup() {
    const productData = reactive({ data: [] });

    const getProducts = async () => {
      const { data } = await axios.get(
        "https://vue3-course-api.hexschool.io/api/yunlew/products/all"
      );
      productData.data = data.products;
    };
    onMounted(() => {
      getProducts();
    });
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