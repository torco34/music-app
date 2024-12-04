import { createRouter, createWebHistory } from 'vue-router';

import { useAuthStore } from 'src/stores/storeAuth/AuthStore'; // Asegúrate de que la ruta sea válida
import routes from './routes'; // Ruta correcta para el archivo de rutas

const router = createRouter({
  history: createWebHistory(), // Aquí puedes especificar la base URL de tu aplicación
  routes,
});

export default router;


