// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','nuxt-icon'],
  devServer: {
    port: 3333,
    host: '0.0.0.0'
  },
  runtimeConfig: {
    public: {
      googleCloudApiKey: ''
    }
  }
})
