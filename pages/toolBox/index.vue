<!--
 * @Author: guanyaoming guanyaoming@linklogis.com
 * @Date: 2023-04-03 11:35:02
 * @LastEditors: guanyaoming guanyaoming@linklogis.com
 * @LastEditTime: 2023-04-03 11:40:48
 * @FilePath: \nuxt3-app\pages\toolBox\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="flex flex-wrap">
    <div
      :class="[
        'toolBox-item',
        'p-4',
        'mb-4',
        'mr-4',
        'w-60',
        'md:w-full',
        'md:mr-0',
        'min-h-60',
        'flex',
        'rounded-md',
        [
          'bg-pastel-FF8AAE',
          'bg-pastel-FFF89A',
          'bg-pastel-B1BCE6  ',
          'bg-pastel-D4D925',
          'bg-pastel-B5DEFF',
          'bg-pastel-FCFFA6',
          'bg-pastel-712B75',
          'bg-pastel-CAB8FF',
          'bg-pastel-FFCBCB',
          'bg-pastel-A68DAD',
        ][Math.floor(Math.random() * 10)],
      ]"
      :style="{
        'background-image': `url(${toolBoxItemBg[item.type] || notFound})`,
      }"
      v-for="item in toolBoxArr.data"
      :key="item.id"
    >
      <div class="content">
        <div
          class="content-item flex"
          v-for="val in item.content"
          :key="val._id"
        >
          <div
            class="title mb-2 cursor-pointer text-black hover:text-white"
            @click="handleCheckDetail(val)"
          >
            {{ val.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { fetchFindToolBox } from '@/api/toolBox';
import designBg from '~/assets/img/toolBox/designer.svg'
import settingBg from '~/assets/img/toolBox/settingBg.svg'
import bookBg from '~/assets/img/toolBox/book.svg'
import notFound from '~/assets/img/toolBox/notFound.svg'

const toolBoxItemBg = {
  'UI 样式': designBg,
  开发工具: settingBg,
  工具书籍: bookBg
}

const toolBoxArr = reactive({ data: [] })
async function initToolBoxArr () {
  const { code, data } = await $fetch('/api/toolBox/find', { method: 'POST' })
  if (code === 200) {
    toolBoxArr.data = data
  }
}
initToolBoxArr()

function handleCheckDetail (item) {
  window.open(item.address)
}
</script>
