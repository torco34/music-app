<template>
  <q-page class="genre-page">
    <div class="genre-container">
      <!-- Cabecera del Género -->
      <div class="genre-header">
        <img
          src="https://img.lovepik.com/photo/20230422/small/lovepik-the-artist-plays-the-guitar-rock-band-at-a-concert-photo-image_352415021.jpg"
          alt="Imagen del Género"
          class="genre-image"
        />
        <div class="genre-info">
          <h1 class="genre-title">Rock</h1>
          <p class="genre-description">
            Una breve descripción del género musical que explique su origen, características y popularidad. Incluye
            información sobre los subgéneros y su influencia en la música.
          </p>
        </div>
      </div>

      <!-- Sección de Artistas -->
      <div class="artists-section">
        <h2 class="section-title">Artistas Destacados</h2>
        <div class="artists-list">
          <div v-for="artist in artists" :key="artist.name" class="artist-item">
            <img
              :src="artist.image"
              :alt="`Imagen de ${artist.name}`"
              class="artist-image"
            />
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
import { ref } from "vue";

const artists = ref([
  {
    name: "Led Zeppelin",
    image: "https://www.shutterstock.com/image-photo/sexy-rock-singer-carrying-his-600nw-2212027051.jpg",
    description: "Legendario grupo de hard rock británico.",
  },
  {
    name: "Pink Floyd",
    image: "https://media.gettyimages.com/id/1137781483/es/foto/guitarrista-masculino-negro-cantando-y-tocando-guitarra-ac%C3%BAstica-en-el-escenario.jpg?s=612x612&w=gi&k=20&c=AZuWj_M7HqSOZgUjBBRa4L6AeA83VcPS4lw-sgO4qpU=",
    description: "Pioneros del rock progresivo y psicodélico.",
  },
  {
    name: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLXbr0gMCf1JRvop615hFbDkm4cYNGHFhqg&s",
    description: "Banda icónica del rock clásico.",
  },
  {
    name: "Led Zeppelin",
    image: "https://www.shutterstock.com/image-photo/sexy-rock-singer-carrying-his-600nw-2212027051.jpg",
    description: "Legendario grupo de hard rock británico.",
  },
  {
    name: "Pink Floyd",
    image: "https://media.gettyimages.com/id/1137781483/es/foto/guitarrista-masculino-negro-cantando-y-tocando-guitarra-ac%C3%BAstica-en-el-escenario.jpg?s=612x612&w=gi&k=20&c=AZuWj_M7HqSOZgUjBBRa4L6AeA83VcPS4lw-sgO4qpU=",
    description: "Pioneros del rock progresivo y psicodélico.",
  },
  {
    name: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLXbr0gMCf1JRvop615hFbDkm4cYNGHFhqg&s",
    description: "Banda icónica del rock clásico.",
  },
  {
    name: "Led Zeppelin",
    image: "https://www.shutterstock.com/image-photo/sexy-rock-singer-carrying-his-600nw-2212027051.jpg",
    description: "Legendario grupo de hard rock británico.",
  },
  {
    name: "Pink Floyd",
    image: "https://media.gettyimages.com/id/1137781483/es/foto/guitarrista-masculino-negro-cantando-y-tocando-guitarra-ac%C3%BAstica-en-el-escenario.jpg?s=612x612&w=gi&k=20&c=AZuWj_M7HqSOZgUjBBRa4L6AeA83VcPS4lw-sgO4qpU=",
    description: "Pioneros del rock progresivo y psicodélico.",
  },
  {
    name: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLXbr0gMCf1JRvop615hFbDkm4cYNGHFhqg&s",
    description: "Banda icónica del rock clásico.",
  },
  {
    name: "Led Zeppelin",
    image: "https://www.shutterstock.com/image-photo/sexy-rock-singer-carrying-his-600nw-2212027051.jpg",
    description: "Legendario grupo de hard rock británico.",
  },
  {
    name: "Pink Floyd",
    image: "https://media.gettyimages.com/id/1137781483/es/foto/guitarrista-masculino-negro-cantando-y-tocando-guitarra-ac%C3%BAstica-en-el-escenario.jpg?s=612x612&w=gi&k=20&c=AZuWj_M7HqSOZgUjBBRa4L6AeA83VcPS4lw-sgO4qpU=",
    description: "Pioneros del rock progresivo y psicodélico.",
  },
  {
    name: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLXbr0gMCf1JRvop615hFbDkm4cYNGHFhqg&s",
    description: "Banda icónica del rock clásico.",
  },
]);
</script>

<style lang="scss" scoped>
/* Página del género */
.genre-page {
  background: linear-gradient(to bottom, #1b1b1b, #1f1e1e);
  color: #ffffff;
  padding: 20px;
  min-height: 100vh;
}

/* Contenedor principal */
.genre-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

/* Cabecera */
.genre-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  text-align: center;
}

.genre-image {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

.genre-info {
  max-width: 600px;
}

.genre-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: "Arial", sans-serif;
}

.genre-description {
  font-size: 1rem;
  line-height: 1.6;
}

/* Artistas */
.artists-section {
  width: 100%;
  text-align: center;
}

.section-title {
  font-size: 1.8rem;
  margin-bottom: 15px;
  font-family: "Arial", sans-serif;
  color: #f7f1e3;
}

.artists-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.artist-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #333;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  max-width: 200px;
}

.artist-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

.artist-name {
  font-size: 1rem;
  font-weight: bold;
  color: #f7f1e3;
}

.artist-description {
  font-size: 0.875rem;
  color: #d1ccc0;
}
</style>
