<template>
  <q-layout view="hHh LpR lFf">
    <!-- Header fijo -->
    <q-header class="flex items-center justify-around  fixed-header" elevated>
      <!-- <q-container class="row items-center justify-center" style="flex: 1;"> -->
      <div>
        <BaseIcon />
      </div>
      <div>

        <HomeSearch />
      </div>

      <div>
        <AuthForm />
      </div>


    </q-header>

    <!-- Botón para abrir/cerrar el Drawer -->
    <q-btn icon="menu" color="primary" dense flat round size="16px" @click="toggleDrawer" class="drawer-button"
      style="position: fixed; top: 10px; left: 20px;" />

    <!-- Drawer único -->
    <q-drawer v-model="leftDrawerOpen" side="left" :width="leftDrawerOpen ? 260 : 260" class="bg-secondary">
      <div class="q-pb-md custom text-center">
        <q-list>
          <q-item v-for="link in navsWithoutChildren" :key="link.label" clickable dense :to="link.to" class="q-px-lg">
            <q-item-section class="col-auto">
              <q-icon size="24px" color="primary" :name="link.icon" />
            </q-item-section>
            <!-- Mostrar texto solo si el drawer está abierto -->
            <q-item-section v-if="leftDrawerOpen" class="text-left">
              <q-item-label class="text-grey">{{ link.label }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>

    <!-- Contenedor de la página principal -->
    <q-page-container>
      <q-page>
        <router-view />
      </q-page>
    </q-page-container>

    <!-- Footer -->
    <!-- <FooterSound /> -->
  </q-layout>
</template>

<script setup>

import AuthForm from 'src/components/form/AuthForm.vue';
import HomeSearch from 'src/components/home/HomeSearch.vue';
import BaseIcon from 'src/components/shared/BaseIcon.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const leftDrawerOpen = ref(false); // Estado inicial del drawer (cerrado)
const registerModal = ref(null);
const navsWithoutChildren = [
  { label: 'Home', icon: 'home', to: '/' },
  { label: 'Rock', icon: 'info', to: 'private/rock' },
  { label: 'Pop', icon: 'contact_mail', to: 'musica' },
  { label: 'Crear tu propia Playlis', icon: 'contact_mail', to: 'musica' }
];

// Función para alternar el estado del drawer
const toggleDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value; // Alternar el estado del drawer
};

// Funciones de navegación
const handleRegister = () => {
  router.push('/private/rock'); // Redirige a la página de registro
};

const handleInicio = () => {
  router.push('/private/inicio'); // Redirige a la página de inicio de sesión
};
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
  /* Deja espacio para el header fijo */
}

.drawer-button {
  z-index: 20;
  backdrop-filter: blur(20px);
  background-color: rgba(234, 223, 238, 0.6);
}
</style>
