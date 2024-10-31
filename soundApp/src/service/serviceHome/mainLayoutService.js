import axios from 'axios';

const jsonDataClient = axios.create({
  baseURL: '/',
  timeout: 5000,
});

// Función para obtener los datos del JSON
export const getDataJsonMainLayout = async () => {
  try {
    const response = await jsonDataClient.get('src/dataJson/dataHome/dataMainLayout.json');
    return response.data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    throw new Error('No se pudo cargar el layout');
  }
};
