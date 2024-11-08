<template>
  <div>
    <main class="min-h-screen">
      <div>
        <video
      src="/banners/vidbanner.mov"
      autoplay
      loop
      muted
      playsinline
      class="w-full h-full object-cover"
    ></video>
      </div> 
      <!-- list -->
      <section class="flex flex-col md:flex-row items-center justify-center md:py-20 py-10 px-30 text-grey20 text-lg font-light leading-relaxed  justify-items-center">
        <div class="w-full md:w-1/2 md:pl-56 md:pr-20 md:mt-20 px-5">
          <ul class="list-disc list-outside marker:text-black pl-8"> <!-- Added padding-left -->
            <li class="py-1 px-2">
              Net3allem, Arabic for "To Learn Collectively", is a project under the umbrella of Bedaya for Charitable Activities.
            </li>
            <li class="py-1 px-2">
              The project aims to eradicate poverty by employing women and investing in high-quality pre-school Montessori education in the communities we serve and beyond.
            </li>
            <li class="py-1 px-2" >
              This is achieved through collaborations with various governmental and non-governmental stakeholders, in partnership with The Ministry of Social Solidarity.
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/2 mt-10 md:mt-0 flex md:justify-start justify-center text-center mr-14 ">
          <img src="public/banners/net3allem.png" alt="Net3allem Logo" class=" w-9/12 h-auto object-contain" />
        </div>
      </section>
      <!-- reality -->
      <section class="md:pt-28 pt-2 pb-16 md:px-[16%] px-8 text-grey20 text-lg text-center leading-loose ">
        <h2 class="text-[40px] font-[1000] tracking-[0.2em] font-sans uppercase mb-2 text-ourPurple ">Our Reality</h2>
        <div class="mb-10">
          <p class="text-base font-light">Research shows that 90% of brain development happens before the age of 5.</p>
        </div>
        <div class="mb-10">
          <p class="text-base font-light">The learning foundations established during those early years of life are built to last.</p>
        </div>
        <div class="mb-6">
          <h3 class="text-lg text-grey40 font-[500] mx-auto">Lack of quality early childhood education denies children the chance to reach their full potential.
         It limits their future and reduces their chances of lifelong health, employment, and earning potential later in life.</h3>
        </div>
      </section>
      
      <!-- houses section  -->
      <section class="flex flex-col items-center py-20">
        <!-- Image at the top -->
        <img src="public/banners/houses.webp" alt="Houses" class="w-full md:h-auto h-[209px] object-cover animate__animated  animate__fadeInUp animate__slow animate__delay-0.5s " />
      
        <!-- Text Box -->
        <div class=" w-full bg-opacity-90 bg-OurGreen md:py-10  md:px-[27%] p-10 text-center">
          <blockquote class="md:text-[20px] text-[14px] contrast-[2.999] font-[400] italic leading-relaxed text-white97 ">
            <p>
              "What is one of the best ways a country can boost shared prosperity, promote inclusive economic growth, expand equitable opportunity, and end extreme poverty? The answer is simple: Invest in early childhood development."
            </p>
            <footer class="mt-4 font-extralight md:text-[18px] text[13px] text-white90 opacity-80 ">– Early Childhood Development, UNICEF</footer>
          </blockquote>
        </div>
      </section>
      <counterSection></counterSection>
      <ourSol></ourSol>
      <singUp></singUp>
    </main>
  </div>
</template>
<script>
import 'animate.css/animate.min.css';


</script>