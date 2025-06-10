import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from "fs"

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
    https: {
      key: fs.readFileSync('./localhost-key.pem'),
      cert: fs.readFileSync('./localhost.pem'),
    }
  }
})
