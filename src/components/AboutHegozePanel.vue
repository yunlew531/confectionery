<template>
  <section class="bg-my-white max-w-full py-28">
    <div class="max-w-xl mx-auto">
      <div class="vertical-rl cursor-default select-none">
        <span class="subtitle">about <span class="mt-1">heguozi</span></span>
        <h3 class="text-4xl">無盡的水果魅力</h3>
        <p class="text-xl mr-16 leading-12 tracking-widest text-gray-800">
          <span>水果之縣﹑山梨縣。</span><br />
          <span>為了採收季的豐碩成果﹐</span><br />
          <span>帶著感激之情﹐</span><br />
          <span>用心栽培。</span><br />
          <span>獨特的植栽技術﹐</span><br />
          <span>美味的水果。</span><br />
          <span>極盡其所能﹐</span><br />
          <span>水果的魅力無窮。</span>
        </p>
        <router-link
          to="/"
          class="mr-12 inline-block text-red-600 more-information-bf relative tracking-widest"
          >想了解更多<span class="material-icons transform -rotate-90"
            >expand_more
          </span>
        </router-link>
      </div>
      <img src="@/assets/photo-about.png" class="max-w-full" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.leading-12 {
  line-height: 3rem;
}
.more-information-bf::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  border-right: 1px rgb(220, 38, 38) solid;
  right: -5px;
  transition: 0.3s linear;
}
.more-information-bf:hover.more-information-bf::before {
  height: 0;
  bottom: 0;
}
</style>
