<template>
  <q-page padding>


    <!-- Sección de géneros -->
    <div class="genres-section q-mt-x">
      <h5 class="text-titles-base">{{ dataJson.titles.title1 }}</h5>

      <div class="genres-grid">
        <BaseCard v-for="(genre, index) in dataJson.genres" :key="index" :imageSrc="genre.image" :title="genre.name"
          :subtitle="genre.subtitle" :link="`/genres/${genre.name.toLowerCase()}`"  @click="redirectToGenres(genre.name)"   />
      </div>
    </div>

    <!-- Listas de reproducción destacadas -->
    <div class="featured-playlists q-mt-xl">
      <h2 class="text-titles-base">{{ dataJson.titles.title2 }}</h2>

      <div class="genres-grid">
        <BaseCard v-for="(playlist, index) in dataJson.playlists" :key="index" :imageSrc="playlist.image"
          :title="playlist.name" :subtitle="playlist.subtitle"  :link="`/playlists/${playlist.name.toLowerCase()}`"   @click="redirectToPlaylist" />
      </div>

    </div>
  </q-page>
</template>

<script setup>
import { useItemsBodyStore } from "src/stores/homeStores/storeItemsBody";
import { onMounted, ref, computed } from "vue";
import BaseCard from "../shared/BaseCard.vue";
import { useRouter } from "vue-router";
import musicData from "../../dataJson/dataHome/dataHomeItems.json";
const router = useRouter();

// Datos del json

// Datos de vue

const dataItemsBody = useItemsBodyStore()


const dataJson = ref({
  titles: {
    title1: '',
    title2: ''
  },
  genres: [],
  playlists: [],
  banner: [] });
const loadItemsBody = async () => {
  try {
    await dataItemsBody.loadItemsBody();
    dataJson.value = {
      titles: dataItemsBody.getTitles(),
      genres: dataItemsBody.getItemsBody(),
      playlists: dataItemsBody.getPlayLists(),
      banner: dataItemsBody.getBanner(),
    }



    // items.value = dataHomeJson.value.genres;
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
};

onMounted(async () => {
  await loadItemsBody();
});



// import HomeBanner from "./HomeBanner.vue";
const dataHome = musicData;


const redirectToGenres = (genreName) => {

  router.push(`/genre/${genreName.toLowerCase()}`);
};
const redirectToPlaylist = (link) => {
  console.log(`/playlists/${link.toLowerCase()}`);
  router.push(link); // Usar el enlace recibido para redirigir
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
