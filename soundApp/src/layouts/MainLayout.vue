<template>
  <q-layout view="hHh LpR lFf">
    <q-header class="flex items-center justify-around fixed-header" elevated>
      <q-btn
        flat
        dense
        round

:icon="leftDrawerOpen ? 'close' : 'menu'"
        @click="toggleDrawer"
        class="q-mx-sm xl-hide btn-layout floating-button"
      />
      <div><BaseIcon /></div>
      <div><HomeSearch /></div>
      <div><AuthContainerForm /></div>
    </q-header>


     <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      class="bg-secondary"
      :width="screenWidth > 1024 ? 400 : 300"
    >
      <div class="text-center">
        <q-list class="q-pb-gl">
          <q-item-label
            class="colores text-h5 flex q-px-lg items-center color-bli"
          >
            <q-icon
              size="30px"
              color="primary"
              name="local_library"
              class="q-mx-sm"
            />Tu Biblioteca
          </q-item-label>
          <q-item
            v-for="link in musicItems"
            :key="link.name"
            clickable
            dense
            :to="link.to"
            class="q-mb-sm bg-inf q-pa-lg"
          >
            <q-item-section class="text-left q-pa-sm">
              <q-item-label class="color-text">{{ link.name }}</q-item-label>
              <q-item-label class="text-grey q-pa-lg">{{
                link.subtitle
              }}</q-item-label>
              <q-btn
                v-if="
                  link.name === 'Crear tu propia Playlist' ||
                  link.name === 'Encuentra podcasts que quieras seguir'
                "
                class="glossy q-mx-sm styles-button"
                color="secondary"
                text-color="primary"
                rounded
                :label="link.textButton"
                @click="(event) => changeButtonLabel(link.id, event)"
              />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>

    <q-page-container>
      <q-page>
        <router-view />
      </q-page>
    </q-page-container>

    <FooterSound />
  </q-layout>
</template>
<script setup>
import AuthContainerForm from "src/components/form/AuthContainerForm.vue";
import HomeSearch from "src/components/home/HomeSearch.vue";
import BaseIcon from "src/components/shared/BaseIcon.vue";
import { onMounted, onUnmounted, ref } from "vue";
import FooterSound from "../layouts/FooterSound.vue";
import { miniLayoutStore } from "/src/stores/storeHome/storeMiniLayout.js";

const dataMiniLayoutStore = miniLayoutStore(); // Inicializa el store
const musicItems = ref([]);
const leftDrawerOpen = ref(true);
const screenWidth = ref(window.innerWidth);
onMounted(async () => {
  await loadItems();
});
// const screenWidth = ref(window.innerWidth);

function updateScreenWidth() {
  screenWidth.value = window.innerWidth;
}
function toggleDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth);
});

// Computed para detectar si es una pantalla grande

async function loadItems() {
  try {
    await dataMiniLayoutStore.loadMiniLayout();
    musicItems.value = dataMiniLayoutStore.getMiniLayout();
  } catch (error) {
    console.error("Error al cargar los elementos:", error);
  }
}
const changeButtonLabel = (id, event) => {
  console.log("Cambiando label...${id}", id, event);
};
</script>

<style lang="scss" scoped>
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  // z-index: 5;
  background-color: transparent;

}

.q-page-container {
  padding-top: 70px;
}

.color-text {
  color: rgba(245, 241, 248, 0.9);
  font-size: 16px;
  font-weight: bold;
}
.floating-button{
margin: 10px;
  color: #6200ea; /* Color del texto */
  border-radius: 50%; /* Forma circular */
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  backdrop-filter: blur(20px);
  background-color: rgba(234, 223, 238, 0.6);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3); /* Sombra flotante */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Animación suave */
  z-index: 100; /* Asegura que esté por encima de otros elementos */

}
.styles-button {
  font-size: 16px;
  font-weight: bold;
  text-transform: none;
  backdrop-filter: blur(20px);
  background-color: rgba(234, 223, 238, 0.6);
}
.colores {
  height: 100px;
}
// .btn-layout {
//   background: $secondary;
//   padding: 16px;
//   color: white;
//   z-index: 30;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
// }
.color-bli {
  color: rgba(245, 241, 248, 0.9);
  font-size: 16px;
  font-weight: bold;
}
</style>
