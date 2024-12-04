import { defineStore } from 'pinia';

import { loginUser, registerUser } from 'src/service/serviceAuthe/authServicios.js';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null, // Obtener usuario del localStorage
    token: localStorage.getItem('token') || null, // Obtener token del localStorage
    error: null,
  }),

  actions: {
    async register(data) {
      try {
        const userData = await registerUser(data);

        // Guarda el token y el usuario en el localStorage
        if (userData.token) {
          localStorage.setItem('token', userData.token);
          this.token = userData.token;
        }

        this.user = userData;
        localStorage.setItem('user', JSON.stringify(userData)); // Guardar usuario
        this.error = null;
      } catch (error) {
        this.error = error.message || 'Error en el registro';
      }
    },

    async login(data) {
      try {
        const userData = await loginUser(data);

        // Guarda el token y el usuario en el localStorage
        if (userData.token) {
          localStorage.setItem('token', userData.token);
          this.token = userData.token;
        }

        this.user = userData;
        localStorage.setItem('user', JSON.stringify(userData)); // Guardar usuario
        this.error = null;
      } catch (error) {
        this.error = error.message || 'Error en el inicio de sesión';
      }
    },

    logout() {
      // Elimina el token y el usuario del estado y localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.token = null;
      this.user = null;
    },
  },
});
