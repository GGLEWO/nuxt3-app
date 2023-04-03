/*
 * @Author: guanyaoming guanyaoming@linklogis.com
 * @Date: 2023-04-03 14:54:21
 * @LastEditors: guanyaoming guanyaoming@linklogis.com
 * @LastEditTime: 2023-04-03 18:04:18
 * @FilePath: \nuxt3-app\plugins\naiveui.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import pkg from 'naive-ui'

const { create, NModal, NCard, NSpace, NInput, NButton, NCascader } = pkg
const naive = create({
  components: [NModal, NCard, NSpace, NInput, NButton, NCascader],
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(naive)
})
