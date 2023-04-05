/*
 * @Author: guanyaoming guanyaoming@linklogis.com
 * @Date: 2023-04-03 14:54:21
 * @LastEditors: guanym 1195817329@qq.com
 * @LastEditTime: 2023-04-05 22:07:04
 * @FilePath: \nuxt3-app\plugins\naiveui.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import naiveui from 'naive-ui'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(naiveui)
})
