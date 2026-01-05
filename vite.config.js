import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import athenaEditorPlugin from '../../factory-engine/lib/vite-plugin-athena-editor.js'

export default defineConfig({
  base: '/bakkerij-de-graankorrel/', 
  plugins: [
    react(),
    tailwindcss(),
    athenaEditorPlugin()
  ],
})