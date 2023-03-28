/*
 * @Author: guanym 1195817329@qq.com
 * @Date: 2023-03-28 22:28:46
 * @LastEditors: guanym 1195817329@qq.com
 * @LastEditTime: 2023-03-28 22:30:58
 * @FilePath: \nuxt3-app\app\router.option.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default  {
  routes: (_routes) => {
    const pages = [
      {
        name: 'route-custom-my-wel',
        path: '/route/custom/my/wel',
        component: () => import('~/pages/detail/custRoute.vue'),
      },
    ];
  
    pages.forEach((page)=>{
      if( _routes.findIndex((item)=>item.path==page.path)==-1){
        _routes.push( page);
      }
    });
  
    return _routes;
  }
}