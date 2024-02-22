export default defineNuxtConfig({
  
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss','nuxt-icon','@nuxtjs/supabase','@nuxtjs/seo'],
  devServer: {
    port: 3333,
    host: '0.0.0.0'
  },
  runtimeConfig: {
    public: {
      googleCloudApiKey: ''
    }
  },
  supabase: {
    redirect: false
  },
  site: {
    url: 'https://pichilemucabanas.cl',
    name: 'Pichilemu Cabañas',
    description: 'Arriendo seguro de cabañas verificadas en Pichilemu',
    defaultLocale: 'es',
  },
  sitemap: {
    sources: [
      '/api/__sitemap__/urls',
    ]
  }
 
})
