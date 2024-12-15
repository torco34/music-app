<template>
  <div class="history-page q-pa-m">
    <div class="page-header">
      <q-btn
        flat
        color="primary"
        size="23"
        round
        icon="more_vert"
        @click="toggleMenu"
        aria-label="Opciones"
      />
      <q-menu color="primary" v-model="menuVisible">
        <q-list style="min-width: 150px; color: black">
          <q-item clickable @click="editProfile">
            <q-item-section avatar>
              <q-icon name="edit" />
            </q-item-section>
            <q-item-section>Editar Perfil</q-item-section>
          </q-item>
          <q-item clickable @click="copyLink">
            <q-item-section avatar>
              <q-icon name="link" />
            </q-item-section>
            <q-item-section>Copiar Enlace</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
      <p class="page-subtitle q-mt-lg">
        Explora tu historial y tus videos favoritos
      </p>
    </div>

    <div>

      <!-- <HistorialBody :name="profileName" :videos="history" /> -->
      <HistorialBody :videos="history" :name="profileName" />


    </div>
    <div class="text-center">
      <div class="section">
    <h2 class="section-title">Lista de Videos</h2>

  </div>
    </div>
    <div class="artists-list">
      <div v-for="artist in artists" :key="artist.name" class="artist-item">
        <img :src="artist.image" :alt="artist.name" class="artist-image" />
        <div class="artist-info">
          <h3 class="artist-name">{{ artist.name }}</h3>
          <p class="artist-description">{{ artist.description }}bb</p>
        </div>
      </div>
    </div>
    <div class="section">
      <h2 class="section-title">Favoritos de la Semana</h2>
      <div class="favorites-grid">
        <div v-for="video in favorites" :key="video.id" class="favorite-item">
          <img
            :src="video.thumbnail"
            :alt="video.title"
            class="video-thumbnail"
          />
          <h3 class="video-title">{{ video.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { onMounted, ref } from "vue";
import HistorialBody from "./subcomponetBody/HistorialBody.vue";

import { useAuthStore } from 'src/stores/storeAuth/AuthStore.js';
const authStore = useAuthStore();
const profileName = ref(authStore.user?.username || 'Usuario');

import { useItemsBodyStore } from "src/stores/homeStores/storeItemsBody";
const Items = useItemsBodyStore()
const video = ref([]);
const dataJson = ref([]);
const menuVisible = ref(false);
const $q = useQuasar();
const loadItemsBody = async () => {
  try {
    const res = await Items.loadItemsBody();
  // Agrega este log para inspeccionar el contenido
    dataJson.value = {
      videos: video.value.getTitles(),  // Aquí está el problema si `getTitles` no existe
      genres: dataItemsBody.getItemsBody(),
      playlists: dataItemsBody.getPlayLists(),
      banner: dataItemsBody.getBanner(),
    }

  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
};


onMounted(async () => {
  await loadItemsBody();
});
const toggleMenu = () => {
  menuVisible.value = menuVisible.value;
};


const editProfile = () => {
  $q.notify({ type: "info", message: "Editar perfil" });
};

const copyLink = () => {
  navigator.clipboard.writeText(window.location.href).then(() => {
    $q.notify({ type: "positive", message: "Enlace copiado" });
  });
};
// Datos simulados


const history = ref([
  {
    id: 3,
    title: "Maluma",
    date: "2024-10-22",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTffDA6Jl2ANF6lnzXoRZtcVQMi1LZZPZOL_g&s",
  },
  {
    id: 4,
    title: "Karol G",
    date: "2024-10-20",
    thumbnail:
      "https://i.ytimg.com/vi/MgsdDfdGdHc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCuXwg1d6wmSm5YIg01htl2UeDvpw",
  },
  {
    id: 3,
    title: "J Balvin",
    date: "2024-10-22",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSipiA1nclPUEZ8rp5dyA2gsKtup_VThnX8gw&s",
  },
  {
    id: 4,
    title: "Maelo Ruiz",
    date: "2024-10-20",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbaDkkyMtlTBXFYQYLuQESns90NkhvXj_zfQ&s",
  },
  {
    id: 3,
    title: "Wille Ganzalez",
    date: "2024-10-22",
    thumbnail: "https://i.ytimg.com/vi/OBJucdSeO50/maxresdefault.jpg",
  },
  {
    id: 4,
    title: "Shakira",
    date: "2024-10-20",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzpbEs2wC_-FHk8sI-7SR1KMRyorclsUvNQ&s",
  },
  {
    id: 3,
    title: "Adele",
    date: "2024-10-22",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTanFZZiHD8upeaQ1iT18M2cAJF3RyZzwe3lw&s",
  },
  {
    id: 4,
    title: "marbel",
    date: "2024-10-20",
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaP7QGb1p7ElTCsl-6-uAGzfTjTV-83f0pPQ&s",
  },
]);

const favorites = ref([
  {
    id: 5,
    title: "Video Favorito 1",
    thumbnail: "https://via.placeholder.com/200",
  },
  {
    id: 6,
    title: "Video Favorito 2",
    thumbnail: "https://via.placeholder.com/200",
  },
  {
    id: 5,
    title: "Video Favorito 1",
    thumbnail: "https://via.placeholder.com/200",
  },
  {
    id: 6,
    title: "Video Favorito 2",
    thumbnail: "https://via.placeholder.com/200",
  },
  {
    id: 5,
    title: "Video Favorito 1",
    thumbnail: "https://via.placeholder.com/200",
  },
  {
    id: 6,
    title: "Video Favorito 2",
    thumbnail: "https://via.placeholder.com/200",
  },
  {
    id: 5,
    title: "Video Favorito 1",
    thumbnail: "https://via.placeholder.com/200",
  },
  {
    id: 6,
    title: "Video Favorito 2",
    thumbnail: "https://via.placeholder.com/200",
  },

]);


</script>

<style scoped>
.history-page {
  /* max-width: 1200px; */
  margin-top: 1rem;
  padding: 1rem;
  /* border: solid red 1px; */
}

.page-header {
  position: relative;
  height: 2.6rem;
  /* border: solid rgb(0, 255, 13) 1px; */
}
.menu {
  position: absolute;
  top: 10px;
  right: 10px;
}
.page-title {
  font-size: 2rem;
  font-weight: bold;
}

.page-subtitle {
  font-size: 1rem;
  color: #666;
  font-weight: 500;
}

.section {
  margin-bottom: 30px;

  /* border: solid 1px #bb1c1c; */
}

.section-title {
  /* border: solid 1px #271cbb; */
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-weight: bold;
}

.video-thumbnail {
  width: 50%;

  height: auto;
  border-radius: 50%;
  /* margin-bottom: 10px; */
  /* border:solid red; */
}

.video-info {
  text-align: center;
  border: solid red;
}

.video-title {
  font-size: 1rem;
  margin: 5px 0;
}

.favorites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(37px, 1fr));
}

.video-historia {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(37px, 1fr));
}
.favorite-item {
  text-align: center;
}

.video-thumbnail-small {
  width: 50px;
  height: auto;
  color: aliceblue;
  border-radius: 50%;
  /* border: solid 1px #271cbb; */
}
</style>
