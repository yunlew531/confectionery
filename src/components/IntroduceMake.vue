<template>
  <section class="grid grid-cols-12">
    <div class="col-span-9 bg-red-300 h-full grid grid-cols-12 text-white">
      <a
        href="javascript:;"
        class="product-make-image product-make-image-1 relative"
      >
        <h3 class="absolute bottom-6 left-6 leading-8 font-bold">
          三明治<br />
          <span class="uppercase text-base font-normal">sandwich</span>
        </h3>
        <span class="more-info">點擊了解更多</span>
      </a>
      <a
        href="javascript:;"
        class="product-make-image product-make-image-2 relative"
      >
        <h3 class="absolute bottom-6 left-6 leading-8 font-bold">
          蛋捲<br />
          <span class="uppercase text-base font-normal">roll</span>
        </h3>
        <span class="more-info">點擊了解更多</span>
      </a>
      <a
        href="javascript:;"
        class="product-make-image product-make-image-3 relative"
      >
        <h3 class="absolute bottom-6 left-6 leading-8 font-bold">
          甜甜圈<br />
          <span class="uppercase text-base font-normal">donuts</span>
        </h3>
        <span class="more-info">點擊了解更多</span>
      </a>
      <a
        href="javascript:;"
        class="product-make-image product-make-image-4 relative"
      >
        <h3 class="absolute bottom-6 left-6 leading-8 font-bold">
          蛋糕<br />
          <span class="uppercase text-base font-normal">cake</span>
        </h3>
        <span class="more-info">點擊了解更多</span>
      </a>
    </div>
    <div class="col-span-3 h-full flex items-center px-20">
      <div>
        <div class="vertical-rl mb-16">
          <span class="subtitle">make</span>
          <h3>製作</h3>
        </div>
        <p class="tracking-widest leading-8 text-xl">
          和菓子的甜點是純手工製作。<br />
          包含三明治，蛋糕，甜甜圈，可頌。<br />
          要創造新的水果甜點，需要花費大量的時間和精力。
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
@layer components {
  .more-info {
    @apply opacity-0 absolute top-1/2 left-1/2 transform scale-150 duration-300 -translate-x-1/2 -translate-y-1/2 text-xl;
  }
}
.product-make-image {
  grid-column: span 6;
  height: 704px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.product-make-image:nth-child(n)::before {
  content: "";
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0;
  position: absolute;
  transition: 0.3s linear;
}
.product-make-image:hover.product-make-image::before {
  opacity: 0.5;
}
.product-make-image:hover span {
  opacity: 1;
  transform: scale(1) translateX(-50%) translateY(-50%);
}
.product-make-image-1 {
  background-image: url(~@/assets/photo-sweet-1.png);
}
.product-make-image-2 {
  background-image: url(~@/assets/photo-sweet-2.png);
}
.product-make-image-3 {
  background-image: url(~@/assets/photo-sweet-3.png);
}
.product-make-image-4 {
  background-image: url(~@/assets/photo-sweet-4.png);
}
</style>
