import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  app: {
    baseURL: '/govuk-rounded-prototype',
    head: {
      title: 'GOV.UK rounded prototype',
      htmlAttrs: {
        class: 'govuk-template govuk-template--rebranded',
        lang: 'en-GB'
      },
      bodyAttrs: {
        class: 'govuk-template__body js-enabled govuk-frontend-supported'
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      ],
      link: [{ rel: 'icon', sizes: 'any', href: '/assets/rebrand/images/favicon.ico', type: 'image/svg+xml' }]
    }
  },
  modules: ['@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt'],
  vite: {
    resolve: {
      dedupe: [
        'vue'
      ]
    },
    plugins: [
      viteStaticCopy({
        targets: [
          {
            src: 'node_modules/govuk-frontend/dist/govuk/assets/*',
            dest: 'assets'
          }
        ]
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true
        }
      }
    }
  },
})
