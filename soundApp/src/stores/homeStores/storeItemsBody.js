// src/store/miniLayoutStore.js
import { defineStore } from 'pinia';
import { getDataHomeBody } from 'src/service/serviceHome/itemsBodyService.js';

export const useItemsBodyStore = defineStore('itemsBody', {
  state: () => ({
    titles: { title1: '', title2: '' },
    saveItemsBody: [],
    playLists: [],
    banner: []
  }),

  actions: {
    async loadItemsBody() {
      try {
        const dataItems = await getDataHomeBody();
        this.titles = {
          title1: dataItems?.title1 || '',
          title2: dataItems?.title2 || '',
        };

        this.saveItemsBody = dataItems?.genres || [];
        this.playLists = dataItems?.playlists || [];
        this.banner = dataItems?.banner || [];
      } catch (error) {
        console.error('Error al cargar el layout:', error);
      }
    },

    getTitles() {
      return this.titles;
    },

    getItemsBody() {
      return this.saveItemsBody;
    },
    getPlayLists() {
      return this.playLists;
    },

    getBanner() {
      return this.banner;
    },

  },
});
