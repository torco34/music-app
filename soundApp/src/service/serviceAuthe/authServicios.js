import { apiConfig } from "../serviceConfig/apiConfig";


export const registerUser = async (data) => {
  try {

    const response = await apiConfig.post('/users/register', data);
    return response.data;
  } catch (error) {
    console.error('Error en el registro:', error.response?.data || error.message);
    throw error.response?.data || new Error('Error en el registro');
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await apiConfig.post('/users/login', loginData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};




