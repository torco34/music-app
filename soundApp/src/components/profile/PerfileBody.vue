<template>
  <div class="history-page q-pa-md">
    <div class="page-header">
      <q-btn
        flat
        round
        icon="more_vert"
        @click="toggleMenu"
        aria-label="Opciones"
      />

      <q-menu color="primary" v-model="menuVisible" anchor="bottom right" >
        <q-list style="min-width: 150px; color: black;">
          <q-item clickable @click="editProfile">
            <q-item-section avatar>
              <q-icon name="edit" />
            </q-item-section>
            <q-item-section>Editar Perfil</q-item-section>
          </q-item>

          <q-item clickable @click="copyLink">
            <q-item-section avatar>
              <q-icon name="link" />
            </q-item-section>
            <q-item-section>Copiar Enlace</q-item-section>
          </q-item>
        </q-list>
      </q-menu>

      <p class="page-subtitle">Explora tu historial y tus videos favoritos</p>
    </div>

    <!-- <div class="section">
      <h2 class="section-title">Vistos Recientemente</h2>
      <q-carousel swipeable animated transition-prev="fade" transition-next="fade">
        <q-carousel-slide v-for="video in recentVideos" :key="video.id" :name="video.id">
          <img :src="video.thumbnail" :alt="video.title" class="video-thumbnail" />
          <div class="video-info">
            <h3 class="video-title">{{ video.title }}</h3>
            <p class="video-description">{{ video.description }}</p>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div> -->

    <div class="section">
      <h2 class="section-title">Historial Completo</h2>
      <q-list bordered>
        <q-item v-for="video in history" :key="video.id" clickable>
          <q-item-section avatar>
            <img :src="video.thumbnail" :alt="video.title" class="video-thumbnail-small" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ video.title }}</q-item-label>
            <q-item-label caption>{{ video.date }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
 <div class="artists-list">
          <div v-for="artist in artists" :key="artist.name" class="artist-item">
            <img :src="artist.image" :alt="artist.name" class="artist-image" />
            <div class="artist-info">
              <h3 class="artist-name">{{ artist.name }}</h3>
              <p class="artist-description">{{ artist.description }}</p>
            </div>
          </div>
        </div>
    <div class="section">
      <h2 class="section-title">Favoritos de la Semana</h2>
      <div class="favorites-grid">
        <div v-for="video in favorites" :key="video.id" class="favorite-item">
          <img :src="video.thumbnail" :alt="video.title" class="video-thumbnail" />
          <h3 class="video-title">{{ video.title }}</h3>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { ref } from 'vue';

// Control de visibilidad del menú
const menuVisible = ref(true);
const $q = useQuasar();

const toggleMenu = () => {

  menuVisible.value = menuVisible.value;
};

// Simulación de funciones de acciones
const editProfile = () => {
  $q.notify({ type: 'info', message: 'Editar perfil' });
};

const copyLink = () => {
  navigator.clipboard.writeText(window.location.href).then(() => {
    $q.notify({ type: 'positive', message: 'Enlace copiado' });
  });
};
// Datos simulados
const recentVideos = ref([
  { id: 1, title: 'Video 1', description: 'Descripción del video 1', thumbnail: 'https://via.placeholder.com/300' },
  { id: 2, title: 'Video 2', description: 'Descripción del video 2', thumbnail: 'https://via.placeholder.com/300' },
]);

const history = ref([
  { id: 3, title: 'Video 3', date: '2024-10-22', thumbnail: 'https://via.placeholder.com/100' },
  { id: 4, title: 'Video 4', date: '2024-10-20', thumbnail: 'https://via.placeholder.com/100' },
]);

const favorites = ref([
  { id: 5, title: 'Video Favorito 1', thumbnail: 'https://via.placeholder.com/200' },
  { id: 6, title: 'Video Favorito 2', thumbnail: 'https://via.placeholder.com/200' },
]);
</script>

<style scoped>
.history-page {
  /* max-width: 1200px; */
  margin: auto;
}

.page-header {
  /* text-align: center; */
  /* margin-bottom: 20px; */
}

.page-title {
  font-size: 2rem;
  font-weight: bold;
}

.page-subtitle {
  font-size: 1rem;
  color: #666;
}

.section {
  margin-bottom: 30px;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.video-thumbnail {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
}

.video-info {
  text-align: center;
}

.video-title {
  font-size: 1rem;
  margin: 5px 0;
}

.favorites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
  gap: 15px;
}

.favorite-item {
  text-align: center;
}

.video-thumbnail-small {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
