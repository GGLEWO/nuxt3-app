<!--
 * @Author: guanyaoming guanyaoming@linklogis.com
 * @Date: 2023-03-27 15:12:05
 * @LastEditors: guanyaoming guanyaoming@linklogis.com
 * @LastEditTime: 2023-03-28 17:43:02
 * @FilePath: \nuxt3-app\layout\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>详情页</div>
  <p>父级传入的参数值：{{ ptype }}</p>
  <p>
    {{ id }}
  </p>
</template>

<script setup>
import { ref } from "vue";
const route = useRoute();
const id = ref(route.params.id);
const { ptype } = defineProps(["ptype"]);
// const type = ref(route.params.type);
</script>
