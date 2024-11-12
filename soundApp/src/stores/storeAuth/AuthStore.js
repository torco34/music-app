
// import { defineStore } from 'pinia'; // O 'vuex' si usas Vuex

// import { loginUser, registerUser } from 'src/service/serviceAuthe/authServicios.js';

// export const useAuthStore = defineStore('auth', {
//   state: () => ({
//     user: null,
//     error: null,
//     token: localStorage.getItem('token') || null,

//   }),

//   actions: {
//     async register(data) {
//       console.log(token)
//       try {
//         const userData = await registerUser(data);


//         this.user = userData; // Guarda el usuario en el estado

//         this.error = null; // Limpia cualquier error
//       } catch (error) {
//         this.error = error.message || 'Error en el registro';
//       }
//     },
//     async login(data) {
//       try {
//         const userData = await loginUser(data);

//         this.user = userData; // Guarda el usuario en el estado
//         this.error = null;
//       } catch (error) {
//         this.error = error.message || 'Error en el inicio de sesión';
//       }
//     },
//   },
// });
import { defineStore } from 'pinia'; // O 'vuex' si usas Vuex

import { loginUser, registerUser } from 'src/service/serviceAuthe/authServicios.js';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    error: null,
    token: localStorage.getItem('token') || null, // Obtener token del localStorage
  }),

  actions: {
    async register(data) {
      try {
        const userData = await registerUser(data);

        // Guarda el token en el localStorage y en el estado
        if (userData.token) {
          localStorage.setItem('token', userData.token);
          this.token = userData.token;
        }

        this.user = userData; // Guarda el usuario en el estado
        this.error = null; // Limpia cualquier error
      } catch (error) {
        this.error = error.message || 'Error en el registro';
      }
    },

    async login(data) {
      try {
        const userData = await loginUser(data);

        // Guarda el token en el localStorage y en el estado
        if (userData.token) {
          localStorage.setItem('token', userData.token);
          this.token = userData.token;
        }

        this.user = userData; // Guarda el usuario en el estado
        this.error = null;
      } catch (error) {
        this.error = error.message || 'Error en el inicio de sesión';
      }
    },

    logout() {
      // Elimina el token y el usuario del estado y localStorage
      localStorage.removeItem('token');
      this.token = null;
      this.user = null;
    },
  },
});
