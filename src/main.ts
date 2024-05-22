import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './config/firebase'
import AtroposCard from './components/AtroposCard.vue'
import VueRoughNotation from 'vue-rough-notation'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('AtroposCard', AtroposCard)

app.use(createPinia())
app.use(router)
app.use(VueRoughNotation)
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()]
})

app.mount('#app')
