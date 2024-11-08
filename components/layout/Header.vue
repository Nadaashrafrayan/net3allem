<template>
  <header class="flex items-center justify-between p-4 bg-white">
    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center justify-center flex-1 space-x-6 container">
      <!-- Desktop Logo on the Left for Large Screens -->
      <div class="flex items-center justify-start flex-none mr-auto">
        <img src="../../assets/images/logo/Logo.png" alt="Logo" class="h-20" />
      </div>

      <!-- Menu Items in the Center for Large Screens -->
      <div class="flex-2 flex justify-center space-x-6 px-12">
        <NuxtLink
          to="/"
          :class="{ 'text-ourOrange': isActiveRoute('/') }"
          class="text-grey50 text-base font-thin"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          :class="{ 'text-ourOrange': isActiveRoute('/about') }"
          class="text-grey50 text-base font-thin"
        >
          About Us
        </NuxtLink>
        <div class="relative group">
          <NuxtLink
            to="/evaluation/impact"
            :class="{ 'text-ourOrange': isActiveRoute('/evaluation/impact') }"
            class="text-grey50 text-base font-thin"
            tabindex="0"

          >
            Evaluation
          </NuxtLink>
          <div class="hidden group-hover:flex flex-col absolute bg-white rounded-lg p-2 z-30">
            <NuxtLink
              to="/evaluation/impact"
              :class="{ 'text-ourOrange': isActiveRoute('/evaluation/impact') }"
              class="text-grey50 text-base px-4 py-2"
            >
              Impact
            </NuxtLink>
            <NuxtLink
              to="/evaluation/awards"
              :class="{ 'text-ourOrange': isActiveRoute('/evaluation/awards') }"
              class="text-grey50 text-base px-4 py-2"
            >
              Awards
            </NuxtLink>
          </div>
        </div>
        <NuxtLink
          to="/partners"
          :class="{ 'text-ourOrange': isActiveRoute('/partners') }"
          class="text-grey50 text-base font-thin"
        >
          Partners
        </NuxtLink>
        <div class="relative group">
          <NuxtLink
            to="/contact"
            :class="{ 'text-ourOrange': isActiveRoute('/contact') }"
            class="text-grey50 text-base font-thin"
            tabindex="0"

          >
            Get In Touch
          </NuxtLink>
          <div class="hidden group-hover:flex flex-col absolute bg-white rounded-lg  w-52 p-2 z-30">
            <NuxtLink
              to="/contact"
              :class="{ 'text-ourOrange': isActiveRoute('/contact') }"
              class="text-grey50 text-base px-4 py-2"
            >
              Contact Us
            </NuxtLink>
            <NuxtLink
              to="/volunteer"
              :class="{ 'text-ourOrange': isActiveRoute('/volunteer') }"
              class="text-grey50 text-base px-4 py-2"
            >
              Volunteer With Us
            </NuxtLink>
          </div>
        </div>
        <NuxtLink
          to="/donate"
          :class="{ 'text-ourOrange': isActiveRoute('/donate') }"
          class="text-grey50 text-base font-thin"
        >
          Donate
        </NuxtLink>
      </div>

      <!-- Zakah Calculator Button on the Right for Large Screens -->
      <div class="flex-none ml-auto">
        <NuxtLink to="/Zakah">
        <button class="text-ourGrey py-2 px-4 border-l-2 border-ourOrange hover:bg-ourOrange hover:text-white  flex items-center">
          Zakah Calculator
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="96" viewBox="0 0 24 24" class="h-10 w-10 ml-4 hover:fill-white fill-ourOrange">
            <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 2v4h10V4zm0 6v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z" />
          </svg>
        </button></NuxtLink>
      </div>
    </nav>

    <!-- Mobile View -->
    <div class="md:hidden flex items-center justify-between py-2 px-4 w-full">
      <!-- Zakah Calculator Button for Mobile -->
 <NuxtLink to="/Zakah">
      <button class="text-ourGrey rounded-lg text-[10px] flex flex-col items-center text-center">
        <img src="../../assets/images/icons/calc.svg" alt="Calculator Icon" class="h-8 w-8 mb-1" />
        Zakah Calculator
      </button>
</NuxtLink>
      <!-- Mobile Logo -->
      <img src="../../assets/images/logo/Logo.png" alt="Logo" class="h-14 w-16 self-center mr-5 mb-2" />

      <!-- Mobile Menu Toggle Button -->
      <button @click="toggleMenu" class="text-ourGrey">
        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z" />
        </svg>
      </button>
    </div>

    <!-- Mobile Sidebar Menu -->
    <div
      :class="{ 'translate-x-0': isMenuOpen, 'translate-x-full': !isMenuOpen }"
      class="fixed top-0 right-0 h-full w-64 bg-ourOrange shadow-lg z-20 transition-transform duration-300 transform"
    >
      <div class="flex items-start justify-end p-4">
        <button @click="toggleMenu" class="text-white90 font-bold border-2 p-3 border-white90">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Menu Items for Mobile -->
      <nav class="flex flex-col space-y-4 px-4 justify-end text-base">
        <NuxtLink 
        to="/" 
        class="text-white border-b border-gray-200 py-2"
        :class="{ 'text-ourPurple': isActiveRoute('/') }"

        >Home</NuxtLink>
        <NuxtLink to="/about" class="text-white border-b border-gray-200 py-2"
        :class="{ 'text-ourPurple': isActiveRoute('/about') }"

        >About Us</NuxtLink>
        <div @click="toggleSubmenu('evaluation')" class="text-white border-b border-gray-200 py-2 flex justify-between items-center cursor-pointer"        >
          <span>Evaluation</span>
          <span v-if="openSubmenu === 'evaluation'" class="text-xl">-</span>
          <span v-else class="text-xl">+</span>
        </div>
        <div v-if="openSubmenu === 'evaluation'" class="pl-4 flex flex-col">
          <NuxtLink to="/evaluation/impact"         :class="{ 'text-ourPurple': isActiveRoute('/evaluation/impact') }"
          class="text-white border-gray-200 py-1">Impact</NuxtLink>
          <NuxtLink to="/evaluation/awards" class="text-white border-gray-200 py-1"         :class="{ 'text-ourPurple': isActiveRoute('/evaluation/awards') }"
          >Awards</NuxtLink>
        </div>
        <NuxtLink to="/partners" class="text-white border-b border-gray-200 py-2">Partners</NuxtLink>
        <div @click="toggleSubmenu('contact')" class="text-white border-b border-gray-200 py-2 flex justify-between items-center cursor-pointer">
          <span>Get In Touch</span>
          <span v-if="openSubmenu === 'contact'" class="text-xl">-</span>
          <span v-else class="text-xl">+</span>
        </div>
        <div v-if="openSubmenu === 'contact'" class="pl-4 flex flex-col">
          <NuxtLink to="/contact" class="text-white border-gray-200 py-2"  :class="{ 'text-ourPurple': isActiveRoute('/contact') }">Contact Us</NuxtLink>
          <NuxtLink to="/volunteer" class="text-white border-gray-200 py-2" :class="{ 'text-ourPurple': isActiveRoute('/volunteer') }">Volunteer With Us</NuxtLink>
        </div>
        <NuxtLink to="/donate" class="text-white border-b border-gray-200 py-2" :class="{ 'text-ourPurple': isActiveRoute('/donate') }">Donate</NuxtLink>
        <NuxtLink to="/Zakah" class="text-white border-gray-200 py-2">Zakah</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      openSubmenu: null,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleSubmenu(menu) {
      this.openSubmenu = this.openSubmenu === menu ? null : menu;
    },
    handleResize() {
      if (window.innerWidth >= 768) {
        this.isMenuOpen = false; // Close menu on large screens
      }
    },
    isActiveRoute(route) {
      return this.$route.path.startsWith(route);
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>
