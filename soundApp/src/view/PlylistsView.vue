<template>
  <q-page padding>
    <h2 class="q-mt-lg q-mb-md text-h4 text-center text-primary">
  🎵 <span class="text-gradient">Playlist Destacada</span> 🎵
</h2>



    <div class="sound-list">

      <BaseCardSound
  v-for="video in videos"
  :key="video.id"
  :videoId="video.videoId"
  :title="video.title"
  :thumbnailUrl="video.image"
  :description="video.description"
/>
    </div>
  </q-page>
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCws0nYtv_mvMioOR8aoHHL-gGEPzEnYJ47g&s',
    videoId: '3JZ_D3ELwOQ', // Otro video de YouTube
  },
]);
const videos = [
  {
    id: 1,
    videoId: 'TVyLcqNg5lY',
    title: 'Calmar La Mente',
    description: 'Relaja tu mente con este sonido.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCws0nYtv_mvMioOR8aoHHL-gGEPzEnYJ47g&s', // URL de la imagen
  },
  {
    id: 2,
    videoId: '9eW5zIOCjOw',
    title: 'LAMENTO BOLIVIANO',
    description: 'Los Enanitos Verdes',
    image: 'https://i.ytimg.com/vi/xFYyL5FBK2o/maxresdefault.jpg',
  },
  {
    id: 3,
    videoId: 'bUJLdaxJlD8',
    title: 'Devuélveme a mi chica',
    description: 'Hombres G video de la pelicula',
    image: 'https://i.ytimg.com/vi/74g-JbPyH5M/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-BIAC4AOKAgwIABABGDUgOyh_MA8=&rs=AOn4CLCBDz6sDzqzPvcVr0YVLFseAFy45w',
  },
  {
    id: 4,
    videoId: 'OX-us7PEfkc',
    title: 'De Musica Ligera',
    description: 'Lo mejor de Soda Stereo.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYRdtV8YafuqQZ55Lf5xut_WtaEiv9DZvocQ&s',
  },
  {
    id: 1,
    videoId: 'TVyLcqNg5lY',
    title: 'Calmar La Mente',
    description: 'Relaja tu mente con este sonido.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCws0nYtv_mvMioOR8aoHHL-gGEPzEnYJ47g&s', // URL de la imagen
  },
  {
    id: 2,
    videoId: '9eW5zIOCjOw',
    title: 'LAMENTO BOLIVIANO',
    description: 'Los Enanitos Verdes',
    image: 'https://i.ytimg.com/vi/xFYyL5FBK2o/maxresdefault.jpg',
  },
  {
    id: 3,
    videoId: 'bUJLdaxJlD8',
    title: 'Devuélveme a mi chica',
    description: 'Hombres G video de la pelicula',
    image: 'https://i.ytimg.com/vi/74g-JbPyH5M/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-BIAC4AOKAgwIABABGDUgOyh_MA8=&rs=AOn4CLCBDz6sDzqzPvcVr0YVLFseAFy45w',
  },
  {
    id: 4,
    videoId: 'OX-us7PEfkc',
    title: 'De Musica Ligera',
    description: 'Lo mejor de Soda Stereo.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYRdtV8YafuqQZ55Lf5xut_WtaEiv9DZvocQ&s',
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
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 20px;
  justify-content: center;
  align-items: start;
  margin-top: 16px;
}

.sound-list > * {
  /* display: flex; */
  justify-content: center;
}
.genre-image {
  width: 200px;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}
</style>
