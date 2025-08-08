import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.ts'
import PrimeVue from 'primevue/config'
// import Button from 'primevue/button'
// import Card from 'primevue/card'
import 'primeicons/primeicons.css'
import AnimateOnScroll from 'primevue/animateonscroll'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, { unstyled: true })
app.directive('animateonscroll', AnimateOnScroll)
// app.component('Button', Button)
// app.component('Card', Card)
app.mount('#app')

// createApp(App).use(router).mount('#app')
