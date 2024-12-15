<template>
  <div v-if="loading" class="loading-container">
    <q-spinner size="60px" color="primary" class="spinner" />
    <p class="loading-text">Cargando...</p>
  </div>
</template>

<script setup>
defineProps({
  loading: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
.loading-container {
  text-align: center;
  padding: 20px;
}

.loading-text {
  margin-top: 10px;
  font-size: 1rem;
  color: #666;
}
</style>
