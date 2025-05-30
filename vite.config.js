import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    allowedHosts: [
      '5173-if9v2vkldzwzt8i56ktwp-d49ec1aa.manusvm.computer',
      'localhost',
      '127.0.0.1'
    ]
  }
})
