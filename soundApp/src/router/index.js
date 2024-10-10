
import { createRouter, createWebHistory } from 'vue-router';

import routes from './routes'; // Asegúrate de que la ruta sea correcta

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
