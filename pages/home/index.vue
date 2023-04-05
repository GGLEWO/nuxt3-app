<!--
 * @Author: guanym 1195817329@qq.com
 * @Date: 2023-04-04 15:31:29
 * @LastEditors: guanym 1195817329@qq.com
 * @LastEditTime: 2023-04-05 22:18:49
 * @FilePath: \nuxt3-app\pages\home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div
    class="flex h-screen w-screen overflow-hidden md:flex-col"
    :style="{ height: containHeight }"
  >
    <MenuPage></MenuPage>
    <client-only>
      <div class="relative flex-1 overflow-auto p-4" id="container">
        <NuxtPage v-slot="{ Component }">
          <keep-alive>
            <component
              :is="Component"
              v-if="$route.meta.keepAlive"
              :key="$route.name"
            />
          </keep-alive>
          <component
            :is="Component"
            v-if="!$route.meta.keepAlive"
            :key="$route.name"
          />
        </NuxtPage>
      </div>
    </client-only>
  </div>
</template>

<script setup>
const containHeight = '100vh'
// if (process && process.browser) {
//   if (
//     /Safari/.test(navigator.userAgent) &&
//     !/Chrome/.test(navigator.userAgent)
//   ) {
//     containHeight = 'calc(100vh - 75px)'
//     sessionStorage.setItem('isSafari', 1)
//   } else {
//     sessionStorage.setItem('isSafari', 0)
//   }
// }
</script>
