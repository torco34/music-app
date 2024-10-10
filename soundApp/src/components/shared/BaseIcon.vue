<template>
  <div class="music-icon-container">
    <q-icon class="music-icon" name="music_note" />
    <span class="music-text">LA Rockula</span>
  </div>
</template>

<script setup>

</script>

<style scoped>
.music-icon-container {
  display: flex;
  align-items: center;
  font-family: Arial, sans-serif;
  /* Cambia la fuente si deseas */
  font-size: 24px;
  /* Tamaño del texto */
  color: #cec8da;
  /* Color del texto */
}

.music-icon {
  font-size: 30px;
  /* Tamaño del ícono */
  margin-right: 10px;
  /* Espacio entre el ícono y el texto */
  color: #8c66d8;
  /* Color del ícono */
}

.music-text {
  font-weight: bold;
  /* Opción para hacer el texto más destacado */
}
</style>
