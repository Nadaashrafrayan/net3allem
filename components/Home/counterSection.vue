<template>
  <section class="flex flex-col items-center justify-center text-center md:px-4 pb-8 px-14 text-grey20">
    <!-- Main Title -->
    <h2 class="text-2xl font-extrabold uppercase tracking-[0.18em] text-ourOrange">
      Net3allem has served over
    </h2>

    <!-- Counter -->
    <div class="md:text-[160px] font-[1000] text-[120px] font-sans text-ourGrey">
      {{ counter }}
    </div>

    <!-- Subtitle and Text -->
    <div class="space-y-1 -mt-4">
      <h3 class="text-2xl font-bold uppercase text-ourOrange tracking-[0.18em]">Students</h3>
      <p class="text-lg text-grey20">
        and we are committed to serve many more.
      </p>
    </div>

    <!-- Buttons for Sponsorship Options -->
    <h3 class="md:text-[30px] mt-8 py-6 text-[27px] font-extrabold leading-9 font-sans uppercase text-ourOrange tracking-[0.2em]">Sponsor a student for:</h3>

    <div class="md:space-x-4 space-x-0 space-y-2 md:space-y-0 flex md:flex-row flex-col">
      <button
        @click="sponsorOption('month')"
        class="md:px-6 px-10 py-2 bg-OurGreen text-white font-semibold rounded-[10px] hover:border-[1px] hover:text-ourGrey hover:bg-transparent"
      >
        Month (800 EGP)
      </button>
      <button
        @click="sponsorOption('year')"
        class="md:px-6 px-10 py-2 bg-OurGreen text-white font-semibold rounded-[10px] hover:border-[1px] hover:text-ourGrey hover:bg-transparent"
      >
        Year (9,600 EGP)
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      target:  8454 , // Target number for the counter
      interval: null, // Interval ID
    };
  },
  mounted() {
    this.startCounter();
  },
  methods: {
    startCounter() {
      // Counter animation using setInterval
      const increment = Math.ceil(this.target / 50); // Adjust speed based on the target
      this.interval = setInterval(() => {
        if (this.counter < this.target) {
          this.counter += increment;
        } else {
          this.counter = this.target;
          clearInterval(this.interval);
        }
      }, 50); // Adjust interval time for animation speed
    },
    sponsorOption(option) {
      if (option === 'month') {
        window.open('https://bedayango.org/donation/payment/donate/44?amount=800&name=&email=&phone=', '_blank');
      } else if (option === 'year') {
        window.open('https://bedayango.org/donation/payment/donate/44?amount=9600&name=&email=&phone=', '_blank');
      }
    },
  },
  beforeDestroy() {
    clearInterval(this.interval); // Clean up interval on component destroy
  },
};
</script>

<style scoped>
</style>
