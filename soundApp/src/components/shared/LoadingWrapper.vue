<!-- src/components/LoadingWrapper.vue -->
<template>
  <div>
    <BaseLauding :loading="loading" />

    <slot v-if="!loading" />
  </div>
</template>

<script setup>

import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import BaseLauding from './BaseLauding.vue';

const loading = ref(false);
const route = useRoute();


watch(
  () => route.path,
  () => {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
    }, 400);  // Puedes ajustar el tiempo de carga
  }
);
</script>
