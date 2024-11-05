<template>
  <section ref="theorySection" class="flex flex-col items-center justify-center pt-8 bg-white container">
    <h2 class="text-OurGreen md:text-[38px] text-[38px] text-center md:text-left font-extrabold uppercase md:mb-8 mb-2 leading-normal tracking-wider">Theory of Change</h2>
    
    <div class="flex flex-col items-center">
      <div v-for="(element, index) in theoryChangeElements" :key="index" class="card-container">
        <div :class="`rounded-lg p-6 text-center border border-gray-300 ${element.bgClass}`">
          <h3 class="text-lg font-semibold text-white97">{{ element.subtitle }}</h3>
          <ul class="list-disc list-inside text-center text-white97 mt-2 text-sm font-thin opacity-85 leading-relaxed">
            <li v-for="(item, idx) in element.list" :key="idx">{{ item }}</li>
          </ul>
        </div>

        <!-- Only show arrows between cards -->
        <div v-if="index < theoryChangeElements.length - 1" class="arrow-container">
          <svg :class="{'arrow': true, 'arrow-animate': isInView}" viewBox="0 0 24 24">
            <path d="M12 2L12 22M12 22L17 17M12 22L7 17" stroke="currentColor" stroke-width="2" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      theoryChangeElements: [
        {
          subtitle: 'Core Elements',
          list: [
            'Pre-school education',
            'Nutrition and hygiene for the kids',
            'Employment of women in local community',
            'Parent Workshops',
            'Support for alumni school children'
          ],
          bgClass: 'bg-ourOrange'
        },
        {
          subtitle: 'Behavior Change',
          list: [
            'Parents send their kids to school every day',
            'Kids stay in school and pay attention',
            'Community supports the school and become engaged in it (e.g., as teachers or cooks)'
          ],
          bgClass: 'bg-ourPurple'
        },
        {
          subtitle: 'Outcomes (Intermediate)',
          list: [
            'Child labor reduced as kids achieve education persistence',
            'Women employment increases family income',
            'Better parenting: less abuse/violence in the household'
          ],
          bgClass: 'bg-OurGreen'
        },
        {
          subtitle: 'Outcomes (Ultimate)',
          list: [
            'Kids are provided better foundation to succeed in school',
            'Better educational outcomes help kids increase their earning potential and break out of the poverty cycle'
          ],
          bgClass: 'bg-ourOrange'
        }
      ],
      isInView: false // Tracks if section is visible
    };
  },
  mounted() {
    this.observeSection();
  },
  methods: {
    observeSection() {
      const options = {
        root: null, // Use the viewport as the root
        threshold: 0.1 // Trigger when 10% of section is visible
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isInView = true; // Start animation
            observer.unobserve(entry.target); // Stop observing after it triggers
          }
        });
      }, options);
      observer.observe(this.$refs.theorySection); // Observe the section
    }
  }
};
</script>

<style scoped>
.card-container {
  position: relative;
  width: 100%;
  margin-bottom: 70px;
}

.arrow-container {
  position: absolute;
  left: calc(50% - 22px);
  margin-top: -2px;
}

.arrow {
  width: 56px;
  height: 56px;
  fill: none;
  stroke-width: 2;
  /* Only apply animation if 'arrow-animate' class is added */
}

.arrow-animate {
  animation: draw 10s forwards; /* Start animation */
}

@keyframes draw {
  from {
    stroke-dasharray: 0 100;
  }
  to {
    stroke-dasharray: 100 0;
  }
}
</style>
