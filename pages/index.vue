<!--
 * @Author: your name
 * @Date: 2022-02-17 20:04:00
 * @LastEditTime: 2023-03-31 15:56:22
 * @LastEditors: guanyaoming guanyaoming@linklogis.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ymtool\src\views\home\index.vue
-->
<template>
  <div
    class="w-screen h-screen flex overflow-hidden md:flex-col"
    :style="{ height: containHeight }"
  >
    <MenuPage></MenuPage>
    <div class="p-4 flex-1 overflow-auto relative" id="container">
      <NuxtPage v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" v-if="$route.meta.keepAlive" :key="$route.name" />
        </keep-alive>
        <component :is="Component" v-if="!$route.meta.keepAlive" :key="$route.name" />
      </NuxtPage>
    </div>
  </div>
</template>

<script setup>

let containHeight = '100vh';
if (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) {
  containHeight = 'calc(100vh - 75px)';
  sessionStorage.setItem('isSafari', 1);
} else {
  sessionStorage.setItem('isSafari', 0);
}
</script>
