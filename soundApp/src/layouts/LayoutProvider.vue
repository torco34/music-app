<!-- <template>
  <component :is="layoutComponent"></component>
</template>

<script setup>
import { useAuthStore } from "src/stores/storeAuth/AuthStore.js";
import { computed } from "vue";
import HeaderLayout from "./HeaderLayout.vue";
import MainLayout from "./MainLayout.vue";
const authStore = useAuthStore();

const layoutComponent = computed(() =>
  authStore.user ? HeaderLayout : MainLayout
);

console.log(layoutComponent, "layoutComponent");
</script> -->
<template>
  <component :is="layoutComponent"></component>
</template>

<script setup>
import { useAuthStore } from "src/stores/storeAuth/AuthStore.js";
import { computed } from "vue";
import HeaderLayout from "./HeaderLayout.vue";
import MainLayout from "./MainLayout.vue";

const authStore = useAuthStore();

const layoutComponent = computed(() =>
  authStore.user ? HeaderLayout : MainLayout
);
</script>
