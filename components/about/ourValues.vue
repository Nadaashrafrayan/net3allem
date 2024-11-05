<template>
  <section class="flex flex-col items-center justify-center py-5 bg-white container">
    <div class="text-center mb-8">
      <h2 class="text-[46px] font-extrabold text-OurGreen font-sans uppercase tracking-[0.12em] leading-relaxed">
        {{ topTitle }}
      </h2>

      <p class="mt-4 max-w-4xl  text-base  text-ourGrey  animate__animated animate__fadeInLeftBig tracking-[0.12em] leading-loose py-4">{{ text }}</p>
    </div>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 mb-6">
      <div
        v-for="(item, index) in items.slice(0, 3)"
        :key="index"
        :class="[item.bgColor, 'flex flex-col items-center justify-center p-8 border w-full h-full md:w-[254px] md:h-[195px] border-gray-300 mx-auto text-center',{ 'hover-animation': hoverIndex === index }]"
        @mouseenter="addHoverAnimation(index)"
        @mouseleave="removeHoverAnimation"
      >

        <img :src="item.icon" alt="" class="h-24 w-24" />
        <h3 class="text-base font-light text-center text-white97 opacity-85">{{ item.title }}</h3>
      </div>
    </div>
    <!-- second row  -->
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
      <div
        v-for="(item, index) in items.slice(3)"
        :key="index + 3"
        :class="[item.bgColor, 'flex flex-col items-center justify-center p-8 border w-[354px] h-full md:w-[254px] md:h-[195px] border-gray-300 mx-auto text-center', { 'hover-animation': hoverIndex === index + 3 }]"
        @mouseenter="addHoverAnimation(index + 3)"
        @mouseleave="removeHoverAnimation"

      >
        <img :src="item.icon" alt="" class="w-24 h-24" />
        <h3 class="text-base font-light text-white97 opacity-85">{{ item.title }}</h3>
      </div>
    </div>
  </section>
</template>

<script>
import settingIcon from '@/assets/images/icons/setting.svg';
import speakerIcon from '@/assets/images/icons/speaker.svg';
import awardIcon from '@/assets/images/icons/award.svg';
import helpIcon from '@/assets/images/icons/help.svg';
import secureIcon from '@/assets/images/icons/secure.svg';

export default {
  data() {
    return {
      topTitle: "Our Values",
      text: "We responsibly serve the community to build a better world for children, working effectively with relevant stakeholders to achieve common goals. Remaining true to our mandate in supporting equitable access to quality education, we ensure our core values are embedded in everything we do.",
      items: [
        { title: "Impact Driven", icon: settingIcon, bgColor: "bg-ourPurple" },
        { title: "Empowerment, Voice and Accountability", icon: speakerIcon, bgColor: "bg-OurGreen"},
        { title: "Quality and Collaboration", icon: awardIcon, bgColor: "bg-ourOrange" },
        { title: "Psychological Safety", icon: helpIcon, bgColor: "bg-ourOrange" },
        { title: "Security and Safety", icon: secureIcon, bgColor: "bg-ourPurple" },
      ],
      hoverIndex: null,  // Index of the currently hovered item
    };
  },
  methods: {
    addHoverAnimation(index) {
      this.hoverIndex = index;  // Set the hover index to the current item
    },
    removeHoverAnimation() {
      this.hoverIndex = null;  // Reset the hover index
    }
  },
};
</script>

<style scoped>
.hover-animation {
  animation: swing 4s ease-in-out; /* Animation duration and easing */
}

@keyframes swing {
  0% { transform: rotate(0deg); }
  20% { transform: rotate(15deg); }
  40% { transform: rotate(-10deg); }
  60% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
}
</style>
