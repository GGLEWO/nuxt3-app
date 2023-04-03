/*
 * @Author: guanyaoming guanyaoming@linklogis.com
 * @Date: 2023-03-31 16:22:53
 * @LastEditors: guanyaoming guanyaoming@linklogis.com
 * @LastEditTime: 2023-04-03 15:01:54
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
        redirect: '/articles',
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
          {
            path: '/blogPost',
            name: 'blogPost',
            component: () => import('~/pages/blogPost/index.vue'),
            meta: {
              keepAlive: false,
              menuText: '博客文章',
            },
          },
          {
            path: '/toolBox',
            name: 'toolBox',
            component: () => import('~/pages/toolBox/index.vue'),
            meta: {
              keepAlive: false,
              menuText: '工具箱',
            },
          },
          {
            path: '/dailyNote',
            name: 'dailyNote',
            component: () => import('~/pages/dailyNote/index.vue'),
            meta: {
              keepAlive: true,
              menuText: '日常笔记',
            },
          },
          {
            path: '/dailyNoteDetail',
            name: 'dailyNoteDetail',
            component: () => import('~/pages/dailyNote/detail.vue'),
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
