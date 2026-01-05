import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Rebuild trigger - correct base for deployment
export default defineConfig({
  plugins: [react()],
  base: '/KLANK-portfolio-my/',  // ← MUST be your repo name with slashes
})