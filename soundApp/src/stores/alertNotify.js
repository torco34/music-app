

// src/stores/alertStore.js
import { defineStore } from 'pinia'

export const alertNotify = defineStore('alert', {
  state: () => ({
    message: '',
    type: '',
    visible: false,
  }),
  actions: {
    showAlert(message, type = 'info', $q) {
      this.message = message
      this.type = type
      this.visible = true

      // Verifica si $q está disponible y usa Quasar Notify
      if ($q) {
        $q.notify({
          message: this.message,
          color: type,  // El color de la notificación (puede ser success, negative, positive, etc.)
          position: 'top', // La posición donde aparecerá (top, bottom, etc.)
          timeout: 5000,  // Duración en milisegundos
          actions: [
            {
              label: 'Cerrar',
              color: 'white',
              handler: () => this.hideAlert(),
            },
          ],
        })
      }

      // Desactivar la visibilidad de la alerta después de un tiempo
      setTimeout(() => {
        this.visible = false
      }, 5000)
    },
    hideAlert() {
      this.visible = false
    },
  },
})
