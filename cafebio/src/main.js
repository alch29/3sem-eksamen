import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Importér routeren fra `src/router/index.js`
import VueGoogleMaps from '@fawmi/vue-google-maps';

// Opret app
const app = createApp(App);

// Brug routeren og Google Maps-plugin
app.use(router);
app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBt_VfaL84otfW44aYWlyZebO8DJzNbVl4',
  },
});

// Monter appen
app.mount('#app');
