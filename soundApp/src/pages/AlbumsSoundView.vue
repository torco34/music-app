<template>
  <q-page class="album-page">
    <div class="album-container">
      <div class="album-cover">
        <img src="https://via.placeholder.com/300" alt="Album Cover" />
      </div>
      <div class="album-info">
        <h1 class="album-title">Título del Álbum</h1>
        <h2 class="album-artist">Artista</h2>
        <p class="album-release-date">Fecha de Lanzamiento: <span>dd/mm/yyyy</span></p>
        <p class="album-description">
          Una breve descripción del álbum que podría incluir detalles sobre el estilo de música, la inspiración detrás
          del álbum, o cualquier otro dato relevante.
        </p>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'AlbumPage'
}
</script>

<style lang="scss" scoped>
.album-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.album-container {
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  /* Fondo semitransparente para contraste */
  border-radius: 10px;
  padding: 20px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
}

.album-cover img {
  width: 300px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
}

.album-info {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.album-title {
  font-size: 2rem;
  margin-bottom: 10px;
  font-family: 'Arial', sans-serif;
  /* Fuente atractiva */
}

.album-artist {
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-family: 'Arial', sans-serif;
}

.album-release-date {
  font-size: 1rem;
  margin-bottom: 20px;
}

.album-description {
  font-size: 1rem;
  line-height: 1.5;
}
</style>
