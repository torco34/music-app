import axios from 'axios';

const jsonClient = axios.create({
  baseURL: '/',
  timeout: 5000,
});

// Función para obtener los datos del JSON
export const getDataHomeBody = async () => {
  try {
    const response = await jsonClient.get('src/dataJson/dataHome/dataHomeItems.json');

    return response.data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    throw new Error('No se pudo cargar el layout');
  }
};
