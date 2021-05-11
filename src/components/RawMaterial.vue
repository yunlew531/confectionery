<template>
  <section class="py-28 bg-my-white">
    <div class="max-w-6xl mx-auto">
      <div class="flex">
        <div class="w-1/2 pr-10 my-auto select-none">
          <div class="vertical-rl">
            <span class="subtitle">fruit</span>
            <h3>原料</h3>
          </div>
          <p class="paragraph mt-12">
            水果在Wanoka的糖果中起著主導作用。<br />
            我們感謝山梨縣自然和人的福祉，並充分利用了水果的美味。
          </p>
        </div>
        <div
          class="w-1/2 photo-raw-material-main bg-center bg-cover bg-no-repeat ml-7"
        ></div>
      </div>
      <div class="mt-20">
        <h4 class="text-lg font-bold border-l-8 border-black leading-none pl-3">
          原料一覽
        </h4>
        <ul class="mt-5 grid grid-cols-12 gap-x-7">
          <li
            v-for="item in photoRawMaterialData"
            :key="item.title"
            class="border-t border-b border-gray-300 col-span-3 py-3.5 -mt-025"
          >
            <a class="flex group" href="javasript:;">
              <span class="photo-raw-material relative" :class="item.src">
                <span
                  class="absolute duration-200 w-full h-full bg-black rounded-full opacity-0 group-hover:opacity-60"
                >
                </span>
              </span>
              <div class="ml-5 my-auto flex-grow">
                <h4
                  class="duration-200 group-hover:text-red-600 text-lg font-bold"
                >
                  {{ item.name }}
                </h4>
                <span class="duration-200 subtitle group-hover:text-red-600">{{
                  item.engName
                }}</span>
              </div>
              <span class="material-icons my-auto text-xl text-red-500">
                play_circle_outline
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const photoRawMaterialData = reactive([
      {
        name: "草莓",
        engName: "strabarry",
        src: "photo-raw-matarial-1",
      },
      {
        name: "葡萄",
        engName: "grape",
        src: "photo-raw-matarial-2",
      },
      {
        name: "桃子",
        engName: "peach",
        src: "photo-raw-matarial-3",
      },
      {
        name: "柿子",
        engName: "persimmon",
        src: "photo-raw-matarial-4",
      },
      {
        name: "梨子",
        engName: "pear",
        src: "photo-raw-matarial-5",
      },
      {
        name: "奇異果",
        engName: "kiwi fruit",
        src: "photo-raw-matarial-6",
      },
      {
        name: "麝香葡萄",
        engName: "shine muscat",
        src: "photo-raw-matarial-7",
      },
      {
        name: "荏胡麻",
        engName: "perilla",
        src: "photo-raw-matarial-8",
      },
      {
        name: "紅酒",
        engName: "red wine",
        src: "photo-raw-matarial-9",
      },
      {
        name: "白酒",
        engName: "white wine",
        src: "photo-raw-matarial-10",
      },
    ]);
    return {
      photoRawMaterialData,
    };
  },
};
</script>

<style>
.photo-raw-material-main {
  height: 550px;
  background-image: url(~@/assets/photo-raw-matarial-main.jpg);
}
.photo-raw-material {
  display: inline-block;
  width: 103px;
  height: 103px;
  border-radius: 100%;
  background: center no-repeat;
  background-size: cover;
}
.photo-raw-matarial-1 {
  background-image: url(~@/assets/photo-raw-matarial-1.jpg);
}
.photo-raw-matarial-2 {
  background-image: url(~@/assets/photo-raw-matarial-2.jpg);
}
.photo-raw-matarial-3 {
  background-image: url(~@/assets/photo-raw-matarial-3.jpg);
}
.photo-raw-matarial-4 {
  background-image: url(~@/assets/photo-raw-matarial-4.jpg);
}
.photo-raw-matarial-5 {
  background-image: url(~@/assets/photo-raw-matarial-5.jpg);
}
.photo-raw-matarial-6 {
  background-image: url(~@/assets/photo-raw-matarial-6.jpg);
}
.photo-raw-matarial-7 {
  background-image: url(~@/assets/photo-raw-matarial-7.jpg);
}
.photo-raw-matarial-8 {
  background-image: url(~@/assets/photo-raw-matarial-8.jpg);
}
.photo-raw-matarial-9 {
  background-image: url(~@/assets/photo-raw-matarial-9.jpg);
}
.photo-raw-matarial-10 {
  background-image: url(~@/assets/photo-raw-matarial-10.jpg);
}
</style>