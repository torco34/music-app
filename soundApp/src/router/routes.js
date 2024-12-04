export default [
  {
    path: '/music-app',
    redirect: { name: 'music-favorite' }, // Redirige a la página principal
  },
  {
    path: '', // Ruta principal para el layout
    component: () => import('src/layouts/LayoutProvider.vue'), // Layout principal
    children: [
      {
        name: 'music-favorite',
        path: '', // Página inicial bajo el layout
        component: () => import('src/pages/MusicHomeView.vue'),
      },
      {
        name: 'play-lista',
        path: '/musica-favorita',
        component: () => import('src/pages/MusicLibraryView.vue'),
        meta: { requiresGuest: true }, // Solo para usuarios no autenticados
      },
      {
        name: 'perfil',
        path: 'perfil',
        component: () => import('src/pages/ProfileUserView.vue'),
        meta: { requiresAuth: true }, // Solo para usuarios autenticados
      },
      {
        path: '/genres/:name',
        name: 'genre',
        component: () => import('src/pages/MusicLibraryView.vue'),
        meta: { requiresAuth: true }, // Solo para usuarios autenticados
      },
      {
        path: '/playlists/:name',
        name: 'playlist',
        component: () => import('src/pages/PlylistsView.vue'),
        meta: { requiresAuth: true }, // Solo para usuarios autenticados
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/ErroNotFoundView.vue'),
  },
];
