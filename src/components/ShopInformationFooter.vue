<template>
  <div class="bg-my-white-deep py-24">
    <ul class="max-w-5xl flex justify-evenly mx-auto">
      <li class="w-3/6">
        <a
          href=""
          class="duration-200 flex p-1 bg-my-white hover:text-red-700 group"
        >
          <span
            class="w-28 h-28 shop-hegoze bg-center bg-cover bg-no-repeat"
          ></span>
          <span class="ml-3 px-3 flex justify-between flex-grow items-center">
            <div>
              <h3 class="text-2xl">和菓子介紹</h3>
              <p class="duration-200 subtitle group-hover:text-red-700">
                about hegoze
              </p>
            </div>
            <span class="material-icons text-red-700">
              play_circle_outline
            </span>
          </span>
        </a>
      </li>
      <li class="w-3/6 ml-8">
        <a
          href=""
          class="duration-200 flex p-1 bg-my-white hover:text-red-700 group"
        >
          <span
            class="w-28 h-28 shop-img bg-center bg-cover bg-no-repeat"
          ></span>
          <span class="ml-3 px-3 flex justify-between flex-grow items-center">
            <div>
              <h3 class="text-2xl">店鋪介紹</h3>
              <p class="duration-200 subtitle group-hover:text-red-700">
                shop information
              </p>
            </div>
            <span class="material-icons text-red-700">
              play_circle_outline
            </span>
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.shop-hegoze {
  background-image: url("~@/assets/photo-about.png");
}
.shop-img {
  background-image: url("~@/assets/photo-shop.jpg");
}
</style>
