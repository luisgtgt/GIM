import { createApp } from 'vue'
import { Quasar } from 'quasar'
import router from './routes/routes.js'

// Importar estilos de Quasar
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// Usar el Router y Quasar
app.use(router)
app.use(Quasar, {
    plugins: {}
})

app.mount('#app')