import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import globalComponent from '@/components/index'
import '@/style/normal.scss'
const app = createApp(App)
for (const componentItme in globalComponent) {
  app.component(componentItme, globalComponent[componentItme])
}
app.use(router).mount('#app')
