<!--
 * @Author: guanyaoming guanyaoming@linklogis.com
 * @Date: 2023-03-29 13:57:50
 * @LastEditors: guanyaoming guanyaoming@linklogis.com
 * @LastEditTime: 2023-03-29 17:22:49
 * @FilePath: \nuxt3-app\pages\detail\[...pages].vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <h4>
      通用路由 {{ $route.params.pages }}
    </h4>
    
    <h4>
      当前时间 {{ $route.query.reqTime }}
    </h4>  

    <h4>
      路由名称 {{ $route.meta.name }}
    </h4>

  </div>
</template>

<script setup>
  definePageMeta({
    // 同样也可以在这里定义中间件
    /**
     * middleware: function (to, from) {
     *  to.meta.name = to.meta.name || '默认路由名称'
     * }
    */
    
    // middleware: "logging",
    validate: async () => {
      return true
    }
  })
</script>