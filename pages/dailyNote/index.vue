<!--
 * @Author: guanyaoming guanyaoming@linklogis.com
 * @Date: 2022-12-22 14:04:47
 * @LastEditors: guanyaoming guanyaoming@linklogis.com
 * @LastEditTime: 2023-04-03 14:01:59
 * @FilePath: \ymtool\src\views\dailyNote\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="flex">
    <van-calendar
      :show-title="false"
      :poppable="false"
      :show-confirm="false"
      :min-date="minDate"
      :max-date="maxDate"
      :formatter="formatter"
      :default-date="null"
      :lazy-render="false"
      ref="calendar"
      class="minMd:hidden w-46 rounded-md border-2 border-slate-300 shadow-md"
      @select="handleSelectDate"
    />
    <div class="note-box relative min-h-[calc(100vh-32px)] w-full md:hidden">
      <div v-for="(item, index) in dailyNoteListInObj" :key="index">
        <div class="mb-20">
          <div class="z-0 mb-6 text-8xl font-extrabold text-gray-200">
            {{ item[0] }}
          </div>
          <div
            class="mb-3 flex w-96 cursor-pointer justify-between"
            v-for="list in item[1]"
            :key="list.id"
            @click.ctrl="addDailyNoteList"
            @click.exact="handleRouterDetail(list)"
          >
            <div class="font-sans text-lg text-gray-500 hover:text-gray-700">
              {{ list.title }}
            </div>
            <div class="text-gray-400">{{ list.time }}</div>
          </div>
        </div>
      </div>
    </div>
    <n-modal v-model:show="isShowAddModal">
      <n-card
        style="width: 600px"
        title="增加日记"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
      >
        <n-space vertical>
          <n-input
            v-model:value="modelForm.time"
            type="text"
            placeholder="请填写日期"
          />
          <n-input
            v-model:value="modelForm.title"
            type="text"
            placeholder="请填写标题"
          />
          <n-input
            v-model:value="modelForm.content"
            type="textarea"
            placeholder="请填写内容"
          />
          <n-input
            v-model:value="modelForm.type"
            type="text"
            placeholder="请填写文件类型"
          />
          <n-button
            type="success"
            ghost
            size="small"
            :loading="addLoading"
            @click="handleSubmit"
            >提交</n-button
          >
        </n-space>
      </n-card>
    </n-modal>
  </div>
</template>

<script setup>
import { timeFormat, groupInObj } from '~/utils/index'

/**
 * @description: 日历新增改查
 * @return {*}
 */
const dailyNoteListFunc = () => {
  const dailyNoteList = reactive({ data: [] })
  const initDailyNoteList = async () => {
    const { code, data } = await $fetch('/api/dailyNote/find', {
      method: 'POST'
    })
    if (code === 200) {
      dailyNoteList.data = data
    }
  }

  const dailyNoteListInObj = computed(() => {
    return Object.entries(groupInObj('year', dailyNoteList.data))
  })

  const modelForm = reactive({
    time: '',
    type: 'MD',
    content: '',
    title: ''
  })
  const isShowAddModal = ref(false)
  const addLoading = ref(false)
  const addDailyNoteList = () => {
    isShowAddModal.value = true
  }
  const handleSubmit = async () => {
    addLoading.value = true
    $fetch('/api/dailyNote/find', {
      method: 'POST',
      body: {
        time: modelForm.time,
        content: modelForm.content,
        type: modelForm.type,
        year: modelForm.time.split('-')[0],
        title: modelForm.title
      }
    })
      .then(() => {
        isShowAddModal.value = false
        initDailyNoteList()
        modelForm.content = ''
        modelForm.time = ''
        modelForm.title = ''
      })
      .finally(() => {
        addLoading.value = false
      })
  }

  return {
    dailyNoteList,
    initDailyNoteList,
    isShowAddModal,
    addDailyNoteList,
    modelForm,
    addLoading,
    handleSubmit,
    dailyNoteListInObj
  }
}

const {
  dailyNoteList,
  initDailyNoteList,
  addDailyNoteList,
  isShowAddModal,
  modelForm,
  addLoading,
  handleSubmit,
  dailyNoteListInObj
} = dailyNoteListFunc()
initDailyNoteList()

/**
 * @description: 日历配置
 * @return {*}
 */
const calendarConfigFunc = () => {
  const minDate = new Date(2022, 10, 1)
  const maxDate = new Date(2024, 0, 31)
  const formatter = computed(() => {
    return (day) => {
      const dateFormat = timeFormat(day.date)
      dailyNoteList.data.forEach((e) => {
        if (e.time === dateFormat) {
          day.className =
            "bg-[url('~/assets/img/dailyNote/choosen.svg')] bg-contain bg-no-repeat bg-center text-emerald-300 rounded-full"
        }
      })
      return day
    }
  })
  const calendar = ref(null)
  const scrollToDateFunc = () => {
    // calendar.value.scrollToDate(new Date())
  }
  const handleRouterDetail = async (item) => {
    await navigateTo({
      name: 'dailyNoteDetail',
      query: { id: item.id },
      params: item[0]
    })
  }
  const handleSelectDate = (item) => {
    const dateFormat = timeFormat(item)
    const choosenData = dailyNoteList.data.filter(
      (val) => val.time === dateFormat
    )
    if (choosenData.length) {
      handleRouterDetail(choosenData[0])
    }
  }
  return {
    minDate,
    maxDate,
    formatter,
    scrollToDateFunc,
    calendar,
    handleSelectDate,
    handleRouterDetail
  }
}
const {
  minDate,
  maxDate,
  formatter,
  scrollToDateFunc,
  calendar,
  handleSelectDate,
  handleRouterDetail
} = calendarConfigFunc()

onMounted(() => {
  scrollToDateFunc()
})
</script>

<style scoped>
:deep .van-calendar {
  background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);
}

.note-box::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  border-radius: 12px;
  background-image: url('~/assets/img/dailyNote/bg.avif');
  background-size: 110%;
  background-repeat: no-repeat;
  background-position: -42px -64px;
  opacity: 0.1;
}
</style>
