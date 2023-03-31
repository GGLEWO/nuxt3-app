<template>
  <div class="minMd:hidden">
    <van-list>
      <van-cell v-for="(item, index) in props.passager" :key="item.id" :title="item.title">
        <template #title>
          <van-row>
            <van-col @click="handleCheckDetail(item)" span="12" :class="['cursor-pointer']">{{
              item.name
            }}</van-col>
            <van-col>
              <span
                @click="handleFilterByTag(val)"
                v-for="(val, index1) in item.tag"
                :key="index1"
                :class="[
                  'text-sm',
                  'rounded-2xl',
                  'py-1',
                  'px-2',
                  'mr-2',
                  'mt-1',
                  'truncate',
                  [
                    'bg-pastel-FF8AAE',
                    'bg-pastel-FFF89A',
                    'bg-pastel-B1BCE6  ',
                    'bg-pastel-A68DAD',
                    'bg-pastel-B5DEFF',
                    'bg-pastel-FCFFA6',
                    'bg-pastel-D4D925',
                    'bg-pastel-CAB8FF',
                    'bg-pastel-95CD41',
                    'bg-pastel-FFCBCB',
                  ][((index1 + 1) * (index + 1) * 33) % 10],
                ]"
                >{{ val }}</span
              >
            </van-col>
          </van-row>
        </template>
      </van-cell>
    </van-list>
  </div>
</template>
<script setup>
import { toRaw } from 'vue';

const emit = defineEmits(['handleCheckDetail']);
const props = defineProps({
  passager: {
    type: Array,
    default: () => [],
    required: true,
  },
});

function handleCheckDetail(item) {
  let val = toRaw(item);
  emit('handleCheckDetail', val);
}

function handleFilterByTag(item) {
  let val = toRaw(item);
  emit('handleFilterByTag', val);
}
</script>
