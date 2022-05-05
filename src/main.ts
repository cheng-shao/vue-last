import { createApp } from 'vue'
// import App from './App.vue'
import ConfigProvider from './ConfigProvider.vue'

import 'vue-global-api'

import { store } from '@/store'

const fool = 'fool'

import { router } from '@/router'

createApp(ConfigProvider).use(store).use(router).mount('#app')
