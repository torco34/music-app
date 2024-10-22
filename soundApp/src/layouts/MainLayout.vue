<template>
  <q-layout view="hHh LpR lFf">
    <q-header class="flex items-center justify-around fixed-header" elevated>
      <div><BaseIcon /></div>
      <div><HomeSearch /></div>
      <div><AuthForm /></div>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" class="bg-secondary" :width="400">
      <div class="text-center">
        <q-list class="q-pb-gl">
          <q-item-label class="colores text-h5 flex q-px-lg items-center color-bli">
            <q-icon size="30px" color="primary" name="local_library" class="q-mx-sm" />Tu Biblioteca
          </q-item-label>
          <q-item v-for="link in musicItems" :key="link.name" clickable dense :to="link.to" class="q-mb-sm bg-inf q-pa-lg">
            <q-item-section class="text-left q-pa-sm">
              <q-item-label class="color-text">{{ link.name }}</q-item-label>
              <q-item-label class="text-grey q-pa-lg">{{ link.subtitle }}</q-item-label>
              <q-btn v-if="link.name === 'Crear tu propia Playlist' || link.name === 'Encuentra podcasts que quieras seguir'"
                class="glossy q-mx-sm styles-button" color="secondary" text-color="primary" rounded
                :label="link.textButton" @click="(event) => changeButtonLabel(link.id, event)" />
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
import AuthForm from 'src/components/form/AuthForm.vue';
import HomeSearch from 'src/components/home/HomeSearch.vue';
import BaseIcon from 'src/components/shared/BaseIcon.vue';
import { onMounted, ref } from 'vue';
import FooterSound from '../layouts/FooterSound.vue';

import { miniLayoutStore } from '/src/stores/storeHome/storeMiniLayout.js';

const dataMiniLayoutStore = miniLayoutStore(); // Inicializa el store
const musicItems = ref([]);
const leftDrawerOpen = ref(true);

onMounted(async () => {
  await loadItems();
});

async function loadItems() {
  try {
    await dataMiniLayoutStore.loadMiniLayout();
    musicItems.value = dataMiniLayoutStore.getMiniLayout();

  } catch (error) {
    console.error('Error al cargar los elementos:', error);
  }
}
const changeButtonLabel = (id, event) =>{

  console.log('Cambiando label...${id}',id, event);

}
</script>

<style lang="scss" scoped>
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: transparent;
  height: 70px;
}

.q-page-container {
  padding-top: 70px;

}

.color-text {
  color: rgba(245, 241, 248, 0.9);
  font-size: 16px;
  font-weight: bold;


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

.color-bli {
  color: rgba(245, 241, 248, 0.9);
  font-size: 16px;
  font-weight: bold;
}
</style>
