import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App'
import "bootstrap/dist/js/bootstrap.js"
import router from './router/router'
import * as Vue from 'vue' //
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(router).use(VueAxios, axios).mount('#app');
