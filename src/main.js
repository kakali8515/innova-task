import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import store from './store';
import router from './router/index.js';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');
