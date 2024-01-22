/*
 * @Author: guanyaoming guanyaoming@linklogis.com
 * @Date: 2023-03-30 14:20:39
 * @LastEditors: guanyaoming guanyaoming@linklogis.com
 * @LastEditTime: 2024-01-22 16:52:52
 * @FilePath: \nuxt3-app\ecosystem.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

module.exports = {
  apps: [
    {
      name: 'Nuxt3',
      exec_mode: 'cluster',
      instances: '3',
      script: './.output/server/index.mjs',
      env: {
        PORT: 8588
      }
    }
  ]
}
