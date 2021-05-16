<template>
  <section>
    <div class="bg-about-hegoze">
      <div class="bg-banner mx-auto mt-52"></div>
      <div
        class="vertical-rl cursor-default select-none text-white mx-auto mt-12"
      >
        <span class="subtitle">about <span class="mt-1">heguozi</span></span>
        <h3 class="text-4xl">無盡的水果魅力</h3>
        <p class="text-xl mr-16 leading-12 tracking-widest text-gray-800">
          <span class="text-white">水果之縣﹑山梨縣。</span><br />
          <span class="text-white">為了採收季的豐碩成果﹐</span><br />
          <span class="text-white">帶著感激之情﹐</span><br />
          <span class="text-white">用心栽培。</span><br />
          <span class="text-white">獨特的植栽技術﹐</span><br />
          <span class="text-white">美味的水果。</span><br />
          <span class="text-white">極盡其所能﹐</span><br />
          <span class="text-white">水果的魅力無窮。</span>
        </p>
      </div>
    </div>
    <div class="max-w-screen-lg py-24 my-white mx-auto">
      <div class="flex items-center">
        <div class="img-make w-1/2"></div>
        <div class="w-1/2 p-12 pl-16">
          <h3>關於製作</h3>
          <p class="paragraph mt-5">
            Hegoze 三明治，maku，男性，包裹。
            要创造新的水果财富，需要花费大量的精力和精力。
          </p>
          <a
            href=""
            class="mt-5 inline-flex items-center text-red-700 more-btn"
          >
            <span>詳細訊息</span>
            <span class="material-icons ml-1 text-sm">
              play_circle_outline
            </span>
          </a>
        </div>
      </div>
      <div class="flex items-center mt-24">
        <div class="w-1/2 pr-12">
          <h3>關於原料</h3>
          <p class="paragraph mt-5">
            水果在Hegoze的糖果中起着主导作用。
            我们感谢山梨县自然和人的福祉，并充分利用了水果的美味。
          </p>
          <a
            href=""
            class="mt-5 inline-flex items-center text-red-700 more-btn"
          >
            <span>詳細訊息</span>
            <span class="material-icons ml-1 text-sm">
              play_circle_outline
            </span>
          </a>
        </div>
        <div class="img-material w-1/2"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
@layer components {
  .bg-about-hegoze {
    @apply py-24 w-full;
    background-image: url("~@/assets/Hegoze-bg.jpg");
  }
  .bg-banner {
    @apply bg-no-repeat bg-center bg-cover;
    background-image: url("~@/assets/photo-about.png");
    width: 500px;
    height: 500px;
  }
  .img-make,
  .img-material {
    @apply bg-no-repeat bg-center bg-cover;
    height: 550px;
  }
  .img-make {
    background-image: url("~@/assets/photo-sweet-1.png");
  }
  .img-material {
    background-image: url("~@/assets/photo-sweet-2.png");
  }
  .more-btn {
    @apply relative;
  }
  .more-btn::before {
    content: "";
    @apply duration-200 w-full h-full border-b border-red-700 -bottom-0.5 absolute;
  }
  .more-btn:hover.more-btn::before {
    @apply right-0 w-0;
  }
}
</style>
