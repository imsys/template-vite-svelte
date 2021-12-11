import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
  publicDir: "../dist",
  plugins: [svelte()],
  server: {
    port: 5000
  },
  build: {
    outDir: '../dist',
  }
})
