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
    <div class="card-image" :class="{ 'is-playing': isPlaying }" v-else>
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
        color="primary"
        @click="togglePlay"
        v-if="!isPlaying"
      />
      <q-btn
        flat
        icon="pause"
        color="grey"
        @click="togglePlay"
        v-if="isPlaying"
      />

      <q-btn icon="more_vert" flat color="grey" icon-color="blue">
        <q-menu>
          <q-list>
            <q-item clickable @click="emitRemoveFromHistory">
              <q-item-section avatar>
                <q-icon name="delete" color="primary" />
              </q-item-section>
              <q-item-section>
                {{ removeText }}
              </q-item-section>
            </q-item>
            <q-item clickable @click="emitShareContent">
              <q-item-section avatar>
                <q-icon name="share" color="grey" />
              </q-item-section>
              <q-item-section>
                {{ shareText }}
              </q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>
  </div>
</template>

<script setup>


// Props para recibir datos dinámicos
const props = defineProps({
  videoId: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  removeText: {
    type: String,
    default: "Quitar de la historia",
  },
  shareText: {
    type: String,
    default: "Compartir",
  },
  isPlaying: { type: Boolean, required: true },
});

// Emitir eventos para comunicación con el componente padre
const emit = defineEmits([
  "remove-from-history",
  "share-content",
  "reproducir-video",
]);



const togglePlay = () => {
  emit("reproducir-video", props.videoId);
};

// Emitir evento para eliminar de la historia
const emitRemoveFromHistory = () => {
  emit("remove-from-history", props.videoId);
};

// Emitir evento para compartir el contenido
const emitShareContent = () => {
  emit("share-content", {
    videoId: props.videoId,
    title: props.title,
    url: `https://www.youtube.com/watch?v=${props.videoId}`,
  });
};
</script>

<style scoped>
.base-card-sound {
  display: flex;
  flex-direction: column;

  border-radius: 18px;
  padding: 10px;
}
.base-card-sound:hover {
  display: flex;
  flex-direction: column;
  background-color: rgba(66, 65, 66, 0.3);
  border-radius: 18px;

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

.card-content {
  height: 100px;
  color: #aaa;
}

.card-content h3 {
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: -10px;
}

.card-actions {
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin-bottom: 20px;
}

.q-btn {
  min-width: 100px;
}
.q-list {
  min-width: 10px;
  color: #aaa;
}

.q-item {
  font-size: 14px;
  background-color: #292828;
}
</style>
