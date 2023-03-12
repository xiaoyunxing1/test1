import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   open: false,
  //   host: '127.0.0.1',
  //   port: 3456,
  //   proxy: {
  //     '^/api/': {
  //       target: 'https://www.bilibili.com/', // 后台服务器地址
  //       changeOrigin: true, /* 允许跨域 */
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // }
})
