
import { reactive } from 'vue';
import { fetchMiniLayout } from '../../service/serviceHome/serviceMiniLayaut.js';

export const miniLayoutStore = () => {
  const state = reactive({
    navMiniLayout: [],
  });

  const loadMiniLayout = async () => {
    try {
      const data = await fetchMiniLayout();
      state.navMiniLayout = data.navMiniLayout;
    } catch (error) {
      console.error('Error al cargar el layout:', error);
    }
  };

  const getMiniLayout = () => state.navMiniLayout;

  return {
    loadMiniLayout,
    getMiniLayout,
  };
};

