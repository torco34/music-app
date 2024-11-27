
import { createPinia } from 'pinia'
import { store } from 'quasar/wrappers'

export default store(({ app }) => {
  const pinia = createPinia()
  app.use(pinia)  // Registra Pinia en la aplicación Vue
})
