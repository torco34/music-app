// src/store/miniLayoutStore.js
import { defineStore } from 'pinia';
import { getDataJsonMainLayout } from 'src/service/serviceHome/mainLayoutService';


export const useJsonDataStore = defineStore('miniLayout', {
  state: () => ({
    saveJsonData: [],
  }),

  actions: {
    async loadJsonData() {
      try {
        const data = await getDataJsonMainLayout();
        this.saveJsonData = data?.navMiniLayout || [];
      } catch (error) {
        console.error('Error al cargar el layout:', error);
      }
    },

    getJsonDataSave() {
      return this.saveJsonData;
    },
  },
});

