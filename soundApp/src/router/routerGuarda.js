
import { createRouter, createWebHistory } from 'vue-router';

import { useAuthStore } from 'src/stores/storeAuth/AuthStore'; // Asegúrate de que la ruta sea válida
import routes from './routes'; // Ruta correcta para el archivo de rutas

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  console.log(authStore.user, "user status");  // Verifica el estado del usuario

  // Si la ruta requiere autenticación
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log("Requiere autenticación");
    if (!authStore.user) {
      // No está autenticado, redirigir a la página de login
      next({ path: '/inicio-sesion' });
    } else {
      next(); // Permitir el acceso
    }
  }
    // Si la ruta requiere ser un invitado
  else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (authStore.user) {
      // Ya está autenticado, redirigir a la página principal o dashboard
      next({ path: '/' });
    } else {
      next(); // Permitir el acceso
    }
  }
  else {
    next(); // Permitir el acceso si no hay reglas de autenticación
  }
});

export default router;
