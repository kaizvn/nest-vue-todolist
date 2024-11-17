import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles.css';
import axios from './axios';
import TodoApp from './components/TodoApp/TodoApp.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* add icons to the library */
library.add(fas);

const app = createApp(App);
app.component('TodoApp', TodoApp);
app.component('FaIcon', FontAwesomeIcon);
app.use(axios, {
  baseUrl: 'https://localhost:3000/api',
});

app.mount('#app');
