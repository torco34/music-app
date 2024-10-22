// src/service/serviceHome/serviceMiniLayaut.js
import axios from 'axios';

const dataMusic = axios.create({
  baseURL: '/',
  timeout: 5000,
});

// Función para obtener los datos del JSON
export const fetchMiniLayout = async () => {
  try {
    const response = await dataMusic.get('src/data/dataHome/homeMiniLayout.json'); // Ruta actualizada
    console.log(response.data, "ekm,fkemfkemrkj");
    return response.data; // Retorna los datos del JSON
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    throw new Error('No se pudo cargar el layout'); // Lanza un error si no se pudo cargar
  }
};
