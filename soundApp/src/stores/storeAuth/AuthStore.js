
import { defineStore } from 'pinia'; // O 'vuex' si usas Vuex

import { loginUser, registerUser } from 'src/service/serviceAuthe/authServicios.js';
// import { loginUser, registerUser } from 'src/service/serviceAuthe/';

// import { registerUser, loginUser } from '@/services/authService';
export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    error: null,
  }),
  actions: {
    async register(data) {
      try {
        const userData = await registerUser(data);

        console.log(userData, "data de ")
        this.user = userData; // Guarda el usuario en el estado
        console.log(userData, "data de ")
        this.error = null; // Limpia cualquier error
      } catch (error) {
        this.error = error.message || 'Error en el registro';
      }
    },
    async login(data) {
      try {
        const userData = await loginUser(data);
        console.log(userData, "data de ")
        this.user = userData; // Guarda el usuario en el estado
        this.error = null; // Limpia cualquier error
      } catch (error) {
        this.error = error.message || 'Error en el inicio de sesión';
      }
    },
  },
});
