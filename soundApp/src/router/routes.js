export default [
  {
    path: '',
    redirect: { name: 'music-favorite' }, // Redirige a la página principal
  },
  {
    path: '/', // Ruta principal para el layout
    component: () => import('src/layouts/LayoutProvider.vue'), // Layout principal
    children: [
      {
        name: 'music-favorite',
        path: '/music-home', // Página inicial bajo el layout
        component: () => import('src/view/HomeMusicView.vue'),
      },
      {
        name: 'perfil',
        path: 'perfil',
        component: () => import('src/view/ProfileUserView.vue'),
        meta: { requiresAuth: true }, // Solo para usuarios autenticados
      },
      {
        name: 'history-music',
        path: '/music-history',
        component: () => import('src/view/HistoryMusicView.vue'),
        meta: { requiresGuest: true },
      },

      {
        path: 'favorite-musics',
        name: '/favorite-music',
        component: () => import('src/view/FavoriteMusicView.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'create-music-playlist',
        name: 'create-music-playlists',
        component: () => import('src/view/CreatePlaylistView.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'podcast-music',
        name: 'podcast-musics',
        component: () => import('src/view/PodcastMusicView.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'config-music',
        name: 'config-musics',
        component: () => import('src/view/ConfigMusicView.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'notifica-music',
        name: 'notifica-musics',
        component: () => import('src/view/NotificationsView.vue'),
        meta: { requiresAuth: true },
      },

    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/view/ErroNotFoundView.vue'),
  },
];
