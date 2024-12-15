<template>
  <q-page padding>
    <h2 class="q-mt-lg q-mb-md text-h3 text-gradient q-pa-sm text-grey">
      Historial de reproducciones
    </h2>
    <div class="sound-list">
      <BaseCardSound
        v-for="video in videos"
        :key="video.id"
        :video-id="video.videoId"
        :thumbnail-url="video.image"
        :title="video.title"
        :description="video.description"
        :isPlaying="currentVideoId === video.videoId"
        @reproducir-video="handleReproducirVideo"
        @remove-from-history="handleRemoveFromHistory"
        @share-content="handleShareContent"
      />
    </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from 'quasar';
import BaseCardSound from 'src/components/shared/BaseCardSound.vue';
import { alertNotify } from 'src/stores/alertNotify';
import { onMounted, ref } from 'vue';
const $q = useQuasar()
const alertMessage = alertNotify()
const videos = [
  {
    id: 1,
    videoId: 'TVyLcqNg5lY',
    title: 'Calmar La Mente',
    description: 'Relaja tu mente con este sonido.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCws0nYtv_mvMioOR8aoHHL-gGEPzEnYJ47g&s',
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

];

const currentVideoId = ref(null);

const handleRemoveFromHistory = (videoId) => {
  // alert( videoId)
  alertMessage.showAlert('¡Este es un mensaje de alerta!', 'positive')
  alertMessage.showAlert('¡Este es un mensaje de alerta!', 'positive', $q)
};

const handleShareContent = (data) => {
  alertMessage.showAlert('¡Este es un mensaje de alerta!', 'positive', )
};

const handleReproducirVideo = (videoId) => {
  if (currentVideoId.value === videoId) {
    currentVideoId.value = null; // Pausar si el video ya está en reproducción
  } else {
    currentVideoId.value = videoId; // Reproducir el video seleccionado
  }
};

onMounted(() => {
  // Si deseas reproducir un video por defecto al montar el componente, puedes hacerlo aquí.
  // handleReproducirVideo('TVyLcqNg5lY'); // Reemplaza con el video que quieras reproducir por defecto.
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
