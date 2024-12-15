// src/service/fetchYouTubeVideos.js
import { apiTheNest } from './config/apiTheNest.js';

export const fetchYouTubeVideos = async (query) => {

  try {
    const response = await apiTheNest.get(`/api-youtube/search`, {
      params: { q: query },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching videos:", error.message);
    console.error("Error fetching videos:", error.response?.data || error.message);
    throw error;
  }
};
