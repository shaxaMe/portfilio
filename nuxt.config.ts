// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css:['~/assets/css/tailwind.css','~/assets/scss/main.scss'] 
})
