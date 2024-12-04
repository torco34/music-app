<template>
  <q-page padding>
    <!-- Sección de géneros -->
    <div class="genres-section q-mt-x">
      <h5 class="text-titles-base">{{ dataJson.titles.title1 }}</h5>

      <div class="genres-grid">
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

    <!-- Listas de reproducción destacadas -->
    <div class="featured-playlists q-mt-xl">
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
    <BaseModal

       :isOpen="showModal"
      :title="'Atención'"
 @close="showModal = false"
    >
      <template #default>
        <p>Debes iniciar sesión para acceder a esta página.</p>
      </template>
    </BaseModal>
  </q-page>
</template>

<script setup>
import { useItemsBodyStore } from "src/stores/homeStores/storeItemsBody";
import { onMounted, ref, computed } from "vue";
import BaseCard from "../shared/BaseCard.vue";
import BaseModal from "../shared/BaseModal.vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "src/stores/storeAuth/AuthStore.js";

const dataItemsBody = useItemsBodyStore();
const router = useRouter();
const authStore = useAuthStore();

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
});
const handlePlaylist = (playlist) => {
  console.log('Playlist seleccionada:', playlist.name);
  console.log('¿Está autenticado?', isAuthenticated.value);

  // Condiciones para enrutamiento
  if (playlist.name === "Hip-Hop") {
    router.push('/artists/');
  } else if (authStore.user) {
    // Si el usuario está autenticado y no es "Hip-Hop", redirigir a géneros
    router.push('/genres/');
  } else {
    // Si no se cumple ninguna condición de enrutamiento, mostrar el modal
    showModal.value = true;
  }
};


const handleGenres = (genre) => {
  console.log('Género seleccionado:', genre.name);
  console.log('¿Está autenticado?', authStore.user ? "Sí" : "No");

  if (authStore.user) {
    alert("No estás  genre autenticado", genre);
    router.push("/playlists");
    if (genre.name === "Hip-Hop") {
    router.push('/artists/');
  }
  }
  showModal.value = true;
};
</script>

<style scoped>
.genres-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
</style>
