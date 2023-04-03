<!--
 * @Author: guanyaoming guanyaoming@linklogis.com
 * @Date: 2022-12-28 19:02:49
 * @LastEditors: guanyaoming guanyaoming@linklogis.com
 * @LastEditTime: 2023-04-03 14:32:29
 * @FilePath: \ymtool\src\views\dailyNote\detail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="h-full overflow-y-auto rounded">
    <pre
      class="p-0"
      v-if="dailyNoteDetail.data.type !== 'MD'"
    ><code :class="dailyNoteDetail.data.type">{{ dailyNoteDetail.data.content }}</code></pre>
    <v-md-preview
      v-if="dailyNoteDetail.data.type === 'MD'"
      :text="dailyNoteDetail.data.content.replace(/\\n/g, '\n')"
    ></v-md-preview>
  </div>
</template>

<script setup>
import 'highlight.js/styles/monokai-sublime.css'
import hljs from 'highlight.js'

const dailyNoteDetail = reactive({ data: {} })
const route = useRoute()
const initDailyNoteContent = async () => {
  const par = {
    _id: route.query.id
  }
  const { code, data } = await $fetch(`/api/dailyNote/find/${par._id}`, {
    method: 'GET'
  })
  if (code === 200) {
    dailyNoteDetail.data = data
  }
}
initDailyNoteContent()

onMounted(async () => {
  setTimeout(() => {
    hljs.highlightAll()
  }, 200)
})
</script>
