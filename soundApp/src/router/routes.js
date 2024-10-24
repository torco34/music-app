// src/router/routes.js

export default [
  {
    path: '/',
    redirect: { name: 'login' },
  },
  {
    path: '',
    component: () => import('../layouts/LayoutProvider.vue'),
    children: [
      {
        name: 'login',
        path: 'inicio-sesion',
        component: () => import('src/components/form/AuthContainerForm.vue'),
        meta: { requiresAuth: true },
      },
      {
        name: 'login',
        path: 'perfil',
        component: () => import('src/pages/ProfileUserView.vue'),
        meta: { requiresAuth: false },
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/ErroNotFoundView.vue'),
  },
];

