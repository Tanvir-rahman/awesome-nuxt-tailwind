import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  tailwindcss: {
    viewer: false,
    config: {
      darkMode: "class",
      content: [
        "./assets/**/*.css",
        "./components/*.{vue,js}",
        "./components/**/*.{vue,js}",
        "./pages/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        // "./*.{vue,js,ts}",
        // "./nuxt.config.{js,ts}",
      ],
    },
  },
  buildModules: [
    "@nuxtjs/tailwindcss",
  ],
})
