import { apiConfig } from "../serviceConfig/apiConfig";


export const registerUser = async (data) => {
  try {

    const response = await apiConfig.post('/users/register', data);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error en el registro:', error.response?.data || error.message);
    throw error.response?.data || new Error('Error en el registro');
  }
};


// export const loginUser = async (credentials) => {
//   const response = await apiConfig.post('/users/login', credentials)
//   console.log(response, "datos data")
//   console.log(response.data, "datos de la data")
//   return response.data; // Aquí viene el token y el usuario
// };

const credentials = {
  email: "toto@gmail.com",
  password: "yourPassword" // Asegúrate de que esta propiedad existe
};
export const loginUser = async (credentials) => {
  try {
    const response = await apiConfig.post('/users/login', credentials);
    console.log(response, "datos data");
    console.log(response.data, "datos de la data");
    return response.data; // Aquí debería venir el token y el usuario
  } catch (error) {
    console.error('Error en la llamada a loginUser:', error.response ? error.response.data : error.message);
    throw error; // Lanza el error para manejarlo en el lugar de llamada
  }
};




