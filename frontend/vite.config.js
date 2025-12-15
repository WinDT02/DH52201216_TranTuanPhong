import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // THÊM DÒNG DƯỚI NÀY (Thay đúng tên Repo của bạn vào)
  base: '/DH52201216_TranTuanPhong/', 
  server: {
    host: true,
    port: 5173
  }
})