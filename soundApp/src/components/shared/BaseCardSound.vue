<template>
  <div class="base-card-sound">


    <div class="media-player">
      <iframe
        v-if="isPlaying"
        width="100%"
        height="150"
        :src="`https://www.youtube.com/embed/${videoId}?autoplay=1`"
        title="YouTube video player"
        frameborder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="card-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
    <div class="card-actions">
      <q-btn
        icon="play_arrow"
        flat
        label="Reproducir"
        color="primary"
        @click="togglePlay"
        v-if="!isPlaying"
      />
      <q-btn
      flat
        icon="pause"
        label="Pausar"
        color="grey"
        @click="togglePlay"
        v-if="isPlaying"
      />
      <q-btn
        icon="favorite"
        class=" "
        flat
        :color="isFavorite ? 'red' : 'grey'"
        @click="toggleFavorite"
        label="Me gusta"
      />
      <q-btn
        icon="share"
  flat
        label="Compartir"
        color="positive"
        icon-color="blue"
        @click="shareContent"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  videoId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const isPlaying = ref(false);
const isFavorite = ref(false);

const togglePlay = () => {
  isPlaying.value = !isPlaying.value;
};

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};

const shareContent = () => {
  const url = `https://www.youtube.com/watch?v=${videoId}`;
  const shareText = `¡Mira este contenido: ${title}! ${url}`;
  navigator.share
    ? navigator.share({ title: 'Compartir', text: shareText, url })
    : alert(`No se pudo compartir automáticamente. Copia este enlace: ${url}`);
};
</script>

<style scoped>
.base-card-sound {
  display: grid;
  justify-self: start;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  background-color: #4d4a4a;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.card-content h3 {
  margin: 0;
  font-size: 1.5rem;
  color: #dfdbdb;
}

.card-content p {
  margin: 8px 0;
  color: #666;
}

.card-actions {
  margin-top: 16px;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.q-btn {
  min-width: 100px;
}
</style>
