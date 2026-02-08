import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/my-portofolio/",  // 👈 Tulis baris ini (sesuaikan nama repo barunya)
  plugins: [
    react(), 
    tailwindcss()
  ],
})