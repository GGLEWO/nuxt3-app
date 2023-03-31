/*
 * @Author: guanyaoming guanyaoming@linklogis.com
 * @Date: 2023-03-31 11:08:49
 * @LastEditors: guanyaoming guanyaoming@linklogis.com
 * @LastEditTime: 2023-03-31 11:12:44
 * @FilePath: \nuxt3-app\tailwind.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),
    gradientColorStops: (theme) => ({
      ...theme('colors'),
      '749F82': '#749F82',
      A8E890: '#A8E890',
      B4CDE6: '#B4CDE6',
    }),
    minWidth: {},
    extend: {
      height: {
        '70vh': '70vh',
      },
      screens: {
        '2xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        xl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        lg: { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        minMd: { min: '767px' },
        // => @media (max-width: 767px) { ... }

        md: { max: '767px' },
        // => @media (max-width: 767px) { ... }

        sm: { max: '639px' },
        // => @media (max-width: 639px) { ... }
      },
      minWidth: {
        375: '375px',
      },
      minHeight: {
        60: '15rem',
        80: '20rem',
      },
      backgroundImage: {
        'articles-JS': "url('/src/assets/icon/js.svg')",
        'articles-HTML': "url('/src/assets/icon/HTML5.svg')",
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        '50%': '50%',
        40: '10rem',
        30: '7.5rem',
        20: '5rem',
        15: '3rem',
        10: '2rem',
      },
      backgroundPosition: {
        'right-.5-bottom-.5': 'right .5rem bottom .5rem',
      },
      scale: {
        103: '1.03',
      },
      colors: {
        pastel: {
          FF8AAE: '#FF8AAE',
          FFF89A: '#FFF89A',
          B1BCE6: '#B1BCE6',
          A68DAD: '#A68DAD',
          B5DEFF: '#B5DEFF',
          FCFFA6: '#FCFFA6',
          '712B75': '#712B75',
          CAB8FF: '#CAB8FF',
          '95CD41': '#95CD41',
          FFCBCB: '#FFCBCB',
          D4D925: '#D4D925',
        },
      },
      gridTemplateColumns: {
        16: 'repeat(auto-fill, 16rem)',
      },
    },
    plugins: [],
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
