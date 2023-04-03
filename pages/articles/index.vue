<template>
  <div class="flex flex-col">
    <div class="flex items-center text-xl font-bold">
      <p>文章列表</p>
      <img
        src="~/assets/img/icon/rank.svg"
        class="h-5 w-5 cursor-pointer"
        @click="handleRankByType"
      />
    </div>

    <div
      class="list-wrap inline-grid grid-cols-16 justify-center gap-x-14 gap-y-6 px-4 pt-4 md:hidden"
    >
      <div
        :class="[
          'flex',
          'list-items',
          'cursor-poniter',
          'w-72',
          'h-16',
          'rounded-xl',
          'cursor-pointer',
          'hover:scale-103',
          'ease-in-out',
          'overflow-auto',
          'border-2',
          'border-solid',
          'md:h-auto',
          'md:min-h-24',
          'md:bg-10',
          'md:bg-none',
        ]"
        v-for="(item, index) in passager.data"
        @click="handleCheckDetail(item)"
        :key="index"
      >
        <div
          class="h-full w-1/4 bg-50% bg-center bg-no-repeat"
          :style="{
            'background-image': `url(${
              item.type === 'JS' ? JSPic : item.type === 'MD' ? MDPic : HTMLPic
            })`,
            'background-color': `${
              item.type === 'JS'
                ? '#1eda96'
                : item.type === 'MD'
                ? '#1296db'
                : '#fa6348'
            }`,
          }"
        ></div>
        <div class="flex flex-col justify-evenly px-2">
          <div class="text-sm">
            {{ item.name }}
          </div>
          <div class="flex flex-wrap">
            <span
              @click.stop="handleFilterByTag(tags)"
              v-for="(tags, index1) in item.tag"
              :key="index1"
              :class="[
                'text-xs',
                'text-slate-400',
                'mr-2',
                'hover:text-slate-800',
              ]"
              >{{ tags }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <ArticlesArticleTable
      :passager="passagerTable"
      @handleCheckDetail="handleCheckDetail"
      @handleFilterByTag="handleFilterByTag"
    ></ArticlesArticleTable>
  </div>
</template>

<script setup>
import JSPic from '~/assets/img/icon/JS.svg'
import MDPic from '~/assets/img/icon/MD.svg'
import HTMLPic from '~/assets/img/icon/HTML.svg'

const bg = {
  HTML: '#cb828a85',
  JS: '#c9cb8285',
  MD: '#57a64a85'
}

const passager = reactive({
  data: []
})
const rankASC = ref(-1)
const passagerTable = computed(() => [
  {
    name: '文章标题',
    tag: ['标签'],
    type: '文章类型',
    id: 0
  },
  ...passager.data
])

const handleFilterByTag = async (item) => {
  if(passager.data.every(e => e.tag.includes(item))){
    initArticleList()
    return true;
  }
  const { code, data } = await $fetch('/api/arcticle/find', {
    method: 'POST',
    body: {
      where: { tag: { $all: [item] } }
    }
  })
  passager.data = data

}
const initArticleList = async () => {
  const { code, data } = await $fetch('/api/arcticle/find', { method: 'POST' })
  passager.data = data
}
const handleCheckDetail = async (item) => {
  await navigateTo({
    name: 'articleDetail',
    query: {
      id: item.id
    },
    params: item
  });
}
const handleRankByType = async () => {
  const { code, data } = await $fetch('/api/arcticle/find', {
    method: 'POST',
    body: {
      sort: { type: rankASC.value }
    }
  })
  passager.data = data
  rankASC.value = rankASC.value === 1 ? -1 : 1
}

initArticleList()
</script>
