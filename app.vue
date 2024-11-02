<!-- pages/index.vue -->
<template>
  <Header />
  <NuxtPage class="bg-grey8 text-white"/>
</template>

<script setup>
useHead({
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Noto+Serif+Oriya:wght@400..700&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap",
    },
  ],
});
</script>
