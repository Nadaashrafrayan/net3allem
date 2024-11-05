<template>
<VisMis/>
<ourStratgy></ourStratgy>
<ourValues></ourValues>
<program></program>
<section class="flex flex-col items-center justify-center  bg-white mt-8">
  <h2 class="text-[46px] font-extrabold text-OurGreen font-sans uppercase tracking-[0.12em] leading-relaxed py-24">
    Our Model  </h2>
  <img       class="mt-3 max-w-screen-lg  object-cover  w-full h-full" src="/about/image.png"></section>
  <paper></paper>
</template>
<script>
import ourStratgy from '~/components/about/ourStratgy.vue';
import OurValues from '~/components/about/ourValues.vue';
import Paper from '~/components/about/paper.vue';
import Program from '~/components/about/program.vue';
export default {
  components: { ourStratgy, OurValues, Program, Paper },};
</script>
