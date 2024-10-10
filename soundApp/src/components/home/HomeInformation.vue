<template>
  <q-page padding>


    <!-- Sección de géneros -->
    <div class="genres-section q-mt-x">
      <h5 class="text-titles-base">{{ dataHome.title1 }}</h5>
      <div class="genres-grid">
        <BaseCard v-for="(genre, index) in dataHome.genres" :key="index" :imageSrc="genre.image" :title="genre.name"
          :subtitle="genre.subtitle" :link="`/genres/${genre.name.toLowerCase()}`" />
      </div>
    </div>

    <!-- Listas de reproducción destacadas -->
    <div class="featured-playlists q-mt-xl">
      <h2 class="text-titles-base">{{ dataHome.title2 }}</h2>
      <div class="genres-grid">
        <BaseCard v-for="(playlist, index) in dataHome.playlists" :key="index" :imageSrc="playlist.image"
          :title="playlist.name" :subtitle="playlist.subtitle" :link="`/playlists/${playlist.name.toLowerCase()}`" />
      </div>

    </div>
  </q-page>
</template>

<script setup>
import { useRouter } from "vue-router";


// Datos de vue
const router = useRouter();
// Datos de componentes
import BaseCard from "../shared/BaseCard.vue";
// Datos del json
import musicData from "../../data/home/dataHome";
// import HomeBanner from "./HomeBanner.vue";
const dataHome = musicData;

//lógica
const navigateExplore = (route) => {
  router.push(route);
};
</script>

<style scoped>
.genres-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}



.section-title {
  margin-bottom: 20px;
}
</style>
