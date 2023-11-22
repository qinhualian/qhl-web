import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver(), IconsResolver({
        prefix: 'Icon',
      })]
    }),
    Components({
      resolvers: [ElementPlusResolver(),  IconsResolver({
        // @iconify-json/ep 是 Element Plus 的图标库
        enabledCollections: ['ep']
      })]
    }),
    Icons({
      autoInstall: true,
    }),
  ],
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        additionalData: '@import "@/assets/style/global.less";@import "@/assets/style/reset.css";',
        javascriptEnabled: true,
      }
    }
  }
})
