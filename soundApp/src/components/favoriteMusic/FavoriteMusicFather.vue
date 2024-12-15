<template>
<div class="podcast">
  <BaseCardPodcast
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
</template>

<script setup>
import { useQuasar } from 'quasar';
import { alertNotify } from 'src/stores/alertNotify';
import { onMounted, ref } from 'vue';
import BaseCardPodcast from '../shared/BaseCardPodcast.vue';

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

  alertMessage.showAlert('¡No se ha habilitado esta función!', 'negativa', $q);
};

const handleShareContent = (data) => {

  alertMessage.showAlert('¡No se ha habilitado esta función!', 'primary', $q);
};

const handleReproducirVideo = (videoId) => {
  if (currentVideoId.value === videoId) {
    currentVideoId.value = null;
  } else {
    currentVideoId.value = videoId;
  }
};

onMounted(() => {

});
</script>
<style scoped>
.sound-list{
  display: flex
}
.artists-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

</style>
