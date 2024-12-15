<template>
  <q-layout view="hHr LpR lfr" class="bg-green-radial">
    <q-header class="flex bg-header q-mt-md q-mr-xl items-center">
      <div
        class="menu-contariner q-mr-lg"
        :class="{ 'menu-open': !$q.screen.lt.md && leftDrawerOpen }"
      >
        <q-btn
          color="primary"
          dense
          flat
          round
          icon="menu"
          size="16px"
          @click="leftDrawerOpen = !leftDrawerOpen"
          class="btn-layout"
        />
      </div>
      <div class="blur-green-bg col flex text-white items-center q-pb-md">
        <q-input
          borderless
          v-model="searchQuery"
          input-class=""
          class="q-mx-lg col text-white"
          placeholder="Buscar tu musica"
           @keyup.enter="search"
        >
          <template v-slot:prepend>
            <q-icon v-if="searchQuery === ''" name="search" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer text-white"
              @click="searchQuery = ''"

            />
          </template>
        </q-input>


        <div class="flex items-center">
          <div class="text-body3 q-pt-lg text-body__bosq xs-hide q-mx-xl">
            Bienvenida {{ authStore.user?.username || 'Usuario' }}

          </div>
          <div class="q-pt-lg flex justify-center">
            <q-btn round flat class="q-ml-md">
              <q-avatar size="60px">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Profile Picture"
                />
              </q-avatar>
              <q-menu anchor="bottom left" self="top left" class="text-dark">
                <q-item clickable to="/perfil" class="text-dark">
                  <q-item-section>Perfil</q-item-section>
                </q-item>
                <q-item clickable to="/">
                  <q-item-section>
                    <a @click.prevent="logout">Cerrar Sesión</a>
                  </q-item-section>
                </q-item>
              </q-menu>
            </q-btn>
          </div>
          <div class="q-pt-md">
            <q-btn
              round
              dense
              flat
              class="q-mx-xl icons-style q-pt-lg"
              icon="notifications"
            >
              <q-badge color="primary" text-color="white" floating> 3 </q-badge>
              <q-menu anchor="bottom left" self="top left">
                <q-item clickable to="/notifica-music">
                  <q-item-section class="text-primary">items</q-item-section>
                  <q-item-section class="text-primary">items</q-item-section>
                </q-item>
              </q-menu>
            </q-btn>
          </div>
        </div>
      </div>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      class="bg-secondary"
      :width="247"
    >
      <div class="custom-left-menu q-pb-md text-center">
        <q-list>
          <MenuItemLink
            v-for="link in navMenuLinks"
            :key="link.title"
            elevated
            v-bind="link"
          />

          <q-item class="q-px-xl settings-item">
            <q-item-section class="col-auto q-mr-xs">
              <q-icon size="28px" name="mdi-cog-outline" color="bg-text" />
            </q-item-section>
            <q-item-section class="text-left">
              <q-item-label clickable to="/config-music">Settings</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>

    <q-drawer
      show-if-above
      v-model="rightDrawerOpen"
      side="right"
      :width="168"
      class="bg-secondary"
    >

      <div v-if="loading" class="loading">
      <p>Cargando videos...</p>
    </div>

    <video-list v-if="!loading && videos.length" :videos="videos" />
    <div v-if="!loading && error" class="error">{{ error }}</div>
    <div v-if="!loading && !videos.length && !error">No se encontraron videos.</div>
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
import MenuItemLink from "src/components/navegation/MenuItemLink.vue";
import { useAuthStore } from "src/stores/storeAuth/AuthStore.js";
import { useYoutubeStore } from "src/stores/useYoutubeStore.js";
import { ref } from "vue";
import menuData from '../dataJson/dataHome/dataHeaderLink.json';
import FooterSound from "./FooterSound.vue";

// menu lateral y buscador de videos
const navMenuLinks = ref(menuData.navMenuLinks);
const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);
// buscador headers api de YouTube
const searchQuery = ref('');
const getVideosStore = useYoutubeStore()
const authStore = useAuthStore();
const search = () => {
  if (searchQuery.value.trim()) {

    getVideosStore.searchVideos(searchQuery.value); // Llama a la acción

  }
};

const { videos, loading, error } = getVideosStore;


// logout
const logout = () => {
  authStore.logout();
};
</script>

<style lang="scss" scoped>
.btn-layout {
  background: $secondary;
  padding: 18px;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.bg-header {
  color: white;
  margin: 0;
  background: transparent;
  height: 100px;
}

.icons-style {
  font-size: 17px;
  color: $secondary;

}

.blur-green-bg {
  backdrop-filter: blur(20px);
  height: 100px;
  background-color: rgba(234, 223, 238, 0.6);
}

.toolbar-info {
  padding: 16px;
  margin-top: -16px;
  box-shadow: -2px 4px 7px 2px #faf7fa52;
}

.global-search.q-field__native::placeholder {
  color: $primary;
  font-weight: bold;
}

.menu-open__page {
  margin-left: 45rem;
}

.menu-contariner.menu-open {
  width: 225px;
  text-align: center;
}

.q-header .menu-contariner:not(.menu-open) {
  margin-left: 40px;
}

.q-drawer.q-drawer--left {
  border-radius: 0 0 26px 0;

  .q-item {
    margin-bottom: 10px;
  }

  .q-item.q-router-link--active,
  .q-item--active {
    color: $text;
    border-right: 5px solid $primary;

    background-color: rgba(234, 223, 238, 0.2);
  }

  .settings-item {
    position: absolute;
    bottom: 0;
  }

  &.q-drawer--on-top {
    border-radius: 56px;
  }
}

.q-drawer-container aside.q-drawer.q-drawer--left.q-drawer--standard.fixed {
  box-shadow: 1px -3px 7px 2px #b9c7be4f;
  width: 225px;
}
</style>
