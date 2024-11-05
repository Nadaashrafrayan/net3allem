<template>
  <div class="relative w-full h-screen overflow-hidden">
    <div class="h-full flex justify-center items-center">
      <!-- Loop through slides but only show the active slide -->
      <div
        v-for="(slide, index) in slides"
        :key="index"
        v-show="currentSlide === index" 
        class="w-full h-full flex flex-col items-center justify-center px-10 bg-cover bg-center"
        :style="{ backgroundImage: `url(${slide.image})` }"
      >
        <div class="flex flex-col items-center">
          <!-- Conditional image rendering for specific slides -->
          <div v-if="slide.image" class="flex flex-col items-center">
            <!-- Display two images for index 3 -->
            <img
              v-if="index === 3"
              src="public/evaluation/awards/21221.webp"
              class="object-cover w-full h-auto mb-4"
              alt="Slide Image 1"
            />
            <img
              v-if="index === 3"
              src="public/evaluation/awards/21222.webp"
              class="object-cover w-full h-auto mb-4"
              alt="Slide Image 2"
            />
            <!-- Show the slide image if not index 3 -->
            <img
              v-else-if="index !== 3 && slide.image" 
              :src="slide.image"
              class="object-cover w-full h-auto mb-4"
              alt="Slide Image"
            />
          </div>

          <div class="bg-white bg-opacity-75 p-6 rounded-lg shadow-md w-full max-w-md text-center">
            <h3 class="text-lg font-semibold">{{ slide.subtitle }}</h3>
            <h2 class="text-2xl font-bold">{{ slide.title }}</h2>
            <p v-if="slide.text" class="mb-4">{{ slide.text }}</p>
            <button
              class="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
              @click="learnMore(slide.link)"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between p-4">
      <button @click="prevSlide" class="bg-gray-300 p-2 rounded"> /< </button>
      <button @click="nextSlide" class="bg-gray-300 p-2 rounded">></button>
    </div>

    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        class="w-3 h-3 bg-gray-400 rounded-full cursor-pointer"
        :class="{ 'bg-blue-600': currentSlide === index }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      autoSlideInterval: null,
      slides: [
        {
          subtitle: 'Summer 2022',
          title: "Net3allem wins Harvard’s Social Innovation Fellowship Fund",
          text: "The Social Impact Fellowship Fund at the Harvard Innovation Lab was established in 2019 through the generosity of Alexander Navab, in honor of The Harvard Business School Campaign.",
          image: 'public/evaluation/awards/summer2022.webp', // Use actual path
          link: '#',
        },
        {
          subtitle: '2021-2023',
          title: "Net3allem was selected for the Venture Incubation Program at Harvard Innovation Lab.",
          text: '',
          image: '', // No image for this slide
          link: '#',
        },
        {
          subtitle: 'April 2022',
          title: "Net3allem is short-listed as semi-finalist in the President's Innovation Challenge at Harvard Innovation Lab",
          text: "Out of over 400 Harvard-based startups, Net3allem has been chosen as a semi-finalist at Harvard’s most prestigious startup competition - The President’s Innovation Challenge.",
          image: '', // No image for this slide
          link: '#',
        },
        {
          subtitle: '2021-2022',
          title: "Amina becomes the only international Saul Zaentz fellow at Harvard University",
          text: '',
          image: 'public/evaluation/awards/21221.webp', // Use actual path
          link: '#',
        },
      ],
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    clearInterval(this.autoSlideInterval);
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
    learnMore(link) {
      // Implement your learn more action
      window.location.href = link;
    },
    goToSlide(index) {
      this.currentSlide = index;
      this.resetAutoSlide();
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide();
      }, 20000); // Change slide every 20 seconds
    },
    resetAutoSlide() {
      clearInterval(this.autoSlideInterval);
      this.startAutoSlide();
    },
  },
};
</script>

<style scoped>
/* Ensure the images are well positioned and responsive */
.bg-cover {
  background-size: cover;
}
.bg-center {
  background-position: center;
}
</style>
