<template>
  <section class="bg-footer text-gray-200 font-bold pt-24 flex flex-col px-32">
    <div class="flex-grow pb-24 flex justify-between divide-x divide-gray-700">
      <div class="px-16">
        <router-link
          to="/home"
          class="flex justify-end duration-300 hover:text-gray-400"
        >
          <h2 class="text-5xl vertical-rl tracking-2widest">和菓子</h2>
        </router-link>
      </div>
      <div class="flex-grow flex flex-col items-center justify-center">
        <a href="javascript:;" class="flex duration-300 hover:text-gray-400">
          <h4>產品介紹</h4>
          <span class="material-icons"> arrow_right </span>
        </a>
        <div class="vertical-rl leading-10 tracking-widest mt-8">
          <a href="javascript:;"><p>產品一覽</p></a>
          <a href="javascript:;"><p>原料的選用</p></a>
          <a href="javascript:;"><p>製作一覽</p></a>
        </div>
      </div>
      <div class="flex-grow flex flex-col items-center justify-center">
        <a href="javascript:;" class="flex duration-300 hover:text-gray-400">
          <h4>關於和菓子</h4>
          <span class="material-icons"> arrow_right </span>
        </a>
        <div class="vertical-rl leading-10 tracking-widest mt-8">
          <a href="javascript:;"><p>店鋪資訊</p></a>
          <a href="javascript:;"><p>店鋪概要</p></a>
          <a href="javascript:;"><p>製作一覽</p></a>
        </div>
      </div>
      <div class="flex-grow flex flex-col items-center justify-center">
        <a href="javascript:;" class="flex duration-300 hover:text-gray-400">
          <h4>立即購物</h4>
          <span class="material-icons"> arrow_right </span>
        </a>
        <div class="vertical-rl leading-10 tracking-widest mt-8">
          <a href="javascript:;"><p>登入</p></a>
          <a href="javascript:;"><p>店鋪概要</p></a>
          <a href="javascript:;"><p>製作一覽</p></a>
        </div>
      </div>
      <div class="px-6 flex flex-col justify-center">
        <a href="javascript:;" class="duration-300 hover:text-gray-400">
          <span class="material-icons"> mail </span><br />
        </a>
        <a href="javascript:;" class="duration-300 hover:text-gray-400">
          <span class="material-icons"> mail </span>
        </a>
      </div>
    </div>
    <div class="flex justify-between border-t border-gray-700 py-4">
      <span class="uppercase">© 2021 heguozi .</span>
      <span>footer</span>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.bg-footer {
  height: 480px;
  background: center repeat-x;
  background-image: url(~@/assets/bg-footer.jpg);
}
</style>