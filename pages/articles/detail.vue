<!--
 * @Author: guanyaoming guanyaoming@linklogis.com
 * @Date: 2023-03-31 20:39:25
 * @LastEditors: guanyaoming guanyaoming@linklogis.com
 * @LastEditTime: 2023-03-31 20:42:09
 * @FilePath: \nuxt3-app\pages\articles\detail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="h-full overflow-y-auto rounded">
    <pre
      v-highlight 
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
let dailyNoteDetail = reactive({ data: {} })
const route = useRoute()
const initDailyNoteContent = async () => {
  const params = {
    _id: route.query.id,
  }

  const { code, data } = await $fetch(`/api/arcticle/find/${params['_id']}`, {
    method: 'GET',
    params
  })
  dailyNoteDetail.data = data
}
initDailyNoteContent()
</script>
