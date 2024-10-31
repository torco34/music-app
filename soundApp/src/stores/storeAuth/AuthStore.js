
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

import { loginUser, registerUser } from 'src/service/serviceAuthe/authServicios.js'; // Asegúrate de que la ruta sea correcta

const register = async (data) => {
  try {
    const userData = await registerUser(data);
    user.value = userData; // Guarda el usuario en el estado
    error.value = null; // Limpia cualquier error
  } catch (err) {
    error.value = err.message || 'Error en el registro';
  }
};

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem('token') || '');
  const user = ref(null);
  const error = ref(null);

  // const login = async (credentials) => {
  //   try {
  //     const response = await loginUser(credentials);
  //     console.log(response, "Respuesta de loginUser"); // Ver qué devuelve la API
  //     const { access_token, user: loggedInUser } = response; // Cambia esto según la estructura de tu respuesta

  //     if (!access_token) {
  //       throw new Error("El token de acceso es indefinido");
  //     }

  //     token.value = access_token;
  //     user.value = loggedInUser;
  //     localStorage.setItem('token', access_token);
  //     error.value = null;
  //     return { success: true };
  //   } catch (err) {
  //     console.error('Error en el login:', err.response?.data || err.message);
  //     error.value = err.message;
  //     return { success: false };
  //   }
  // };

  const login = async (credentials) => {
    try {
      const response = await loginUser(credentials); // Llama a la API para loguear

      // Comprobando si recibimos los datos correctos
      console.log(response, "Respuesta de loginUser");

      // Suponiendo que la respuesta no incluye access_token, puedes modificar la API para incluirlo,
      // o puedes almacenar el token en el servidor y recuperarlo aquí

      if (!response.access_token) {
        throw new Error("El token de acceso es indefinido");
      }

      // Si tu respuesta tiene el token de otra manera, ajusta aquí
      token.value = response.access_token; // Asegúrate de que esta propiedad exista
      user.value = response.user || response; // Almacena los detalles del usuario
      localStorage.setItem('token', token.value);
      error.value = null;
      return { success: true };

    } catch (err) {
      console.error('Error en el login:', err.message || 'Error inesperado');
      error.value = err.message || 'Error inesperado';
      return { success: false };
    }
  };


  const isLoggedIn = computed(() => !!token.value);

  return { token, user, login, register, isLoggedIn, error };
});
