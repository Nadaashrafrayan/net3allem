<template>
  <header class="flex items-center justify-between p-4 bg-white shadow-md">
    <nav class="hidden md:flex space-x-6"> 
      <div class="flex items-center">
        <img src="../../assets/images/logo/Logo.png" alt="Logo" class="h-10" /> <!-- Replace with your logo -->
      </div>
      <NuxtLink to="/" class="text-gray-700">Home</NuxtLink>
      <NuxtLink to="/about" class="text-gray-700">About Us</NuxtLink>
      <NuxtLink to="/evaluation" class="text-gray-700">Evaluation</NuxtLink>
      <NuxtLink to="/partners" class="text-gray-700">Partners</NuxtLink>
      <NuxtLink to="/contact" class="text-gray-700">Get In Touch</NuxtLink>
      <NuxtLink to="/donate" class="text-gray-700">Donate</NuxtLink>
    </nav>

    <div class="hidden md:flex items-center">
      <button class="flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg">
        <img src="../../assets/images/icons/calc.svg" alt="Calculator Icon" class="h-5 w-5 mr-2 transition duration-200 ease-in-out hover:fill-white" />
        Zakah Calculator
      </button>
    </div>

    <!-- Mobile View -->
    <div class="md:hidden flex items-center justify-between w-full">
      <button class="flex items-center bg-blue-600 text-white py-2 px-4 rounded-lg">
        <img src="../../assets/images/icons/calc.svg" alt="Calculator Icon" class="h-5 w-5 mr-2 transition duration-200 ease-in-out hover:fill-white" />
        Zakah Calculator
      </button>

      <img src="../../assets/images/logo/Logo.png" alt="Logo" class="h-10 mx-auto" /> <!-- Replace with your logo -->

      <button @click="toggleMenu" class="text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="absolute top-16 right-0 bg-white shadow-lg w-full z-10">
      <nav class="flex flex-col space-y-4 p-4">
        <NuxtLink to="/" class="text-gray-700">Home</NuxtLink>
        <NuxtLink to="/about" class="text-gray-700">About Us</NuxtLink>
        <NuxtLink to="/evaluation" class="text-gray-700">Evaluation</NuxtLink>
        <NuxtLink to="/partners" class="text-gray-700">Partners</NuxtLink>
        <NuxtLink to="/contact" class="text-gray-700">Get In Touch</NuxtLink>
        <NuxtLink to="/donate" class="text-gray-700">Donate</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
