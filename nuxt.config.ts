/*
 * @Author: guanyaoming guanyaoming@linklogis.com
 * @Date: 2023-03-27 14:58:18
 * @LastEditors: guanym 1195817329@qq.com
 * @LastEditTime: 2023-04-06 21:26:34
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
  title: 'ymtool',
  description: 'ym 个人博客'
  app: {
    baseURL: '/nuxt',
  },
  build: { transpile: [/vant/] },
  modules: ['@nuxtjs/tailwindcss'],
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
        '/api': {
          target: 'http://www.tmtool.com.cn', // 目标接口
          changeOrigin: true,
        },
      },
    }
  },
})
