export default [
  {
    path: '/',
    redirect: { name: 'music-favorite' }, // Redirige a 'music-favorite' en lugar de 'home'
  },
  {
    path: '',
    component: () => import('src/layouts/LayoutProvider.vue'),
    children: [
      {
        name: 'login',
        path: 'inicio-sesion',
        component: () => import('src/components/form/AuthForm.vue'),
        meta: { requiresGuest: true }, // Cambiar a requiresGuest para impedir que usuarios autenticados accedan
      },
      {
        name: 'perfil',
        path: 'perfil',
        component: () => import('src/pages/ProfileUserView.vue'),
        meta: { requiresAuth: true }, // Solo usuarios autenticados
      },
      {
        name: 'music-favorite',
        path: '',
        component: () => import('src/pages/MusicHomeView.vue'),
      },
      {
        name: 'musica-favorita',
        path: '/',
        component: () => import('src/pages/MusicGenreView.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/ErroNotFoundView.vue'),
  },
];
// export default [
//   {
//     path: '/',
//     redirect: { name: 'music-favorite' }, // Redirige a 'music-favorite'
//   },
//   {
//     path: '',
//     component: () => import('src/layouts/LayoutProvider.vue'),
//     children: [
//       {
//         name: 'login',
//         path: 'inicio-sesion',
//         component: () => import('src/components/form/AuthContainerForm.vue'),
//         meta: { requiresGuest: true }, // Impide que usuarios autenticados accedan
//       },
//       {
//         name: 'perfil',
//         path: 'perfil',
//         component: () => import('src/pages/ProfileUserView.vue'),
//         meta: { requiresAuth: true }, // Solo usuarios autenticados
//       },
//       {
//         name: 'music-favorite',
//         path: '',
//         component: () => import('src/pages/MusicHomeView.vue'),
//         meta: { requiresAuth: true }, // Solo usuarios autenticados
//       },
//       {
//         name: 'index-home',
//         path: 'musica-favorita',
//         component: () => import('src/pages/MusicGenreView.vue'),
//         meta: { requiresAuth: true }, // Solo usuarios autenticados
//       },
//     ],
//   },
//   {
//     path: '/:catchAll(.*)*',
//     component: () => import('src/pages/ErroNotFoundView.vue'),
//   },
// ];
