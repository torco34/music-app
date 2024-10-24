// src/router/index.js
import { useAuthStore } from 'src/stores/storeAuth/AuthStore.js'; // Verifica que la ruta sea válida
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes'; // Asegúrate de que esta ruta sea correcta

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Middleware para proteger rutas con `requiresAuth`
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const isAuthenticated = !!authStore.user;

  console.log('¿Autenticado?', isAuthenticated);

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
