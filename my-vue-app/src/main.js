import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import TodoDeleteButton from './components/TodoDeleteButton.vue'
import TodoEditButton from './components/TodoEditButton.vue'
import TodoCreateButton from './components/TodoCreateButton.vue'

const app=createApp(App)
app.component('TodoDeleteButton', TodoDeleteButton)
app.component('TodoEditButton',TodoEditButton)
app.component('TodoCreateButton',TodoCreateButton)
app.mount('#app')