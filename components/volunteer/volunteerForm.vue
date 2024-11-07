<template>
  <div class="bg-white">
    <div class="flex flex-col items-center justify-center md:min-h-screen px-8 md:max-w-2xl w-full py-10 md:mx-auto">
      <form @submit.prevent="submitForm" class="md:space-y-4 space-y-3 text-ourGrey md:w-[540px] w-full md:p-10 p-5 bg-ourOrange">
        <!-- Name Field -->
        <div>
          <label for="name" class="block text-white97 font-thin text-xs mb-1">Name*</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            required
            placeholder="Your Name"
            class="w-full border border-gray-300 p-3   focus:outline-none focus:border-white97"
          />
        </div>

        <!-- Email Field -->
        <div>
          <label for="email" class="block text-white97 text-xs font-thin mb-1">Email*</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            placeholder="Your Email"
            class="w-full border border-gray-300 p-3   focus:outline-none focus:border-white97"
          />
        </div>

        <!-- Code and Phone Field -->
        <div class="flex space-x-2">
          <div class="w-1/3">
            <label for="code" class="block text-white97 text-xs font-thin mb-1">Code*</label>
            <div class="relative">
              <button
                @click="toggleDropdown"
                type="button"
                class="w-full border border-gray-300 p-3   bg-gray-50 text-white97 focus:outline-none flex justify-between items-center"
              >
                {{ selectedCode }} <span class="ml-2">▼</span>
              </button>
              <ul v-show="isDropdownOpen" class="absolute w-full bg-white border border-gray-300   max-h-40 overflow-y-auto mt-1 z-10">
                <li
                  v-for="country in countryCodes"
                  :key="country.iso2"
                  @click="selectCode(country.dialCode)"
                  class="cursor-pointer p-2 hover:bg-gray-200 text-yellow-500 uppercase"
                >
                  {{ country.iso2 }} {{ country.dialCode }}
                </li>
              </ul>
            </div>
          </div>
          <div class="w-2/3">
            <label for="phone" class="block text-white97 text-xs font-thin mb-1">Phone*</label>
            <input
              type="tel"
              id="phone"
              v-model="form.phone"
              required
              placeholder="Phone Number"
              class="w-full border border-gray-300 p-3   focus:outline-none focus:border-white97"
            />
          </div>
        </div>

        <!-- Experience Field -->
        <div>
          <label for="experience" class="block text-white97 text-xs font-thin mb-1">Experience*</label>
          <input
            type="text"
            id="experience"
            v-model="form.experience"
            required
            placeholder="Your Experience"
            class="w-full border border-gray-300 p-3   focus:outline-none focus:border-white97"
          />
        </div>

        <!-- Subjects Interested Field -->
        <div>
          <label for="subjects" class="block text-white97 text-xs font-thin mb-1">Subjects Interested in Teaching*</label>
          <input
            type="text"
            id="subjects"
            v-model="form.subjects"
            required
            placeholder="Subjects"
            class="w-full border border-gray-300 p-3   focus:outline-none focus:border-white97"
          />
        </div>

        <!-- Volunteering Day and Time Preference -->
        <div>
          <label for="volunteerTime" class="block text-white97 text-xs font-thin mb-1">Volunteering Day and Time Preference*</label>
          <input
            type="text"
            id="volunteerTime"
            v-model="form.volunteerTime"
            required
            placeholder="Preferred Day and Time"
            class="w-full border border-gray-300 p-3   focus:outline-none focus:border-white97"
          />
        </div>

        <!-- Hours a Week Field -->
        <div>
          <label for="hours" class="block text-white97 text-xs font-thin mb-1">Hours a Week*</label>
          <input
            type="number"
            id="hours"
            v-model="form.hours"
            required
            placeholder="Hours per Week"
            class="w-full border border-gray-300 p-3   focus:outline-none focus:border-white97"
          />
        </div>

        <!-- Submit Button -->
        <div class="text-left">
          <button
            type="submit"
            class="text-white py-2 px-14 text-opacity-80 bg-OurGreen hover:bg-white hover:text-gray-500 border border-white hover:border-gray-500 focus:outline-none mt-5"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { allCountries } from 'country-telephone-data'

// Define props for dynamic title and styling
const props = defineProps({
  title: {
    type: String,
    default: 'Volunteer Form', // Default title
  },
  containerClasses: {
    type: String,
    default: 'bg-white shadow-lg rounded-lg p-8 w-full', // Default container styles
  },
  titleClasses: {
    type: String,
    default: 'text-2xl font-bold mb-6 text-center', // Default title styles
  }
})

// List of countries and their dial codes for the dropdown
const countryCodes = allCountries.map((country) => ({
  name: country.name,
  dialCode: `+${country.dialCode}`,
  iso2: country.iso2
}))

// Reactive form data
const form = ref({
  name: '',
  email: '',
  selectedCode: '+20',  // Default to country code +20 (Egypt)
  phone: '',
  experience: '',
  subjects: '',
  volunteerTime: '',
  hours: ''
})

// Dropdown state
const isDropdownOpen = ref(false)
const selectedCode = ref(form.value.selectedCode)

// Form submission handler
const submitForm = () => {
  console.log("Form Submitted:", form.value)
  // You can send the form data to an API here or perform further processing
}

// Toggle dropdown visibility
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

// Select country code from dropdown
const selectCode = (code) => {
  selectedCode.value = code
  form.value.selectedCode = code
  isDropdownOpen.value = false
}
</script>

<style scoped>
/* Custom styles can be added here */
</style>
