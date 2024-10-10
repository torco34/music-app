<style></style>
<template>
  <q-page class="video-page">
    <div class="content">
      <h1 class="title">Videos de Música</h1>
      <p class="description">Aquí encontrarás una selección de los mejores videos musicales.</p>
      <!-- Agrega una lista de videos o una galería aquí -->
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'MusicVideosPage'
}
</script>

<style scoped>
.video-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

}

.content {
  background: rgba(0, 0, 0, 0.6);
  /* Fondo semitransparente para contraste */
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.title {
  font-size: 2rem;
  margin-bottom: 10px;
  font-family: 'Arial', sans-serif;
  /* Fuente atractiva */
}

.description {
  font-size: 1.2rem;
  margin-top: 0;
  font-family: 'Arial', sans-serif;
}
</style>
