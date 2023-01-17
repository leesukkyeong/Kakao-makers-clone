import { createApp } from 'vue';

import App from './App.vue';
import product from './components/product.vue';


const app = createApp(App);

app.component('pro-duct', product);

app.mount('#app');