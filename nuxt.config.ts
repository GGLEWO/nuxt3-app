// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/nuxt',
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
      title: 'ym',
      htmlAttrs: {
        lang: 'zh'
      },
      meta: [
        { name: 'content-type', content: 'text/html;charset=utf-8' },
        { name: 'keywords', content: 'ym 个人博客'},
        { name: 'description', content:  'ym 个人博客'}
      ],
    }
  },
  build: { transpile: [/vant/] },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  experimental: {
    externalVue: true,
  },
  env: {
    baseURL: 'http://www.tmtool.com.cn/'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "assets/css/variable.scss";',
        }
      }
    },
    server: {
      proxy: {
        '/nuxt/api': {
          target: 'http://localhost:3001/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/nuxt/, '')
        }
      },
    }
  },
})
