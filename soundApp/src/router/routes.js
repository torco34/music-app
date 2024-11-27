
export default [
  {
    path: '/music-app',
    redirect: { name: 'music-favorite' }, // Redirige a 'music-favorite' en lugar de 'home'
  },
  {
    path: '',
    component: () => import('src/layouts/LayoutProvider.vue'),
    children: [
      {
        name: 'play-lista',
        path: '/musica-favorita',
        component: () => import('src/pages/MusicLibraryView.vue'),
        meta: { requiresGuest: true }, // Cambiar a requiresGuest para impedir que usuarios autenticados accedan
      },
      {
        name: 'perfil',
        path: 'perfil',
        component: () => import('src/pages/ProfileUserView.vue'),
        meta: { requiresAuth: true }, // Solo usuarios autenticados
      },
      {

        path: '/genres/:name',
        name: 'genre',
        component: () => import('src/pages/MusicLibraryView.vue'),
        props: true,
        meta: { requiresAuth: true },
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
      // Ruta dinámica con el parámetro `name`


      {
        path: '/playlists/:name',
        name: 'playlist',
        component: () => import('src/pages/PlylistsView.vue'),
        props: true,
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/ErroNotFoundView.vue'),
  },
];
