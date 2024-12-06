<template>
  <q-page class="genre-page">
    <div class="genre-container">
      <div class="genre-header">
        <img src="https://via.placeholder.com/200" alt="Genre Image" class="genre-image" />
        <div class="genre-info">
          <h1 class="genre-title">Artistas rock</h1>
          <p class="genre-description">
            Una breve descripción del género musical que explique su origen, características y popularidad. Puedes
            incluir información sobre los subgéneros y su influencia en la música.
          </p>
        </div>
      </div>
      <div class="artists-section">
        <h2 class="section-title">Artistas Destacados</h2>
        <div class="artists-list">
          <div v-for="artist in artists" :key="artist.name" class="artist-item">
            <img :src="artist.image" :alt="artist.name" class="artist-image" />
            <div class="artist-info">
              <h3 class="artist-name">{{ artist.name }}</h3>
              <p class="artist-description">{{ artist.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const artists = ref([
  { name: 'Artista 1', image: 'https://via.placeholder.com/100', description: 'Descripción del artista 1' },
  { name: 'Artista 2', image: 'https://via.placeholder.com/100', description: 'Descripción del artista 2' },
  { name: 'Artista 3', image: 'https://via.placeholder.com/100', description: 'Descripción del artista 3' },
]);
</script>

<style lang="scss" scoped>
.genre-page {

  height: 100vh;
}

.genre-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.genre-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.genre-image {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 20px;
}

.genre-info {
  max-width: 600px;
}

.genre-title {
  font-size: 2rem;
  margin-bottom: 10px;
  font-family: 'Arial', sans-serif;
  /* Fuente atractiva */
}

.genre-description {
  font-size: 1rem;
  line-height: 1.5;
}

.artists-section {
  width: 100%;
  text-align: center;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-family: 'Arial', sans-serif;
}

.artists-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.artist-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  max-width: 200px;
  background: rgba(255, 255, 255, 0.2);
  /* Fondo semitransparente */
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  /* Sombra para resaltar */
}

.artist-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
}

.artist-info {
  text-align: center;
}

.artist-name {
  font-size: 1rem;
  margin-bottom: 5px;
  font-weight: bold;
}

.artist-description {
  font-size: 0.875rem;
  color: #ddd;
  /* Color de texto más claro para la descripción */
}
</style>
