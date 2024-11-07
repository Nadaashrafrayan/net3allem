<template>
  <div class=" w-full px-3  overflow-hidden">
    <!-- Active slide is displayed, others are hidden -->
    <component :is="currentSlideComponent" class="w-full min-h-min transition-opacity duration-300" />

    <!-- Navigation buttons -->
    <button
      class="absolute md:left-10 left-2 top-1/2 transform -translate-y-1/2 text-white p-2  text-3xl md:text-6xl"
      @click="prevSlide"
    >
      &#10094; <!-- Left Arrow Icon -->
    </button>
    <button
      class="absolute md:right-10 right-2 top-1/2 transform -translate-y-1/2  text-white p-2 text-3xl md:text-6xl "
      @click="nextSlide"
    >
      &#10095; <!-- Right Arrow Icon -->
    </button>
  </div>
</template>

<script>
import Slide1 from './slide1.vue';
import Slide2 from './slide2.vue';
import Slide3 from './slide3.vue';
import Slide4 from './slide4.vue';

export default {
  components: {
    Slide1,
    Slide2,
    Slide3,
    Slide4,
  },
  data() {
    return {
      currentSlide: 0,
      intervalId: null,
      slides: ['slide1', 'slide2', 'slide3', 'slide4'], // Array of slide names
    };
  },
  computed: {
    currentSlideComponent() {
      return this.slides[this.currentSlide];
    },
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.resetAutoSlide();
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      this.resetAutoSlide();
    },
    resetAutoSlide() {
      clearInterval(this.intervalId);
      this.startAutoSlide();
    },
    startAutoSlide() {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 5000); // Change slide every 20 seconds
    },
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
};
</script>

<style scoped>
/* Optional: Add any additional styling here */
</style>
