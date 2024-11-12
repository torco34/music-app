<template>
  <div class="loading-spinner" v-if="isLoading">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>

<style scoped>
.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed; /* Para que esté en el centro de la pantalla */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7); /* Fondo semitransparente */
  z-index: 1000; /* Asegura que el spinner esté por encima de otros elementos */
}

.spinner {
  border: 8px solid #f3f3f3; /* Color del fondo */
  border-top: 8px solid #3498db; /* Color del spinner */
  border-radius: 50%;
  width: 60px; /* Tamaño del spinner */
  height: 60px; /* Tamaño del spinner */
  animation: spin 2s linear infinite; /* Animación */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
