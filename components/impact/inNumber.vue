<template>
  <section class="flex flex-wrap md:flex-nowrap w-full h-full py-8">
    <!-- Left Div: Background Image with Title and Text Centered -->
    <div
      class="w-full md:w-1/2 md:h-[700px] h-[300px] flex items-center justify-center bg-cover bg-center text-center px-8"
      :style="{ backgroundImage: 'url(/evaluation/impact/bg-student.webp)' }"
    >
      <div class="text-white max-w-md">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Our Impact in Numbers</h2>
        <p class="text-sm md:text-base leading-relaxed">
          Our achievements to date, were made possible by the generous contributions received to help paint a brighter future for children.​
        </p>
      </div>
    </div>

    <!-- Right Div: Statistics Section -->
    <div class="w-full md:w-1/2 flex flex-col items-center py-16 bg-white px-16 ">
      <!-- Before Net3allem Section -->
      <div class="w-full mb-16">
        <h3 class="text-4xl font-extrabold text-ourGrey mb-14 text-center animate__animated  animate__slideInLeft animate__delay-1s animate__slow">Before Net3allem</h3>
        <div class="grid md:grid-cols-2 grid-flow-row gap-y-8 gap-x-6 place-items-center">
          <div v-for="(item, index) in beforeNet3allemStats" :key="index" class="text-center space-y-3 place-self-center tracking-widest animate__animated  animate__zoomIn animate__delay-1s animate__slow">
            <span class=" text-3xl font-bold text-OurGreen">{{ item.value }}</span>
            <p class="text-sm mx-4 text-gray-400">{{ item.description }}</p>
          </div>
        </div>
      </div>

      <!-- After Net3allem Section -->
      <div class="w-full">
        <h3 class="text-4xl font-extrabold text-ourGrey mb-14 text-center animate__animated  animate__slideInLeft animate__delay-1s animate__slow">After Net3allem</h3>
        
        <!-- First Row of 3 Columns -->
        <div class="grid md:grid-cols-3 grid-flow-row gap-y-14 gap-x-6 place-items-center mb-8 ">
          <div v-for="(item, index) in afterNet3allemStats.slice(0, 3)" :key="index" class="text-center max-w-xl place-self-center space-y-3 leading-relaxed tracking-widest animate__animated  animate__zoomIn animate__delay-1s animate__slow">
            <span class="text-3xl font-bold text-ourOrange">{{ item.value }}</span>
            <p class="text-xs text-gray-400">{{ item.description }}</p>
          </div>
        </div>

        <!-- Second Row of 2 Columns -->
        <div class="grid grid-flow-row md:grid-cols-2 gap-y-14 gap-x-6 place-items-center">
          <div v-for="(item, index) in afterNet3allemStats.slice(3)" :key="index" 
          
          class="text-center max-w-6xl space-y-3 place-self-center tracking-widest animate__animated  animate__zoomIn animate__delay-1s animate__slow">
            <span class="text-3xl font-bold text-ourOrange">{{ item.value }}</span>
            <p class="text-xs text-gray-400 ">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      beforeNet3allemStats: [
        { value: '100%', description: 'Illiteracy rate amongst the children' },
        { value: '75%', description: 'Illiteracy rate amongst parents' },
      ],
      afterNet3allemStats: [
        { value: '45', description: 'Students go to Tagrebi Schools​' },
        { value: '98%', description: 'School Persistence' },
        { value: '85%', description: 'of students graduate with second grade literacy and numeracy proficiency​' },
        { value: '54%', description: 'Parents enrolled in Net3allem’s Literacy Programs' },
        { value: '87%', description: 'Parents equipped to support their child’s development and education after Net3allem’s workshops' },
      ],
    };
  },
};
</script>

<style scoped>

</style>
