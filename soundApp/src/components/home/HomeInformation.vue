<template>
  <q-page padding>
    <!-- Sección de géneros -->
    <div class="genres-section q-mt-x">
      <h5 v-if="!loading && !error && youtubeStore.videos.length === 0"  class="text-titles-base">{{ dataJson.titles.title1 }}</h5>
      <h5  v-if="!loading && !error && youtubeStore.videos.length === 5"   class="text-titles-base">ESTA ES TU BÚSQUEDA</h5>
    <div v-if="loading">Cargando...</div>
<div v-else-if="error">Error: {{ error }}</div>
<div v-else class="videos-grid">
  <BaseCardSound
  v-for="(video, index) in youtubeStore.videos"
  :key="index"
  :videoId="video.videoId"
  :thumbnailUrl="video.thumbnailUrl"
  :title="video.title"
:description="video.description"
/>
</div>


<div  v-if="!loading && !error && youtubeStore.videos.length === 0"  class="featured-playlists q-mt-xl">
  <div  class="genres-grid">
        <BaseCard
          v-for="(genre, index) in dataJson.genres"
          :key="index"
          :imageSrc="genre.image"
          :title="genre.name"
          :subtitle="genre.subtitle"
          @click="handleGenres(genre)"
        />
      </div>
</div>

    </div>

    <!-- Listas de reproducción destacadas -->
    <div  v-if="!loading && !error && youtubeStore.videos.length === 0"  class="featured-playlists q-mt-xl">
      <h2 class="text-titles-base">{{ dataJson.titles.title2 }}</h2>

      <div class="genres-grid">
        <BaseCard
          v-for="(playlist, index) in dataJson.playlists"
          :key="index"
          :imageSrc="playlist.image"
          :title="playlist.name"
          :subtitle="playlist.subtitle"
          @click="handlePlaylist(playlist)"
        />
      </div>
    </div>

    <!-- Modal solo si no está autenticado -->
    <BaseModal :isOpen="showModal" :title="'Atención'" @close="showModal = false">
      <template #default>
        <p>Debes iniciar sesión para acceder a esta página.</p>
      </template>
    </BaseModal>
  </q-page>
</template>

<script setup>
import { useItemsBodyStore } from "src/stores/homeStores/storeItemsBody";
import { useAuthStore } from "src/stores/storeAuth/AuthStore.js";
import { useYoutubeStore } from "src/stores/useYoutubeStore.js";
import { computed, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import BaseCard from "../shared/BaseCard.vue";
import BaseCardSound from "../shared/BaseCardSound.vue";
import BaseModal from "../shared/BaseModal.vue";
const dataItemsBody = useItemsBodyStore();
const router = useRouter();
const authStore = useAuthStore();
const youtubeStore = useYoutubeStore();


const { videos, loading, error } = youtubeStore;

// Verifica si el usuario está autenticado
const isAuthenticated = computed(() => !!authStore.token);
const showModal = ref(false);
const dataJson = ref({
  titles: {
    title1: '',
    title2: ''
  },
  genres: [],
  playlists: [],
  banner: []
});

// Guardar el género seleccionado en el caso de no autenticación
const selectedGenre = ref(null);

// Cargar los elementos de datos
const loadItemsBody = async () => {
  try {
    await dataItemsBody.loadItemsBody();
    dataJson.value = {
      titles: dataItemsBody.getTitles(),
      genres: dataItemsBody.getItemsBody(),
      playlists: dataItemsBody.getPlayLists(),
      banner: dataItemsBody.getBanner()
    };
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
};

onMounted(() => {
  loadItemsBody();
  // youtubeStore.searchVideos("pop");
  router.push('/music-home');
});




const handleGenres = (genre) => {


  // Si el usuario está autenticado, redirige a la página de listas de reproducción por género
  if (authStore.user) {
    // Redirigir según el género
    switch (genre.name.toLowerCase()) {
      case 'pop':
        router.push('/musica-pop');
        break;
      case 'jazz':
        router.push('/musica-jazz');
        break;
      case 'rock':
        router.push('/musica-rock');
        break;
        case 'reggae':
        router.push('/musica-reggae');
        break;
      default:
        router.push('/playlists');
    }
  } else {
    // Si no está autenticado, muestra el modal de inicio de sesión
    showModal.value = true;
  }
};
// Redirigir a la página correspondiente según el género
const redirectToGenrePage = (genre) => {
  if (genre.name === "Hip-Hop") {
    router.push('/artists/');
  } else {
    router.push('/playlists');
  }
};

// Redirigir automáticamente después de que el usuario se autentique
watch(() => authStore.user, (newUser) => {
  if (newUser && selectedGenre.value) {
    redirectToGenrePage(selectedGenre.value);
    selectedGenre.value = null; // Limpiar el género seleccionado después de redirigir
  }
});
</script>

<style scoped>
.genres-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.videos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
</style>
