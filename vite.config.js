import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/NOMBRE_DEL_REPO/',
  plugins: [react()],
})
