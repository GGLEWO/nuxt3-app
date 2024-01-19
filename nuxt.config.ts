/*
 * @Author: guanyaoming guanyaoming@linklogis.com
 * @Date: 2023-03-27 14:58:18
 * @LastEditors: guanyaoming guanyaoming@linklogis.com
 * @LastEditTime: 2023-04-10 11:10:33
 * @FilePath: \nuxt3-app\nuxt.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: guanyaoming guanyaoming@linklogis.com
 * @Date: 2023-03-27 14:58:18
 * @LastEditors: guanyaoming guanyaoming@linklogis.com
 * @LastEditTime: 2023-04-03 17:44:54
 * @FilePath: \nuxt3-app\nuxt.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
          target: 'http://www.tmtool.com.cn', // 目标接口
          changeOrigin: true,
        },
      },
    }
  },
})
