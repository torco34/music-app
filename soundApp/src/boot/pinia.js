// src/boot/pinia.js
// import { createPinia } from 'pinia';

// export default ({ app }) => {
//   const pinia = createPinia();  // Crea la instancia de Pinia
//   app.use(pinia);  // Registra Pinia en la aplicación Vue
// };


// src/boot/pinia.js
import { createPinia } from 'pinia'
import { store } from 'quasar/wrappers'

export default store(({ app }) => {
  const pinia = createPinia()
  app.use(pinia)  // Registra Pinia en la aplicación Vue
})
