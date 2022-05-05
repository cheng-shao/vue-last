import { ConfigEnv, loadEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const envs = loadEnv(mode, root)
  console.log(envs, 'env')

  return {
    plugins: [
      vue(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/ // .vue
        ],
        imports: ['vue'],
        resolvers: [ElementPlusResolver()],
        dts: 'types/auto-imports.d.ts'
      }),
      Components({
        dirs: ['src/components'],
        resolvers: [ElementPlusResolver()],
        include: [/\.vue$/, /\.vue\?vue/],
        dts: 'types/components.d.ts'
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    }
  }
}
