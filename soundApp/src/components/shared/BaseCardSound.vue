<template>
  <div class="base-card-sound">
    <!-- Reproductor de video -->
    <div class="media-player" v-if="isPlaying">
      <iframe
        width="100%"
        height="200"
        :src="`https://www.youtube.com/embed/${videoId}?autoplay=1`"
        title="YouTube video player"
        frameborder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <!-- Imagen del card -->
    <div
      class="card-image"
      :class="{ 'is-playing': isPlaying }"
      v-else
    >
      <img :src="thumbnailUrl" alt="Imagen previa del video" />
    </div>

    <!-- Contenido del card -->
    <div class="card-content">
      <h3 class="q-text-sm">{{ title }}</h3>
      <p>{{ description }}</p>
    </div>

    <!-- Acciones del card -->
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
  thumbnailUrl: {
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
  if (navigator.share) {
    navigator.share({ title: 'Compartir', text: shareText, url }).catch((err) =>
      console.error('Error al compartir:', err)
    );
  } else {
    alert(`No se pudo compartir automáticamente. Copia este enlace: ${url}`);
  }
};
</script>

<style scoped>
.base-card-sound {
  display: flex;
  flex-direction: column;
  background-color: rgba(14, 0, 14, 0.9);
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  /* gap: 16px; */
}

.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.card-image.is-playing {
  transform: scale(1.2);
  opacity: 0.5;
}
.card-content  {
  display: flex;
  flex-direction: column;
  letter-spacing: -0.5px;

}
.card-content h3 {
  letter-spacing: -0.5px;
  font-size: 16px;
  color: #dfdbdb;
  font-weight: bold;

}

.card-content p {
  color: #aaa;
  letter-spacing: -0.5px;
}

.card-actions {
  margin-top: 1px;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.q-btn {
  min-width: 100px;
}
</style>
