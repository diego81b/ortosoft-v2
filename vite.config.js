import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import ViteComponents from 'vite-plugin-components'
// import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import PurgeIcons from 'vite-plugin-purge-icons'
import path from 'path'

export default defineConfig({
  plugins: [
    Vue(), 
    Pages(), 
    Layouts(), 
    // ViteComponents({
    //   customComponentResolvers: ViteIconsResolver(),
    // }),
    ViteComponents(),
    PurgeIcons(),
    // ViteIcons(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
  server: {
    open: true,
  },
})
