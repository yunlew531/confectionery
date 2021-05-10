<template>
  <div class="flex justify-between" :class="{ [displayColor]: true }">
    <div class="flex">
      <router-link to="/" class="inline-block mr-16">
        <h1
          class="duration-300 inline-block title-bg bg-no-repeat center bg-cover vertical-lr tracking-2widest font-bold hover:text-gray-400"
        >
          和菓子
        </h1>
      </router-link>
      <ul class="pt-3.5 flex">
        <li>
          <router-link to="/" class="nav-font-style">關於和菓子</router-link>
        </li>
        <li>
          <router-link to="/" class="nav-font-style">和菓子</router-link>
        </li>
        <li>
          <router-link to="/" class="nav-font-style">製作</router-link>
        </li>
        <li>
          <router-link to="/" class="nav-font-style">原料</router-link>
        </li>
        <li>
          <router-link to="/" class="nav-font-style">消息</router-link>
        </li>
        <li>
          <router-link to="/" class="nav-font-style">日常事務</router-link>
        </li>
        <li>
          <router-link to="/" class="nav-font-style">關於店鋪</router-link>
        </li>
      </ul>
    </div>
    <div>
      <div class="flex justify-evenly mb-3 font-reggae-one">
        <a
          href="javasript:;"
          class="duration-300 flex items-center mr-10 hover:text-red-600"
        >
          <span class="material-icons mr-1">person</span>
          登入
        </a>
        <a
          href="javasript:;"
          class="duration-300 flex items-center hover:text-red-600"
          ><span class="material-icons mr-1">shopping_bag</span>
          購物車
        </a>
        <button
          type="button"
          class="duration-100 ease-linear w-12 h-12 bg-gray-300 hover:bg-black rounded-full ml-5"
        >
          <span class="material-icons text-4xl transform -rotate-90 text-white"
            >signal_cellular_alt
          </span>
        </button>
      </div>
      <div class="relative">
        <input
          type="search"
          class="w-44 outline-none border-b bg-opacity-0 bg-white text-white pb-2 tracking-wider caret-white placeholder-gray-400 hover:text-red-500"
          placeholder="商品搜尋"
        />
        <button type="button">
          <span
            class="duration-300 material-icons text-white absolute top-0 right-16 caret-color hover:text-gray-300 active:text-gray-400 font-thin"
            >search
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    headerColor: String,
  },
  setup(props) {
    // 切換主色調: props 可傳入 black / white
    const displayColor = computed(() => {
      if (props.headerColor === "black") return "text-black";
      return "text-white";
    });

    return {
      displayColor,
    };
  },
};
</script>

<style scoped>
@layer components {
  .nav-font-style {
    @apply mr-3 relative pr-0.5;
    writing-mode: vertical-lr;
    letter-spacing: 0.3em;
    font-family: "Reggae One", cursive;
  }
  .style-white {
  }
}
.nav-font-style:nth-child(n)::before {
  content: "";
  position: absolute;
  border-right: 1px solid #fff;
  height: 0%;
  width: 100%;
  bottom: 0;
  transition: 0.5s linear;
}
.nav-font-style:hover.nav-font-style::before {
  height: 100%;
  top: 0;
}
.title-bg {
  /* background-image: url(~@/assets/logo_title.png); */
}
.caret-white {
  caret-color: #fff;
}
.font-reggae-one {
  font-family: "Reggae One", cursive;
}
</style>
