import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Allow overriding base path for GitHub Pages deployments (e.g., /<repo>/)
const base = process.env.VITE_BASE_PATH || '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
