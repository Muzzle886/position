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
        target: 'http://47.102.42.113:8082/',
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
