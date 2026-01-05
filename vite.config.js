import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// De editor plugin is alleen lokaal beschikbaar tijdens development
let athenaEditorPlugin = null;
const pluginPath = '../../factory-engine/lib/vite-plugin-athena-editor.js';

if (fs.existsSync(pluginPath)) {
  const module = await import(pluginPath);
  athenaEditorPlugin = module.default;
}

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/ath-bakkerij-de-graankorrel/' : '/', 
  plugins: [
    react(),
    tailwindcss(),
    athenaEditorPlugin ? athenaEditorPlugin() : null
  ].filter(Boolean),
})