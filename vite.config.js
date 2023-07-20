import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const resolve = dir => path.join(__dirname, dir)
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ElementPlus()
  ],
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve("src/assets/style/index.less")}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
  server: {
    //服务器主机名
    host: '',
    //端口号
    port: 3000,
    //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
    strictPort: false,
    //服务器启动时自动在浏览器中打开应用程序,当此值为字符串时，会被用作 URL 的路径名
    open: false
  }

})
