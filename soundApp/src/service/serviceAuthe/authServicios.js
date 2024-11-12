import { apiConfig } from "../serviceConfig/apiConfig";


export const registerUser = async (data) => {
  try {

    const response = await apiConfig.post('/users/register', data);
    console.log(response.data, "register service")
    return response.data;
  } catch (error) {
    console.error('Error en el registro:', error.response?.data || error.message);
    throw error.response?.data || new Error('Error en el registro');

  }
};


export const loginUser = async (credentials) => {
  const response = await apiConfig.post('/users/login', credentials)
  console.log(response.data, "login service")
  return response.data; // Aquí viene el token y el usuario
};




