// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-10-25',
  nitro: {
    preset: 'cloudflare-pages',
  },

  modules: [
    // dev: 500 __nuxt_vite_node__/manifest
    process.env.NODE_ENV === 'development' ? null : 'nitro-cloudflare-dev',
    '@unocss/nuxt',
  ],
  devtools: { enabled: true },
})
