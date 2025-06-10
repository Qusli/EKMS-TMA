import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()], 
  server: {
    port: 433,
    host: "127.0.0.1",
    hmr: {
      host: '127.0.0.1',
      port: 433,
    },
    proxy: {
      target: "https://176.123.161.97:5200/",
    }
  }
})
