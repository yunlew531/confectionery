<template>
  <section class="py-28 bg-my-white">
    <div class="max-w-screen-lg mx-auto">
      <div class="flex">
        <div class="flex-grow">
          <div class="photo-shop"></div>
          <div class="flex mt-10">
            <div class="max-w-2xl pr-10 border-r border-gray-200">
              <h4 class="text-2xl font-bold">
                一個簡單的、現代的、溫暖的空間，帶有「農業」的概念。
              </h4>
              <p class="mt-5 paragraph text-base">
                Wanoka的總店位於日本原始風景依然保留的Makioka山上。
                Wanoka的總店由建築師Shinsuke
                Kai設計，位於武士住宅的一角，據說這是日本最大的武士住宅之一。
                商店中到處都有使用了已經使用了很長時間的材料和方法創造新事物的人們的手工藝品。
                通往後院的動態平面圖和大膽利用土壤的內部空間。
                從山梨縣走向世界。 請在這裡感受新的甜食氣息。
              </p>
            </div>
            <div class="pl-10 my-auto">
              <h4
                class="text-lg font-bold border-l-8 border-black leading-none pl-3 mb-3"
              >
                店鋪情報
              </h4>
              <p class="text-gray-900 mb-1">02-2553555</p>
              <p class="text-gray-900 mb-1">台北市大安區羅斯福路</p>
              <p class="text-gray-900 mb-1">営業時間 / 10:30 ～ 16:30</p>
            </div>
          </div>
          <div></div>
        </div>
        <div class="vertical-rl ml-6">
          <span class="subtitle mt-1.5">shop infomation</span>
          <h3>店鋪資訊</h3>
        </div>
      </div>
      <div class="inline-block mt-7">
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
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.photo-shop {
  height: 522px;
  background: top no-repeat;
  background-size: cover;
  background-image: url(~@/assets/photo-shop.jpg);
}
</style>