import { createApp } from 'vue'
import './assets/index.scss'
import router from './router.js'
import components from './components'
import App from './App.vue'
const app = createApp(App)
components.forEach((component) => {
    app.component(component.name, component);

});
app.use(router).mount('#app')
