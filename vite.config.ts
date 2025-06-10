import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), mkcert()], 
  server: {
    port: 433,
    host: "127.0.0.1",
    hmr: {
      host: '127.0.0.1',
      port: 433,
    },
  }
})