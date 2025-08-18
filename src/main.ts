import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.ts'
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import AnimateOnScroll from 'primevue/animateonscroll'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, { unstyled: true })
app.directive('animateonscroll', AnimateOnScroll)
app.mount('#app')

// createApp(App).use(router).mount('#app')
