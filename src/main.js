import { createApp } from 'vue'; // Import createApp function from Vue 3
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './router';
import CanvasJSChart from '@canvasjs/vue-charts';
// import './assets/tailwind.css';
import { createPinia } from 'pinia'
import '../src/style.css'


// Create a Vue app instance
const app = createApp(App);

app.component('font-awesome-icon', faArrowLeft);
app.use(router); // Use the router in the app
app.use(CanvasJSChart); // Install the CanvasJS Vuejs Chart Plugin
app.use(createPinia())

// Mount the app to the #app element in the DOM
app.mount('#app');


