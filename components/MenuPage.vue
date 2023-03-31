<!--
 * @Author: your name
 * @Date: 2022-02-20 15:09:20
 * @LastEditTime: 2023-03-31 18:00:31
 * @LastEditors: guanyaoming guanyaoming@linklogis.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \ymtool\src\views\home\components\MenuPage.vue
-->
<template>
  <div
    class="flex w-4/12 flex-col bg-gray-50 md:w-full minMd:h-full"
    v-show="isShowMenuPage"
  >
    <div class="flex h-auto w-full items-center px-6 pt-4">
      <img
        id="home-icon"
        src="~/assets/img/icon/favicon.svg"
        class="h-6 w-6"
        @click="handleSwitch"
      />
      <div class="flex h-full flex-1 flex-wrap items-center">
        <div
          v-for="item in menuArr"
          :key="item.name"
          class="ml-4 cursor-pointer text-base font-bold"
          @click="handleRouteMenu(item)"
        >
          {{ item.meta.menuText }}
        </div>
      </div>
    </div>
    <div
      class="flex w-full flex-1 items-center justify-center px-4 md:mt-4 md:justify-start"
    >
      <div class="font-sans text-lg font-medium tracking-wide">
        <span>Ym</span>
        <img src="~/assets/img/icon/flower.svg" class="inline-block h-5 w-5" />
      </div>
    </div>
  </div>
</template>

<script setup>
const $router = useRouter()
const menuRouteFunc = () => {
  const isShowMenuPage = ref(true)
  // const homeRoutes = []
  const homeRoutes = $router.options.routes.filter((e) => e.name === 'home')
  console.log($router.options,homeRoutes, 'homeRoutes')
  const homeChildRoutes = (homeRoutes.length && homeRoutes[0].children) || []
  const menuArr = homeChildRoutes.filter((e) => e.meta && e.meta.menuText)
  const handleRouteMenu = (item) => {
    $router.push({
      name: item.name
    })
  }

  const handleSwitch = () => {
    isShowMenuPage.value = false
  }

  return { menuArr, handleRouteMenu, isShowMenuPage, handleSwitch }
}
const { menuArr, handleRouteMenu, isShowMenuPage, handleSwitch } =
  menuRouteFunc()
</script>
