<template>
  <div class="bg-white mt-16 pl-3">
    <section class="flex flex-col md:flex-row md:space-x-16 space-y-8 md:space-y-0 ">
      
      <!-- Text Section (65% Width) -->
      <div class="md:w-[60%] w-full text-left py-8 ml-20 md:pt-16 md:pl-14 md:pr-40 pr-0 space-y-4 md:space-y-4">
        <h2 class="md:text-[40px] text-2xl stroke-ourPurple stroke-1 font-[1000] pb-5  text-ourPurple uppercase leading-relaxed tracking-[0.1em]" style="font-family: 'lulo-clean-w01-one-bold', 'lulo-clean-w05-one-bold', sans-serif;">
          Zakah Calculator</h2>
        <p class="text-ourOrange text-opacity-90 font-thin text-xl md:text-lg">
          To determine your zakah, kindly input the total value of your assets owned throughout the entire year in the designated boxes below:
        </p>
        <ul class="list-disc pl-5 ml-6 text-ourOrange text-opacity-90 font-extralight text-sm md:text-lg space-y-2 leading-loose">
          <li>The Nisab for 24-carat gold stands at 85 grams, while the Nisab for silver is set at 595 grams.</li>
          <li>
            Please note: The gold price is calculated based on the following dynamic live pricing
            <a href="https://metalpriceapi.com/" class="text-[#4682B4] underline" target="_blank">
              here</a>.
          </li>
          <li>This tool is exclusively designed to assist you in calculating your Zakah. Rest assured, we do not request any personal information from you.</li>
        </ul>
      </div>

      <!-- Image Section (35% Width) -->
      <div class="md:w-[40%] w-full ">
        <img loading="lazy" src="public/zakah.webp" alt="Zakah Calculator" class="w-full  " />
      </div>

    </section>
  </div>
</template>
