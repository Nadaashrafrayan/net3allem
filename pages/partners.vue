<template><div class="">
  <section class="flex flex-col items-center justify-center min-h-screen md:max-w-screen-md max-w-screen-sm mx-auto py-24 bg-white px-4">
    <!-- Title -->
    <h2 class="md:text-[56px] text-4xl stroke-ourPurple stroke-1 font-[1000] text-ourPurple   uppercase tracking-[0.28em] mb-28" style="font-family: 'lulo-clean-w01-one-bold', 'lulo-clean-w05-one-bold', sans-serif;">Partners</h2>
    
    <!-- Partners Logos -->
    <div class="flex flex-col items-center md:space-y-24 space-y-12">
      <!-- First Row: Display first two logos side by side and centered -->
      <div class="flex flex-row justify-center items-center md:space-x-24 space-x-4 w-full" v-if="logos.length > 1">
        <img loading="lazy" :src="logos[0]" alt="Partner Logo" class="object-contain w-4/12 md:w-2/3 max-h-[300px] animate__animated animate__fadeInLeft animate__delay-0.5s" />
        <img loading="lazy" :src="logos[1]" alt="Partner Logo" class="object-contain w-3/12 md:w-2/3 max-h-[300px] animate__animated animate__fadeInRight animate__delay-0.5s " />
      </div>
      
      <!-- Remaining Rows: Display each logo in a new centered row -->
      <div v-for="(logo, index) in logos.slice(2)" :key="index + 2" class="flex justify-center w-full">
        <img loading="lazy" :src="logo" alt="Partner Logo" class="object-contain w-5/12 max-h-auto animate__animated animate__fadeInUp animate__delay-1s" />
      </div>
    </div>
  </section></div>
</template>

<script>
export default {
  name: "OurPartners",
  data() {
    return {
      logos: [
        "/banners/net3allem.png",
        "/parteners/bedaya.png",
        "/parteners/egypt.png",
        "/parteners/harvard.png",
        "/parteners/bloom.png",
        "/parteners/zeede.png",
        "/parteners/World.png"
      ]
    };
  }
};
</script>

<style scoped>
/* Optional styling */

</style>
