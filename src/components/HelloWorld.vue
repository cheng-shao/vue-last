<script setup lang="ts">
import { useCard } from '@/store/modules/card'
import { version } from 'vue'
// import MathInfo from '../views/MathInfo.vue'
// import { storeToRefs } from 'pinia'

// defineProps<{ msg: 'kk' | 'jj' }>()

console.log(version, 'version')

const count = ref(0)

const card = useCard()

setTimeout(() => {
  card.$reset()
  card.$patch({
    counter: 9,
    type: 'b'
  })
}, 5000)

card.counter++
// const { counter } = storeToRefs(card)

const handleAdd = () => {
  card.add
}
</script>

<template>
  <h2>card{{ card.counter }}</h2>
  <h2>type{{ card.type }}</h2>

  <math-info>
    <template #header>
      <div>我是插槽;滚犊子</div>
    </template>
    <template #default>
      <div>默认插槽;哈哈</div>
    </template>
  </math-info>

  <!-- <h1>{{ msg }}</h1> -->

  <el-button @click="handleAdd"> 加1 </el-button>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <router-link to="user">显示user</router-link>

  <router-view></router-view>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
