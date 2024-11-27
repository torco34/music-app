<template>

    <h1>Listas Destacadas</h1>
    <div class="sound-list">
      <BaseCardSound
        v-for="video in videos"
        :key="video.id"
        :videoId="video.videoId"
        :title="video.title"
        :description="video.description"
      />
    </div>

</template>

<script setup>
import BaseCardSound from 'src/components/shared/BaseCardSound.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
BaseCardSound
// Lista de playlists con videos asociados
const playlists = ref([
  {
    name: 'Top Hits',
    subtitle: 'Las mejores canciones del momento',
    image: 'https://link.to/image1.jpg',
    videoId: '8lkphaQ05Dw', // ID del video de YouTube
  },
  {
    name: 'Relax & Chill',
    subtitle: 'Relájate con esta lista de música suave',
    image: 'https://link.to/image2.jpg',
    videoId: 'dQw4w9WgXcQ', // Otro video de YouTube
  },
  {
    name: 'Workout Vibes',
    subtitle: 'Música para entrenar con energía',
    image: 'https://link.to/image3.jpg',
    videoId: '3JZ_D3ELwOQ', // Otro video de YouTube
  },
]);
const videos = [
  {
    id: 1,
    videoId: 'TVyLcqNg5lY',
    title: 'Calmar La Mente',
    description: 'Relaja tu mente con este sonido.',
  },
  {
    id: 2,
    videoId: '9eW5zIOCjOw',
    title: 'LAMENTO BOLIVIANO',
    description: 'Los Enanitos Verdes',
  },
  {
    id: 3,
    videoId: 'TVyLcqNg5lY',
    title: 'Calmar La Mente',
    description: 'Relaja tu mente con este sonido.',
  },
  {
    id: 4,
    videoId: 'WRcCBI5rFfM&list=Y2SwrG5qHEE',
    title: 'Lluvia Relajante',
    description: 'Sonido de lluvia para relajarte.',
  },
];
const selectedPlaylist = ref(null);
const route = useRoute();

// Buscar la playlist seleccionada según el nombre en la URL
const fetchPlaylistByName = () => {
  const playlistName = route.params.name; // Obtener el nombre de la playlist desde la URL
  selectedPlaylist.value = playlists.value.find(
    (playlist) => playlist.name.toLowerCase() === playlistName
  );
};

onMounted(() => {
  fetchPlaylistByName();
});
</script>

<style scoped>
.sound-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  justify-content: center;
  align-items: start;
  margin-top: 16px;
}

.sound-list > * {
  /* display: flex; */
  justify-content: center;
}
</style>
