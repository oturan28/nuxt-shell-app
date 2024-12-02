// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  experimental: {
    componentIslands: 'local+remote'
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-auth-utils'],
  runtimeConfig: {
    sessionPassword: process.env.NUXT_SESSION_PASSWORD,
    oauthGithubClientId: process.env.OAUTH_GITHUB_CLIENT_ID,
    oauthGithubClientSecret: process.env.NUXT_OAUTH_GITHUB_CLIENT_SECRET,
  }
})
