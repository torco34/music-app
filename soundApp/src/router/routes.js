// export default [
//   {
//     path: '/music-app',
//     redirect: { name: 'music-favorite' }, // Redirige a 'music-favorite' cuando se accede a '/music-app'
//   },
//   {
//     path: '',
//     component: () => import('src/layouts/LayoutProvider.vue'), // Layout que se utilizará para las páginas
//     children: [
//       {
//         name: 'music-favorite',
//         path: '', // Ruta predeterminada dentro del layout
//         component: () => import('src/pages/MusicHomeView.vue'),
//       },
//       {
//         name: 'play-lista',
//         path: 'musica-favorita', // Ruta relativa dentro del layout
//         component: () => import('src/pages/MusicLibraryView.vue'),
//         meta: { requiresGuest: true }, // Solo accesible para invitados
//       },
//       {
//         name: 'perfil',
//         path: 'perfil', // Ruta relativa dentro del layout
//         component: () => import('src/pages/ProfileUserView.vue'),
//         meta: { requiresAuth: true }, // Solo accesible para usuarios autenticados
//       },
//       {
//         path: 'genres', // Ruta dinámica para acceder a géneros
//         name: 'genre',
//         component: () => import('src/pages/MusicLibraryView.vue'),
//         meta: { requiresAuth: true }, // Solo accesible para usuarios autenticados
//       },
//       {
//         path: 'playlists', // Ruta dinámica para playlists
//         name: 'playlist', // Nombre de la ruta corregido
//         component: () => import('src/pages/PlylistsView.vue'),
//         meta: { requiresAuth: true }, // Solo accesible para usuarios autenticados
//       },
//     ],
//   },
//   {
//     path: '/:catchAll(.*)*', // Ruta para manejar errores 404
//     component: () => import('src/pages/ErrorNotFoundView.vue'),
//   },
// ];
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
