<template>
  <section class="flex items-center justify-center md:min-h-screen bg-white">
    <div class="text-center">
      <!-- Title with background and custom styling -->
      <h1 class="bg-ourPurple text-white97 md:px-52 px-24 py-6 inline-block text-3xl font-bold">
        Our Strategic Priorities
      </h1>

      <!-- Animated GIF image with gradually increasing height -->
      <img
        src="/about/stratgy.GIF"
        alt="Our Strategic Priorities"
        class="animated-image"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'StrategicPriorities',
};
</script>

<style scoped>
/* Custom colors */

/* Image animation */
.animated-image {
  width: 100%; /* Initial width */
  height: 0; /* Start with 0 height */
  animation: increaseHeight 5s ease-out forwards; /* Animation settings */
  animation-delay: 1s; /* Delay if you want it to start after a second */
}

/* Keyframes for height increase */
@keyframes increaseHeight {
  0% {
    height: 0;
  }

  100% {
    height: 650px; /* Final height for larger screens */
  }
}

/* Media query for mobile screens */
@media (max-width: 768px) { /* Adjust the breakpoint as necessary */
  .animated-image {
    /* Override the height animation for mobile */
    width:fit-content; /* Initial width */

    animation: increaseMobileHeight 5s ease-out forwards;
  }

  /* Keyframes for mobile height increase */
  @keyframes increaseMobileHeight {
    0% {
      height: 0;
    }

    100% {
      height: 475px; /* Final height for mobile screens */
    }
  }
}
</style>
