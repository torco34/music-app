const routes = [


  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { name: "inicio", path: '/', component: () => import("src/pages/IndexPage.vue"), meta: { requiresAuth: false } },
      { name: "Artist-music", path: 'musica', component: () => import("src/pages/ArtistsMusicView.vue"), meta: { requiresAuth: false } },
      { name: "Lybreria-music", path: 'generos', component: () => import("src/pages/MusicLibraryView.vue"), meta: { requiresAuth: false } },
      { name: "biblic-artis", path: 'biblioteca', component: () => import("src/pages/AlbumsSoundView.vue"), meta: { requiresAuth: false } },
      { name: "profile-user", path: 'perfil', component: () => import("src/pages/AlbumsSoundView"), meta: { requiresAuth: false } }
    ]
  },

  {
    path: '/private',
    component: () => import('../layouts/HeaderLayout.vue'),
    children: [

      { name: "sound-rock", path: 'rock', component: () => import("src/pages/ArtistsMusicView.vue"), meta: { requiresAuth: false } },
      { name: "generos-music", path: 'musica', component: () => import("src/pages/MusicLibraryView.vue"), meta: { requiresAuth: false } },
      { name: "bicleoteca-artista", path: 'albums', component: () => import("src/pages/AlbumsSoundView.vue"), meta: { requiresAuth: false } },
      { name: "perfil-user", path: 'perfil', component: () => import("src/pages/AlbumsSoundView"), meta: { requiresAuth: false } },
      // { name: "iniciar-sesion", path: 'inicio', component: () => import("src/pages/AuthFormView.vue"), meta: { requiresAuth: false } }
      // { name: "iniciar-sesion", path: 'inicio', component: () => import("src/components/shared/BaseModal.vue"), meta: { requiresAuth: false } }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import("src/pages/ErroNotFoundView.vue")
  }
];

export default routes;
