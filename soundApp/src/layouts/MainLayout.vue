<template>
  <q-layout view="hHh LpR lFf">
    <q-header class="flex items-center justify-around fixed-header" elevated>
      <q-btn
        flat
        dense
        round
        @click="toggleDrawer"
        class="q-mx-sm xl-hide btn-layout floating-button"
      />
      <div><BaseIcon /></div>
      <div><HomeSearch /></div>
      <div><AuthForm /></div>
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
            v-for="(item, index) in jsonData"
            :key="index"
            clickable
            dense
            :to="item.to"
            class="q-mb-sm bg-inf q-pa-lg"
          >
            <q-item-section class="text-left q-pa-sm">
              <q-item-label class="color-text">{{ item.name }}</q-item-label>
              <q-item-label class="text-grey q-pa-lg">{{
                item.subtitle
              }}</q-item-label>
              <q-btn
                v-if="
                  item.name === 'Crear tu propia Playlist' ||
                  item.name === 'Encuentra podcasts que quieras seguir'
                "
                class="glossy q-mx-sm styles-button"
                color="secondary"
                text-color="primary"
                rounded
                :label="item.textButton"
                @click="(event) => handleCrearList(item.id, event)"
              />
            </q-item-section>
          </q-item>
        </q-list>
        <BaseModal
  :isOpen="showModal"
  :title="'Atención'"
  @close="showModal = false"
>
  <template #default>
    <p>{{ modalMessage }}</p>
  </template>
</BaseModal>

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
import AuthForm from "src/components/form/AuthForm.vue";
import HomeSearch from "src/components/home/HomeSearch.vue";
import BaseIcon from "src/components/shared/BaseIcon.vue";
import { useJsonDataStore } from "src/stores/mainLayoutStore";
import { onMounted, onUnmounted, ref } from "vue";
import FooterSound from "../layouts/FooterSound.vue";
import BaseModal from "src/components/shared/BaseModal.vue";

const showModal = ref(false);
const modalMessage = ref('');
const isUserRegistered = ref(false);
const jsonDataStore = useJsonDataStore();
const jsonData = ref([]);
const leftDrawerOpen = ref(true);
const screenWidth = ref(window.innerWidth);

// función del store trae json
const loadData = async () => {
  try {
    await jsonDataStore.loadJsonData();
    jsonData.value = jsonDataStore.getJsonDataSave();
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
};

onMounted(async () => {
  await loadData();
});


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



const handleCrearList = (id) => {
  // alert(id)
  if (!isUserRegistered.value) {

    modalMessage.value = 'Por favor, regístrate para utilizar esta funcionalidad.';
    showModal.value = true;
  } else {
    alert(`Creando lista con ID: ${id}`);
  }
};
</script>

<style lang="scss" scoped>
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

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
  color: #6200ea;
  border-radius: 50%;
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

.color-bli {
  color: rgba(245, 241, 248, 0.9);
  font-size: 16px;
  font-weight: bold;
}
</style>
