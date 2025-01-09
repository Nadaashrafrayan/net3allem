<template>  
  <div class="bg-white pt-16 md:px-48 px-3 min-h-[90vh]">
    <h2 
      class="md:text-3xl text-2xl font-[1000] text-OurGreen font-sans uppercase leading-loose tracking-[0.16em]" 
      style="font-family:'lulo-clean-w05-one-bold', sans-serif;"
    >
      Calculate your zakah
    </h2>
    <hr class="w-[15%] my-5 mx-1 border-ourOrange border-[0.5px]">

    <div class="flex flex-col md:flex-row">
      <!-- Form Section -->
      <div class="md:w-1/2 p-4">
        <!-- Zakah on Money Input -->
        <div>
          <label class="block text-ourOrange font-thin text-opacity-85">Zakah on Money in EGP</label>
          <input
            v-model="zakahData.money"
            @input="validateInput('money')"
            type="number"
            placeholder="Cash at home and bank accounts"
            class="w-full border-2 px-2 py-[0.5px] focus:outline-none focus:border-ourGrey"
          />
        </div>

        <!-- Zakah on Profits Input -->
        <div>
          <label class="block text-ourOrange font-thin text-opacity-85">Zakah on Profits in EGP</label>
          <input
            v-model="zakahData.profits"
            @input="validateInput('profits')"
            type="number"
            placeholder="Including bonds and market shares"
            class="w-full border-2 px-2 py-[0.5px] focus:outline-none focus:border-ourGrey"
          />
        </div>

        <!-- Zakah on Gold Input -->
        <div>
          <label class="block text-ourOrange font-thin text-opacity-85">Zakah on Gold (if more than 85g)</label>
          <input
            v-model="zakahData.gold"
            @input="validateInput('gold')"
            type="number"
            placeholder="Write the amount of gold you own in grams"
            class="w-full border-2 px-2 py-[0.5px] focus:outline-none focus:border-ourGrey"
          />
        </div>

        <!-- Zakah on Properties Input -->
        <div>
          <label class="block text-ourOrange font-thin text-opacity-85">Zakah on Properties in EGP</label>
          <input
            v-model="zakahData.properties"
            @input="validateInput('properties')"
            type="number"
            placeholder="Annual rent after deducting taxes and maintenance"
            class="w-full border px-2 py-[0.5px] focus:outline-none focus:border-gray-400"
          />
        </div>

        <!-- Calculate Button -->
        <button
          @click="calculateZakah"
          class="bg-OurGreen text-white97 font-thin hover:bg-white hover:border hover:border-gray-600 hover:text-gray-600 py-[0.5px] mt-12 text-opacity-90 w-full"
        >
          Calculate
        </button>
      </div>

      <!-- Result Section -->
      <div class="md:w-1/2 p-4">
        <h3 class="text-base font-medium mb-1 text-ourPurple">Total Zakah Value</h3>

        <div class="border p-4 bg-ourPurple mb-1">
          <p class="text-sm text-white">Zakah on Money in EGP: {{ formatNumber(calculatedZakah.money) }}</p>
          <hr class="w-[70%] my-3 border-white border">

          <p class="text-sm text-white">Zakah on Profits in EGP: {{ formatNumber(calculatedZakah.profits) }}</p>
          <hr class="w-[70%] my-3 border-white border">

          <p class="text-sm text-white">Zakah on Gold in EGP: {{ formatNumber(calculatedZakah.gold) }}</p>
          <hr class="w-[70%] my-3 border-white border">

          <p class="text-sm text-white">Zakah on Properties in EGP: {{ formatNumber(calculatedZakah.properties) }}</p>
        </div>

        <div class="font-bold text-center text-base text-ourPurple">
          Total Zakah in EGP: {{ formatNumber(totalZakah) }}
          <hr class="w-[70%] my-3 mx-auto border-ourPurple border">
        </div>

        <!-- Donate Button -->
        <button
          @click="donate"
          class="bg-OurGreen text-white97 font-thin hover:bg-white hover:border hover:border-ourGrey hover:text-ourGrey py-[0.5px] mt-12 text-opacity-90 w-full"
        >
          Donate
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zakahData: {
        money: 0,
        profits: 0,
        gold: 0, // in grams
        properties: 0, // net annual rent income
      },
      calculatedZakah: {
        money: 0,
        profits: 0,
        gold: 0,
        properties: 0,
      },
    };
  },
  computed: {
    totalZakah() {
      return (
        this.calculatedZakah.money +
        this.calculatedZakah.profits +
        this.calculatedZakah.gold +
        this.calculatedZakah.properties
      );
    },
  },
  methods: {
    calculateZakah() {
      const zakahRateMoneyAndProfits = 0.025; // 2.5% zakah rate for money and profits
      const goldZakahPerGram = 81.2931; // Correct rate per gram of gold
      const zakahRateProperties = 0.10; // 10% rate for properties

      // Calculate Zakah for money and profits
      this.calculatedZakah.money = this.zakahData.money * zakahRateMoneyAndProfits;
      this.calculatedZakah.profits = this.zakahData.profits * zakahRateMoneyAndProfits;

      // Calculate Zakah on Gold if above nisab (85g)
      this.calculatedZakah.gold = this.zakahData.gold > 85
        ? this.zakahData.gold * goldZakahPerGram
        : 0;

      // Calculate Zakah on Properties
      this.calculatedZakah.properties = this.zakahData.properties * zakahRateProperties;

      // Round the results to 2 decimal places for display purposes
      this.calculatedZakah.money = parseFloat(this.calculatedZakah.money.toFixed(2));
      this.calculatedZakah.profits = parseFloat(this.calculatedZakah.profits.toFixed(2));
      this.calculatedZakah.gold = parseFloat(this.calculatedZakah.gold.toFixed(2));
      this.calculatedZakah.properties = parseFloat(this.calculatedZakah.properties.toFixed(2));
    },
    formatNumber(value) {
      return value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    },
    validateInput(field) {
      if (this.zakahData[field] < 0) {
        this.zakahData[field] = 0; // Reset negative values to 0
      }
    },
    donate() {
      const donationAmount = this.totalZakah.toFixed(2);
      const donationLink = `https://bedayango.org/donation/payment/donate/44?amount=${donationAmount}&name=&email=&phone=`;
      window.location.href = donationLink;
    },
  },
};
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
