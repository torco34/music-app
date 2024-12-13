// src/stores/useYoutubeStore.js
import { defineStore } from "pinia";
import { fetchYouTubeVideos } from "src/service/fetchYouTubeVideos.js";

export const useYoutubeStore = defineStore("youtube", {
  state: () => ({
    videos: [], // Lista de videos obtenidos
    loading: false, // Indicador de carga
    error: null, // Mensaje de error
  }),

  actions: {
    async searchVideos(query) {
      this.loading = true;
      this.error = null;

      try {
        // Llama al servicio y guarda los resultados
        const videos = await fetchYouTubeVideos(query);
        this.videos = videos;
      } catch (error) {
        this.error = error.message || "Error fetching videos.";
      } finally {
        this.loading = false;
      }
    },
  },
});

