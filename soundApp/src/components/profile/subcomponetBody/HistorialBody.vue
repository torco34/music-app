
<template>
  <div class="section">
    <h2 class="section-title">Historial de {{ name }}</h2>

    <div class="video-historia">
      <div v-for="video in videos" :key="video.id" class="text-center">
        <div class="grid">
          <a
            :href="`https://www.youtube.com/watch?v=${video.id}`"
            target="_blank"
            class="thumbnail-container"
          >
            <img
              :src="video.thumbnail"
              :alt="video.title"
              class="video-thumbnail-small"
            />
            <div class="play-icon">&#9658;</div>
            <!-- Ícono de reproducción -->
          </a>
          <p >{{ video.title }}</p>
          <p class="text-primary">{{ video.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  videos: {
    type: Array,
    default: () => [],
  },
  name: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.section-title {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 100px;
}

.video-thumbnail-small {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

.video-historia {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
  gap: 1rem;
}

.thumbnail-container {
  position: relative;
  display: inline-block;
}

.play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: #f2f0f7;
  height: 100%;
  width: 100%;
  opacity: 0;
  pointer-events: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(17, 16, 17, 0.5);
  transition: opacity 0.3s ease; /* Efecto de transición */
}

.thumbnail-container:hover .play-icon {
  opacity: 0.8;
}
</style>
