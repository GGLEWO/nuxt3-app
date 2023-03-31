/*
 * @Author: guanyaoming guanyaoming@linklogis.com
 * @Date: 2023-03-31 20:51:20
 * @LastEditors: guanyaoming guanyaoming@linklogis.com
 * @LastEditTime: 2023-03-31 21:58:22
 * @FilePath: \nuxt3-app\plugins\markdown.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import VMdPreview from '@kangc/v-md-editor/lib/preview'
import '@kangc/v-md-editor/lib/style/preview.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'
import VueHighlightJS from 'vue3-highlightjs'
import 'vue3-highlightjs/styles/vs2015.css'

VMdPreview.use(githubTheme)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueHighlightJS)
  nuxtApp.vueApp.use(VMdPreview)
})
