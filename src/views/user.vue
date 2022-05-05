<script setup lang="ts">
// 顶部不能放导入之外的其他代码，否则报错
import { useMouse } from '@vueuse/core'
console.log('kkkk')

const { x, y } = useMouse()

const state = reactive({
  url: 'ko',
  size: ['small', 'large'] as const
})

state.url = 'oooo'

const obj = {
  a: 'kkk',
  b: false,
  d: {},
  k: []
}

const { url, size } = state

const value1 = ref('')
</script>

<template>
  <h2>User followd</h2>

  <el-button>{{ url }}</el-button>
  <el-button v-for="(item, index) in size" :key="index">{{ item }}</el-button>

  <el-date-picker v-model="value1" type="date" placeholder="Pick a day" />
</template>
