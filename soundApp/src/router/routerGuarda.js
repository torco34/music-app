router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  // Si la ruta requiere autenticación
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authStore.user) {
      // No está autenticado, redirigir a la página de login
      next({ path: '/login' });
    } else {
      next(); // Permitir el acceso
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Si la ruta requiere ser un invitado
    if (authStore.user) {
      // Ya está autenticado, redirigir al dashboard u otra página
      next({ path: '/' });
    } else {
      next(); // Permitir el acceso
    }
  } else {
    next(); // Permitir el acceso
  }
});
