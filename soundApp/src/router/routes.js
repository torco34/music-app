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
        path: '', // Página inicial bajo el layout
        component: () => import('src/view/MusicHomeView.vue'),
      },
      {
        name: 'perfil',
        path: 'perfil',
        component: () => import('src/view/ProfileUserView.vue'),
        meta: { requiresAuth: true }, // Solo para usuarios autenticados
      },
      {
        name: 'play-lista',
        path: '/musica-favorita',
        component: () => import('src/view/MusicLibraryView.vue'),
        meta: { requiresGuest: true },
      },

      {
        path: 'musica-jazz',
        name: 'music-jazz',
        component: () => import('src/view/MusicLibraryView.vue'),
        meta: { requiresAuth: true },// imag
      },
      {
        path: 'musica-pop',
        name: 'music-pop',
        component: () => import('src/view/MusicGenreView.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'musica-rock',
        name: 'music-rock',
        component: () => import('src/view/MusicRockView.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'musica-reggae',
        name: 'music-reggae',
        component: () => import('src/view/PlylistsView.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'playlists',
        name: 'playlist',
        component: () => import('src/view/PlylistsView.vue'),
        meta: { requiresAuth: true },
      },

    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/view/ErroNotFoundView.vue'),
  },
];
