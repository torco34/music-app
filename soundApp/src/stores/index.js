import { createPinia } from 'pinia'
import { store } from 'quasar/wrappers'


export default store(() => {
  const pinia = createPinia()
  return pinia
})
