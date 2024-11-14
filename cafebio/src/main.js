import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Importér routeren fra `src/router/index.js`

// Opret app og brug routeren
const app = createApp(App);
app.use(router);  // Tilføj routeren til applikationen
app.mount('#app');  // Monter applikationen
