// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import { useAuthStore } from 'src/stores/storeAuth/AuthStore.js'; // Verifica que la ruta sea válida
import routes from './routes'; // Asegúrate de que esta ruta sea correcta

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;
