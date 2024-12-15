<template>
  <div class="container">
    <div class="podcast-card">
      <div class="flex">
        <div v-if="isPlaying">
          <iframe
            class="podcast-image"
            :src="`https://www.youtube.com/embed/${videoId}?autoplay=1`"
            title="YouTube video player"
            frameborder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <div class="card-image" :class="{ 'is-playing': isPlaying }" v-else>
          <img
            :src="thumbnailUrl"
            alt="Imagen previa del video"
            class="podcast-image"
          />
        </div>
        <div class="podcast-info q-mx-lg">
          <h3 class="podcast-name">{{ title }}</h3>
          <p>{{ description }}</p>
        </div>
      </div>
      <div class="flex justify-end podcast-actions">
        <!-- Acciones -->
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
          <div class="artist-actions">

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
      </div>
    </div>
  </div>
</template>

<script setup>

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

// Emitir eventos hacia el componente padre
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
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}
.podcast-card {
  display: flex;
  align-items: center;
  margin: 10px;
  justify-content: space-between;
  width: 90%;
  background: rgba(37, 36, 36, 0.2);
  border-radius: 10px;
  padding: 10px;

}
.podcast-card:hover {

  background: rgba(75, 73, 73, 0.3);
  /* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3); */
}
.podcast-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  /* margin-bottom: 10px; */

}
.podcast-info {
  text-align: center;
color: #aaa;
}
.podcast-name {
  font-size: 1rem;
  margin-bottom: 5px;
  font-weight: bold;
}
.card-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.podcast-actions {
  width: 70%;
}
.q-list{
  background: #1f1e1e ;
}
.artist-actions{
  margin-left: 10px;
}
</style>
