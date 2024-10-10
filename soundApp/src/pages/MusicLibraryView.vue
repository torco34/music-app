<template>
  <q-page class="library-page">
    <div class="library-container">
      <div class="library-header">
        <h1 class="library-title">Mi Biblioteca</h1>
        <p class="library-description">
          Aquí puedes encontrar todos tus álbumes, canciones y listas de reproducción guardadas. Disfruta de tu música
          favorita en un solo lugar.
        </p>
      </div>
      <div class="library-content">
        <div class="section">
          <h2 class="section-title">Álbumes</h2>
          <div class="albums-list">
            <div v-for="album in albums" :key="album.title" class="album-item">
              <img :src="album.cover" :alt="album.title" class="album-cover" />
              <div class="album-info">
                <h3 class="album-title">{{ album.title }}</h3>
                <p class="album-artist">{{ album.artist }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <h2 class="section-title">Listas de Reproducción</h2>
          <div class="playlists-list">
            <div v-for="playlist in playlists" :key="playlist.name" class="playlist-item">
              <img :src="playlist.cover" :alt="playlist.name" class="playlist-cover" />
              <div class="playlist-info">
                <h3 class="playlist-name">{{ playlist.name }}</h3>
                <p class="playlist-description">{{ playlist.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const albums = ref([
  { title: 'Álbum 1', cover: 'https://via.placeholder.com/150', artist: 'Artista 1' },
  { title: 'Álbum 2', cover: 'https://via.placeholder.com/150', artist: 'Artista 2' },
  { title: 'Álbum 3', cover: 'https://via.placeholder.com/150', artist: 'Artista 3' },
]);

const playlists = ref([
  { name: 'Playlist 1', cover: 'https://via.placeholder.com/150', description: 'Descripción de la playlist 1' },
  { name: 'Playlist 2', cover: 'https://via.placeholder.com/150', description: 'Descripción de la playlist 2' },
  { name: 'Playlist 3', cover: 'https://via.placeholder.com/150', description: 'Descripción de la playlist 3' },
]);
</script>

<style lang="scss" scoped>
.library-page {
  // background: #f5f5f5;
  /* Fondo gris claro */
  // color: $primary ;
  /* Color de texto oscuro */
  // padding: 20px;
  /* Espaciado interno */
}

.library-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.library-header {
  text-align: center;
  margin-bottom: 20px;
}

.library-title {
  font-size: 2rem;
  margin-bottom: 10px;
  font-family: 'Arial', sans-serif;
  /* Fuente atractiva */
}

.library-description {
  font-size: 1rem;
  line-height: 1.5;
}

.library-content {
  width: 100%;
}

.section {
  margin-bottom: 30px;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-family: 'Arial', sans-serif;
}

.albums-list,
.playlists-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.album-item,
.playlist-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  max-width: 200px;
  background: linear-gradient(to right, #ededf5, #f2f6f7);
  background: #fff;
  /* Fondo blanco para los elementos */
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  /* Sombra para los elementos */
}

.album-cover,
.playlist-cover {
  width: 150px;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 10px;
}

.album-info,
.playlist-info {
  text-align: center;
}

.album-title,
.playlist-name {
  font-size: 1rem;
  margin-bottom: 5px;
  font-weight: bold;
}

.album-artist,
.playlist-description {
  font-size: 0.875rem;
  color: #666;
  /* Color de texto más claro para descripciones */
}
</style>
