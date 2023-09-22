import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './',
  publicDir: "../public/",
  base: './',
  server: {
    host: true,
  },
  build:
    {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true
    }
})
