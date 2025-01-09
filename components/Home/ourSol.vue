<template>
  <section class="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-5 mx-auto max-w-7xl items-start bg-ourOrange text-white90 py-20 px-4 md:px-32  overflow-hidden">
    <!-- Left Side: Solution Content -->
    <div class="w-full md:w-1/2 space-y-10 mx-4 text-left font-thin tracking-[0.1em] pt-4 px-4 md:px-0">
      <h3 class="text-2xl md:text-[40px] font-bold uppercase text-white97 tracking-[0.18em]">Our Solution</h3>
      <p class="text-sm md:text-xl font-light">
        Our solution is three-fold:
      </p>
      <ul class="list-decimal list-outside space-y-4 pl-5">
        <li class="text-sm md:text-lg leading-relaxed pb-5">
          We <strong class="font-bold text-white97">empower</strong> teachers by providing professional development workshops for optimal teaching and learning environments. We directly train women from the community to become teachers at our own pre-schools or indirectly through partnerships with NGOs, acting as their professional development providers.
        </li>
        <li class="text-sm md:text-lg leading-relaxed pb-5">
          We give our students at Net3allem a safe space to <strong class="font-bold text-white97">learn</strong> and <strong class="font-bold text-white97">grow</strong>. Students graduate from Net3allem with Grade 2 Egyptian curriculum proficiency, enabling them to excel in school.
        </li>
        <li class="text-sm md:text-lg leading-relaxed pb-5">
          We give parent workshops, guide parents to follow play-based child-parent interaction, and raise awareness to tackle common myths within the community.
        </li>
      </ul>
    </div>

    <!-- Right Side: Image Gallery with Thumbnails -->
    <div class="w-full md:w-1/2 flex flex-col items-center">
      <!-- Main Display Image -->
      <div class="relative w-full h-auto border-2 md:border-4 px-2 border-white bg-white rounded-lg overflow-hidden mb-4 max-w-full">
        <img loading="lazy" :src="images[currentImageIndex]" alt="Gallery Image" class="w-full h-full object-cover transition duration-500 ease-in-out" />

        <!-- Navigation Arrows for Main Image -->
        <button @click="prevImage" class="absolute left-0 top-1/2 transform -translate-y-1/2 text-2xl md:text-[40px] text-white97 p-2 rounded-full">
          ‹
        </button>
        <button @click="nextImage" class="absolute right-0 top-1/2 transform -translate-y-1/2 text-2xl md:text-[40px] text-white97 p-2 rounded-full">
          ›
        </button>
      </div>

      <!-- Thumbnail Row with Navigation Arrows -->
      <div class="relative flex items-center justify-center w-full">
        <!-- Left arrow for thumbnail scroll -->
        <button @click="scrollThumbnails('left')" class="absolute left-0 text-white p-2 text-xl md:text-[40px] z-10">
          ‹
        </button>
        
        <!-- Thumbnails container -->
        <div ref="thumbnailContainer" class="flex gap-2 overflow-hidden w-full px-4 md:px-8">
          <div class="flex gap-2">
            <img
            loading="lazy"
              v-for="(image, index) in images"
              :key="index"
              :src="image"
              :class="['w-16 h-16 md:w-24 md:h-24 lg:w-40 lg:h-40 object-cover cursor-pointer rounded', currentImageIndex === index ? 'border-2 border-white' : 'opacity-75']"
              @click="currentImageIndex = index"
              alt="Thumbnail"
            />
          </div>
        </div>
        
        <!-- Right arrow for thumbnail scroll -->
        <button @click="scrollThumbnails('right')" class="absolute right-0 text-white p-2 text-xl md:text-[40px] z-10">
          ›
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "/banners/gallery1.jpeg",
        "/banners/gallery2.jpeg",
        "/banners/gallery3.png",
        "/banners/gallery4.png",
        "/banners/gallery5.png",
        "/banners/gallery6.png",
        "/banners/gallery7.png",
      ],
      currentImageIndex: 0, // Currently displayed image index
    };
  },
  methods: {
    // Go to the previous main image
    prevImage() {
      this.currentImageIndex =
        (this.currentImageIndex + this.images.length - 1) % this.images.length;
    },
    // Go to the next main image
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
    // Scroll the thumbnail row
    scrollThumbnails(direction) {
      const container = this.$refs.thumbnailContainer;
      const scrollAmount = 80; // Amount to scroll with each click
      container.scrollLeft += direction === 'right' ? scrollAmount : -scrollAmount;
    },
  },
};
</script>
