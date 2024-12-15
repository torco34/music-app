<template>
  <div class="card-list">
    <BaseCard
      v-for="card in cards"
      :key="card.id"
      :imageSrc="card.imageSrc"
      :title="card.title"
      :subtitle="card.subtitle"
      :link="card.link"
       @click="handleCardClick(card)"
    />
  </div>
<div>
  <BaseModal
      :isOpen="showModal"
      :title="'Atención'"
      @close="showModal = false"
    >
      <template #default>
        <p>{{ modalMessage }} que es</p>
      </template>
    </BaseModal>
</div>
</template>

<script setup>
import { ref } from 'vue';

import { useAuthStore } from "src/stores/storeAuth/AuthStore.js";
import dataFeature from '../../dataJson/dataHome/dataFeatured.json'; // Asegúrate de que el archivo tenga la extensión .json
import BaseCard from '../shared/BaseCard.vue'; // Asumiendo que tienes el componente BaseCard
import BaseModal from '../shared/BaseModal.vue';
const cards = ref(dataFeature.dataFeature); // Directamente usando el archivo importado
const showModal = ref(false);
const modalMessage = ref('Debes registrarte para ver más detalles de esta tarjeta');
const authStore = useAuthStore();

const handleCardClick = (card) => {
  if (!isAuthenticated.value) {

    showModal.value = true;
  } else {

    this.$router.push(card.link);
  }
};
</script>

<style scoped>
.card-list {
  display: flex;
background-color: aqua;
  gap: 20px;
  justify-content: start
}
</style>
