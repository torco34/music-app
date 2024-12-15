// src/store/miniLayoutStore.js
import { defineStore } from 'pinia';

import { getVideosYouTube } from 'src/service/serviceVideos/videosYoutube';

export const useItemsBodyStore = defineStore('itemsBody', {
  state: () => ({
    titles: { title1: '', title2: '' },
    saveItemsBody: [],
    playLists: [],
    banner: []
  }),

  actions: {
    async videosYouTube() {

      try {
        const dataItems = await getVideosYouTube();

        this.url = dataItems?.url || [];
      } catch (error) {
        console.error('Error al cargar el layout:', error);
      }
    },

    videosYouTube() {
      return this.url;
    },



  },
});
