import { createApp } from 'vue'
import '@/assets/css/tailwind.css'

import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts'
import { DefaultApolloClient } from "@vue/apollo-composable"
import { apolloClient } from '@/apollo'

import '@purge-icons/generated'

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App);

app.provide(DefaultApolloClient, apolloClient);
app.use(router)
app.mount('#app')
