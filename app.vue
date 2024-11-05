<!-- pages/index.vue -->
<template>
  <Header />
  <NuxtPage class=""/>
  <Footerr/>
</template>

<script setup>

import Footerr from './components/layout/footerr.vue';
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
