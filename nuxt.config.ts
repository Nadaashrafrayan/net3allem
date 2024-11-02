// https://nuxt.com/docs/api/configuration/nuxt-config
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
});
