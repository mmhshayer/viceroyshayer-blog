export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-ssr/
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Blog',
    titleTemplate: '%s | viceroyshayer | Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Personal Website & Blog of - Mohammad Mustakim Hassan',
      },
      // Twitter
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@viceroyshayer' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://viceroyshayer.github.io/blog/',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'viceroyshayer.io',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Personal Website & Blog of - Mohammad Mustakim Hassan',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://viceroyshayer.github.io/blog/icon.png',
      },

      // Open Graph
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '%s - viceroyshayer.io',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://viceroyshayer.github.io/blog/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'viceroyshayer.io',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Personal Website & Blog of - Mohammad Mustakim Hassan',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://viceroyshayer.github.io/blog/icon.png',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://viceroyshayer.github.io/blog/icon.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'viceroyshayer.io',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://pwa.nuxtjs.org/setup
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/nicolasbeauvais/
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      description: 'Personal Website & Blog',
      icon: true,
    },
    meta: [
      { name: 'Blog' },
      { author: 'Mohammad Mustakim Hassan' },
      { theme_color: 'green' },
    ],
  },
}
