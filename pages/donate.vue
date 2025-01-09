<template>
  <section class="flex flex-col items-center justify-center  bg-white px-6 text-center space-y-10 pt-10">
    <!-- Title -->
    <h2 class="md:text-[56px] text-4xl font-[1000] text-OurGreen   uppercase tracking-[0.2em]" style="font-family:'lulo-clean-w05-one-bold', sans-serif;">
Donate    </h2>
<p class="max-w-[51rem]  text-gray-400 text-lg font-thin   leading-relaxed tracking-wide ">
  Thank you for choosing to donate.<span class="text-xl">NET3ALLEM</span>  is a project under Bedaya <span class="text-xl">NGO</span> and is registered at the Ministry of Social Solidarity under Registration Number 2289. ​With your support we will be able to make more dreams come true to achieve our mission of providing early childhood education and beyond through women employment. The full donation amount will go directly towards education and initiatives tailored to the needs of the community we serve.
</p>
<a href="https://bedayango.org/donation/payment/donate/44?number=200" target="_blank">
  <button
    class="md:px-12 px-10 py-3 bg-ourOrange text-white97 font-thin tracking-wide hover:border-[1px] hover:text-ourGrey hover:bg-transparent"
  >
    Donate
  </button>
</a>

</section>
    <!-- houses section  -->
    <section class="flex md:flex-row flex-col items-center py-12">
      <!-- Image at the top -->
    
      <!-- Text Box -->
      <div class=" md:w-1/2 flex items-center bg-ourPurple md:h-[468px] h-[209px] md:px-[10%] p-10   text-left italic">
        <blockquote class="md:text-4xl text-[16px] font-[500] max-w-md  text-white97 animate__zoomIn animate__animated animate__slow">
          <p class="leading-relaxed">

            “If we change the beginning of the story, we change the whole story”           </p>
          <footer class="mt-4 font-extralight md:text-[18px] text[13px] text-white90 opacity-80 ">– Nurturing Care Framework, UNICEF and WHO​

          </footer>
        </blockquote>
      </div>
      <img loading="lazy" src="public/donate.webp" alt="Houses" class="md:w-1/2 md:h-[468px] h-[209px] object-cover w-full    " />

    </section>
    <FormDonate 
    title="For any inquires please contact us." 
    titleClasses="md:tracking-[0.19em] tracking-[0.13em] md:text-[30px] text-xl text-center text-white97  font-extrabold" 
  /> 

</template>


