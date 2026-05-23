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
        about: resolve(__dirname, 'about.html'),
        networking: resolve(__dirname, 'networking.html'),
        development: resolve(__dirname, 'development.html'),
        promotion: resolve(__dirname, 'promotion.html'),
        nstedpulse: resolve(__dirname, 'nstedpulse.html'),
        astdn: resolve(__dirname, 'astdn.html'),
        resources: resolve(__dirname, 'resources.html'), 
        contact: resolve(__dirname, 'contact.html'),
      },
      output: {
        dir: 'dist', // Output directory for the build
       
      },
    },
  },
})

