import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// important for react-router
export default defineConfig({
  plugins: [react()],
  base: '/',
})
