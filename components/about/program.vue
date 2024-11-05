<template>
  <section class="flex flex-col items-center justify-center md:min-h-screen bg-white md:mt-24 mt-0">
    <div class="text-center mb-8">
      <h1 class="md:text-[56px] text-3xl font-extrabold text-ourOrange font-sans uppercase tracking-[0.13em] leading-loose md:mb-14 mb-6">
        Net3allem's Program
      </h1>
      <h2 class="md:text-[42px] text-3xl font-[1000] text-ourPurple mt-4 tracking-[0.18em] leading-loose font-sans uppercase pb-3">
        Our Framework
      </h2>
      <p class="max-w-3xl px-8 text-ourGrey text-base text-left leading-loose">
        We believe that children's brains and bodies need nurture to help them survive, thrive, and reach their full potential. We follow UNICEF's Nurturing Care Framework, which is locally adapted to the needs of every community we serve.
      </p>
    </div>
    <img 
      src="public/about/nuturingCare.png" 
      alt="Illustration related to Net3allem's Program" 
      class="mt-3 max-w-lg object-cover md:w-[450px] md:h-[450px] w-[300px] h-[300px]" 
      :class="{ 'spinning-image': isVisible }" 
      ref="spinningImage" 
    />
  </section>
</template>

<script>
export default {
  name: 'YourComponentName',
  data() {
    return {
      isVisible: false, // To track visibility of the image
    };
  },
  mounted() {
    this.createObserver();
  },
  methods: {
    createObserver() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isVisible = true; // Start spinning when the image is in the viewport
            observer.disconnect(); // Stop observing after the image is visible
          }
        });
      }, {
        threshold: 0.1 // Adjust the threshold as needed
      });

      observer.observe(this.$refs.spinningImage); // Observe the image
    }
  },
};
</script>

<style scoped>
.spinning-image {
  animation: spin 1.2s linear ; /* Adjust duration and timing as needed */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
