
import { useAuthStore } from 'src/stores/storeAuth/AuthStore';
router.beforeEach((to, from, next) => {

  const authStore = useAuthStore(); // Accede al store de autenticación
  console.log(authStore.user, "user status"); // Muestra el estado del usuario (debería tener información del usuario si está autenticado)

  // Verifica si la ruta requiere autenticación
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log("Requiere autenticación");
    if (!authStore.user) {
      // Si no está autenticado, redirige a la página de inicio o login
      next({ path: '/login' });
    } else {
      // Si está autenticado, permite continuar
      next();
    }
  }
    // Verifica si la ruta requiere ser un invitado (usuario no autenticado)
  else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (authStore.user) {
      // Si el usuario está autenticado, redirige a la página principal
      next({ path: '/' });
    } else {
      next(); // Permite el acceso si no está autenticado
    }
  } else {
    next(); // Permite el acceso si no hay reglas de autenticación
  }
});
