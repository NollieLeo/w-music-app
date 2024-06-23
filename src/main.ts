import { createSSRApp } from 'vue'
import App from './App.vue'
import pinia from '@/stores'

export function createApp() {
  const app = createSSRApp(App)

  // global state store
  app.use(pinia)
  return {
    app,
  }
}
