<template>
  <section class="flex flex-col items-center py-12 px-6 text-center space-y-6">
    <!-- Title -->
    <h2 class="text-2xl font-extrabold uppercase tracking-[0.18em] text-ourGrey">
      Subscribe to Our Newsletter
    </h2>
    
    <!-- Description -->
    <p class="text-gray-600 text-sm md:text-base max-w-md">
      Be the first to find out about our latest updates!
    </p>
    
    <!-- Email Input & Sign Up Button -->
    <div class="flex flex-col items-center w-full max-w-4xl space-y-4 md:space-x-4 relative">
      <div class="relative w-full">
        <!-- Floating Label -->
        <label
          :class="{'text-xs -top-2 text-gray-500': isFocused || email, 'text-base text-gray-600 top-2 left-4': !isFocused && !email}"
          class="absolute transition-all duration-200"
        >
          Enter your email here
        </label>
        
        <!-- Email Input -->
        <input
          type="email"
          v-model="email"
          @focus="isFocused = true"
          @blur="isFocused = false"
          class="w-full px-4 py-2 border-b-2 border-ourOrange focus:outline-none focus:border-gray-400 text-gray-700"
        />
      </div>
      
      <!-- Sign Up Button -->
      <button
        type="button"
        class="w-full px-6 py-3 bg-OurGreen text-white97 hover:text-OurGreen hover:border-[1px] hover:border-OurGreen max-w-4xl rounded-lg hover:bg-transparent transition"
      >
        Sign Up
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: '', // Holds the input value
      isFocused: false // Tracks focus state
    };
  }
};
</script>
