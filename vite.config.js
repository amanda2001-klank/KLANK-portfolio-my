import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/KLANK-portfolio-my/',   // ← THIS LINE IS VERY IMPORTANT
})
