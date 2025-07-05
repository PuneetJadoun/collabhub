import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'   // taiwind added by us externally

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  tailwindcss(),],                     // plugin added for tailwind
})
