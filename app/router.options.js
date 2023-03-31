/*
 * @Author: guanyaoming guanyaoming@linklogis.com
 * @Date: 2023-03-31 16:22:53
 * @LastEditors: guanyaoming guanyaoming@linklogis.com
 * @LastEditTime: 2023-03-31 18:47:19
 * @FilePath: \nuxt3-app\app\router.options.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default {
  routes: (_routes) => {
    const pages = [
      {
        name: 'home',
        path: '/home',
        component: () => import('~/pages/home/index.vue'),
        children: [
          {
            path: '/articles',
            name: 'articles',
            component: () => import('~/pages/articles/index.vue'),
            meta: {
              keepAlive: true,
              menuText: '文章',
            },
          },
          {
            path: '/articleDetail',
            name: 'articleDetail',
            component: () => import('~/pages/articles/detail.vue'),
            meta: {
              keepAlive: false,
            },
          },
        ],
      },
    ]
    // _routes 是按照 nuxt 规则默认的路由，现在直接 return pages ，相当于抛弃了默认规则，按自定义路由
    return pages
  },
}
