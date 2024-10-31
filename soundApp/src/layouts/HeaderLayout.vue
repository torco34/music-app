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
          v-model="search"
          input-class=""
          class="q-mx-lg col text-white"
          placeholder="Buscar tu musica"
        >
          <template v-slot:prepend>
            <q-icon v-if="search === ''" name="search" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer text-white"
              @click="search = ''"
            />
          </template>
        </q-input>

        <div class="flex items-center">
          <div class="text-body3 text-body__bosq xs-hide q-mx-xl">
            Bienvenida {{ authStore.user?.username }}
          </div>
          <q-btn
            round
            dense
            flat
            class="q-mx-xl icons-style"
            icon="notifications"
          >
            <q-badge color="primary" text-color="white" floating> 1 </q-badge>
            <q-menu anchor="bottom left" self="top left">
              <q-item clickable to="/perfil">
                <q-item-section>item jsdncj1</q-item-section>
              </q-item>
            </q-menu>
          </q-btn>

          <!--  -->
          <q-btn round flat>
            <q-avatar size="56px">
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
        <!-- <q-img class="q-my-xl" width="122px" src="~assets/BOSQUE-NAGAL-ARBOL.png" /> -->
        <q-list>
          <q-item
            v-for="link in navsWithoutChildren"
            :key="link.label"
            clickable
            dense
            :to="link.to"
            class="q-px-lg"
          >
            <q-item-section class="col-auto">
              <q-icon size="24px" color="primary" :name="link.icon" />
            </q-item-section>
            <q-item-section class="text-left">
              <q-item-label class="text-grey">{{ link.label }}</q-item-label>
            </q-item-section>
          </q-item>
          <MenuItemLink
            v-for="link in musicMenuLinks"
            :key="link.title"
            elevated
            v-bind="link"
          />

          <q-item class="q-px-xl settings-item">
            <q-item-section class="col-auto q-mr-xs">
              <q-icon size="28px" name="mdi-cog-outline" color="bg-text" />
            </q-item-section>
            <q-item-section class="text-left">
              <q-item-label class="">Settings</q-item-label>
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
      texto blanco
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
import { ref } from "vue";
import { musicMenuLinks } from "../models/musicMenuLinks";
import FooterSound from "./FooterSound.vue";
import { useAuthStore } from "src/stores/storeAuth/AuthStore.js";
const search = ref("");
console.log("useAuthStore", useAuthStore);
const authStore = useAuthStore();
console.log(authStore.user?.username, "iwjiwk");
const leftDrawerOpen = ref(false);
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
  // background-color: $secondary ;
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
