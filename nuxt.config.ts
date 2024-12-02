// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-auth-utils'],
  runtimeConfig: {
    oauth: {
      github: {
        clientId: 'Ov23liWEq2ZhhpT0yLvU',
        clientSecret: '6678d4f641a945cb131288e7402fcc43d6ceb707'
      }
    },
  }
})
