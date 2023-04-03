<!--
 * @Author: guanyaoming guanyaoming@linklogis.com
 * @Date: 2023-04-03 15:00:08
 * @LastEditors: guanyaoming guanyaoming@linklogis.com
 * @LastEditTime: 2023-04-03 17:06:04
 * @FilePath: \nuxt3-app\pages\blogPost\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <n-cascader
      v-model:value="optionsValue"
      class="w-48"
      expand-trigger="click"
      label-field="title"
      value-field="id"
      check-strategy="child"
      :show-path="false"
      :filterable="true"
      :options="options.data"
      @update:value="handleFetchDetail"
    />
    <v-md-preview :text="blogContent.data.replace(/\\n/g, '\n')"></v-md-preview>
  </div>
</template>

<script setup>
import { flattenToTree } from '~/utils/index'

const blogPostMoudle = () => {
  const optionsValue = ref(null)
  const blogContent = reactive({ data: '' })
  const options = reactive({ data: [] })
  const handleFetchDetail = async (id) => {
    const { code, data } = await $fetch(`/api/blogPost/find/${id}`, {
      method: 'get'
    })
    if (code === 200) {
      blogContent.data = data.content
    }
  }

  const initBlogPostOption = async () => {
    const { code, data } = await $fetch('/api/blogPost/find', {
      method: 'POST'
    })
    if (code === 200) {
      options.data = flattenToTree(data)

      // 默认渲染第一篇文章
      optionsValue.value = '6405bd4cd56bacf5605b8996'
      handleFetchDetail(optionsValue.value)
    }
  }

  return {
    optionsValue,
    options,
    blogContent,
    handleFetchDetail,
    initBlogPostOption
  }
}

const {
  optionsValue,
  options,
  blogContent,
  handleFetchDetail,
  initBlogPostOption
} = blogPostMoudle()

initBlogPostOption()
</script>
