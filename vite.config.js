import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative asset paths, so the build works both at a domain root and in a
  // subfolder such as GitHub Pages' prabinoid.github.io/mysite/.
  base: './',
})
