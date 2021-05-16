<template>
  <section class="my-white pt-56">
    <div class="max-w-6xl flex justify-evenly mx-auto pb-24">
      <div class="img-panal">
        <div class="img img-1"></div>
        <div class="img img-1"></div>
        <div class="img img-1"></div>
        <div class="img img-1"></div>
      </div>
      <div class="pl-12 max-w-lg">
        <h3 class="text-2xl">馬卡龍</h3>
        <p class="text-gray-500 mt-1">草莓、任胡麻</p>
        <p class="mt-3 text-xl">16個裝</p>
        <p class="paragraph border-t border-gray-300 py-8 mt-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore vel
          blanditiis enim ex mollitia? Voluptate, fugit provident autem
          necessitatibus consectetur, voluptas amet et neque, sint eligendi vel
          voluptatem itaque dolorum maiores soluta perferendis ea. <br /><br />
          Sit libero sunt consequuntur, porro excepturi, harum soluta earum
          consequatur maxime iste praesentium possimus cupiditate ad.
        </p>
        <div class="bg-gray-200 rounded px-12 py-8">
          <p>※部分商品僅實體店販售，請見諒</p>
          <button
            type="button"
            class="duration-200 border border-red-700 bg-red-700 rounded w-full py-2 text-gray-200 font-bold text-xl flex justify-center hover:bg-gray-200 hover:text-red-700 mt-3"
          >
            <span>加入購物車</span>
            <span class="material-icons my-auto ml-2">
              play_circle_outline
            </span>
          </button>
        </div>
        <a href="#" class="duration-200 mt-2 inline-flex hover:text-red-700">
          <span class="material-icons"> schedule </span>
          <span class="ml-1">立即詢問商品資訊</span>
        </a>
      </div>
    </div>
    <div class="bg-white py-24">
      <div class="max-w-6xl mx-auto">
        <h4 class="border-l-8 border-black leading-none pl-2 text-xl font-bold">
          推薦商品
        </h4>
        <ul class="mt-5 grid grid-cols-12 gap-7">
          <li class="col-span-4" v-for="product in 3" :key="product">
            <a
              href=""
              class="block h-96 img-1 bg-no-repeat bg-cover bg-center relative"
            >
              <span
                class="absolute w-full h-full flex justify-center items-center group"
              >
                <span
                  class="duration-200 bg-black w-full h-full block opacity-0 group-hover:opacity-30"
                ></span>
                <span
                  class="duration-200 text-white font-bold text-lg absolute opacity-0 transform scale-150 group-hover:opacity-100 group-hover:scale-100"
                >
                  詳細資訊
                </span>
              </span>
            </a>
            <a href="" class="duration-200 block mt-3 hover:text-red-700">
              <h3 class="text-xl">蛋糕</h3>
              <p class="subtitle mt-1">草莓、葡萄</p>
              <p class="mt-1 text-lg">$6,000</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script scoped>
import { onMounted } from "vue";
import { inject } from "vue";

export default {
  components: {},
  setup() {
    const emitter = inject("emitter");
    function setHeaderColor() {
      const color = "black";
      emitter.emit("setColor", color);
    }

    onMounted(() => {
      setHeaderColor();
    });
  },
};
</script>

<style scoped>
.img-panal {
  width: 550px;
}
@layer components {
  .img {
    @apply bg-center bg-cover mb-3 rounded;
    height: 550px;
  }
}
.img-1 {
  background-image: url(https://images.unsplash.com/photo-1501747188-61c00b3d8ba0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80);
}
</style>
