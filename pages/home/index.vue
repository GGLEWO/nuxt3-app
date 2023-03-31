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
if(process.browser) {
  if (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) {
    containHeight = 'calc(100vh - 75px)';
    sessionStorage.setItem('isSafari', 1);
  } else {
    sessionStorage.setItem('isSafari', 0);
  }
}

</script>
