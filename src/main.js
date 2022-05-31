import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App'
import "bootstrap/dist/js/bootstrap.js"
import router from './router/router'

const app = createApp(App)

app.use(router).mount('#app');