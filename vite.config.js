import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  configureWebpack: {
    externals: {
      BMap: 'BMap',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://ycgi.com.cn/api',
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
