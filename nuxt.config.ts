export default defineNuxtConfig({ 
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  css: ["~/assets/css/app.css"],
  compatibilityDate: "2024-10-31",

  head: {
    title: "Your Project Title", 
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: "We're here to catch those who fall behind during the early years of life and lead the fight for equitable access to education." },
      { name: 'keywords', content: 'education, early years, equitable access, childhood development, social impact, Net3allem, نتعلم, مؤسسة تعليمية, مؤسسه تعليميه' }, // الكلمات مفصولة بفواصل
    ],
    link: [
      // Adding Jost font with weights 400 and 700
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Jost:wght@100;700&display=swap' },
    ],
  },
});
