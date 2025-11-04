import './assets/css/homepage.css'
import { createApp } from 'vue'
import App from './App.vue'
//Import router from vue-router library
import router from './router'
//Import AOS Animation from AOS framework
import AOS from 'aos'
import 'aos/dist/aos.css'

import $ from 'jquery'   // นำเข้า jQuery

window.$ = $             // ทำให้เรียกใช้ผ่าน window.$ ได้ทุกที่
window.jQuery = $

const app = createApp(App)

app.use(router)
app.mount('#app')
AOS.init()
AOS.refresh()