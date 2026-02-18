import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: '.', 
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
       main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about-us.html'),
        staff: resolve(__dirname, 'our-staff.html'), 
        academics: resolve(__dirname, 'academics.html'),
        admissions: resolve(__dirname, 'admissions.html'),
        rosa: resolve(__dirname, 'rosa.html'),
        news: resolve(__dirname, 'news.html'),
        gallery: resolve(__dirname, 'gallery.html'), 
        contact: resolve(__dirname, 'contact.html'),
      },
      output: {
        dir: 'dist', // Output directory for the build
       
      },
    },
  },
})

