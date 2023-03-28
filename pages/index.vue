<!--
 * @Author: guanyaoming guanyaoming@linklogis.com
 * @Date: 2023-03-28 14:19:03
 * @LastEditors: guanyaoming guanyaoming@linklogis.com
 * @LastEditTime: 2023-03-28 15:09:00
 * @FilePath: \nuxt3-app\pages\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div> 
    首页
    <nuxt-link :to="targetRoute">详情页</nuxt-link>
    <br>
    <nuxt-link :to="'/detail/pageDetail-ids123456789'">1号文章详情页</nuxt-link>
  </div>
</template>

<script setup>
import { ref } from "vue";
const targetRoute = ref('/detail')
</script>