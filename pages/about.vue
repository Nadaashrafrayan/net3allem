<template>
  <main class="min-h-screen">

  <div class="">
<VisMis/>
<ourStratgy></ourStratgy> 
<ourValues></ourValues>
<program></program>
<section class="flex flex-col items-center justify-center  bg-white mt-8">
  <h2 class="text-[46px] font-extrabold text-OurGreen  uppercase tracking-[0.12em] leading-relaxed md:py-24 py-10">
    Our Model  </h2>
  <img loading="lazy"      class="mt-3 max-w-screen-lg px-2  object-cover  w-full h-full" src="/about/image.png"></section>
  <paper></paper></div></main>
</template>
<script>
import ourStratgy from '~/components/about/ourStratgy.vue';
import OurValues from '~/components/about/ourValues.vue';
import Paper from '~/components/about/paper.vue';
import Program from '~/components/about/program.vue';
export default {
  components: { ourStratgy, OurValues, Program, Paper },};
</script>
