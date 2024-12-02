// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-auth-utils'],
  $production:{
    runtimeConfig: {
      oauth: {
        github: {
          clientId: 'Ov23liNmZ7G59mRd5aq7',
          clientSecret: 'f6bd638880e4db1074a74b447d7b9b5ed38235fe',
          redirectURL: 'https://nuxt-shell-app.vercel.app/api/auth/github'
        }
      }
    }
  },
  $development: {
    runtimeConfig: {
      oauth: {
        github: {
          clientId: 'Ov23liWEq2ZhhpT0yLvU',
          clientSecret: '6678d4f641a945cb131288e7402fcc43d6ceb707',
        }
      }
    }
  },
})
